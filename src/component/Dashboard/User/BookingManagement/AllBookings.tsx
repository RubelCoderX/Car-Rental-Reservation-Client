/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, Space, Table } from "antd";
import { bookingApi } from "../../../../redux/features/Booking/bookingApi";
import { toast } from "sonner";
import { GetStatusTag } from "../../../../utils/getStatusTag";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { TCarBooking } from "../../../../type/global.type";

const AllBookings = () => {
  const { data: myBookings } = bookingApi.useGetMyBookingsQuery(undefined);
  const bookingData = myBookings?.data;
  const [deleteMyBooking] = bookingApi.useDeleteBookingMutation();
  const tableData = bookingData?.map((item: TCarBooking) => ({
    key: item._id,
    name: item?.car.name,
    price: item?.car.pricePerHour,
    pickUpDate: item?.pickUpDate,
    dropOffDate: item?.dropOffDate,
    status: item?.status,
  }));
  // delete my booking
  const handleDeleteMyBooking: SubmitHandler<FieldValues> = async (
    bookingId
  ) => {
    try {
      await deleteMyBooking(bookingId).unwrap();
      toast.success("Booking Deleted Successfully", { position: "top-center" });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const columns = [
    {
      title: "Car Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price.toFixed(2)}/hour`,
    },
    {
      title: "Pick-Up Date",
      dataIndex: "pickUpDate",
      key: "pickUpDate",
    },

    {
      title: "Drop-Off Date",
      dataIndex: "dropOffDate",
      key: "dropOffDate",
      render: (text: any, record: { status: string }) =>
        record.status === "completed" ? text : "N/A",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => GetStatusTag(status),
    },
    {
      title: "Action",
      key: "action",
      render: (item: any) => {
        const onGoing = item.status === "ongoing";

        return (
          <Space size="middle">
            <UpdateBookingModel data={item} />
            <Button
              onClick={() => handleDeleteMyBooking(item.key)}
              disabled={onGoing}
            >
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <div className="bg-slate-300 p-4 mb-10 rounded-lg shadow-md">
        <h2 className="text-4xl font-serif font-bold text-center text-black mb-8">
          Total Bookings <span className="text-red-600">List</span>
        </h2>
      </div>
      <Table
        columns={columns}
        dataSource={tableData || []}
        pagination={false}
        className="overflow-x-auto"
      />
    </div>
  );
};

export default AllBookings;

const UpdateBookingModel = ({ data }: any) => {
  const [card, setCard] = useState(true);
  const [updateBooking] = bookingApi.useUpdateBookingMutation();
  const { register, handleSubmit, reset } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSubmit: SubmitHandler<FieldValues> = async (updateData) => {
    const bookingData = {
      identity: updateData?.identity,
      identityNo: updateData?.identityNo,
      drivingLicenseNo: updateData?.drivingLicenseNo,
    };
    try {
      await updateBooking({
        bookingId: data.key,
        bookingData,
      }).unwrap();

      toast.success("Booking Updated Successfully", {
        position: "top-center",
      });
      handleCancel();
      reset();
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const onGoing = data.status === "ongoing";
  return (
    <div>
      <Button onClick={showModal} disabled={onGoing}>
        Update
      </Button>
      <Modal
        title="Update Booking"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mx-auto ">
            <div className="bg-white p-3 rounded-lg shadow-md">
              <div className="flex mb-6 border-b-2 border-gray-200 ">
                <div className="text-red-500 items-center font-semibold py-2 px-4 border-b-2 border-blue-500">
                  Booking Form
                </div>
              </div>

              {/* Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Return Date & Time */}

                {/* Quantity */}
                <div>
                  <label className="block font-semibold mb-2">
                    Select Nid / Passport
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-md"
                    {...register("identity")}
                  >
                    <option value="nid">Nid</option>
                    <option value="passport">Passport</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Passport No / Nid No
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="passport no"
                    {...register("identityNo")}
                  />
                </div>

                {/* Driving License */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">
                    Driving License
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="driving license"
                    {...register("drivingLicenseNo")}
                  />
                </div>
                {/* payment section */}
                <section className="lg:col-span-2 flex flex-col">
                  <div className="h-full  ">
                    {/* Pay component */}
                    <div>
                      {/* Card body */}
                      <div className="relative max-w-lg mx-auto">
                        <div className="">
                          {/* Toggle */}
                          <div className="flex justify-center mb-6">
                            <div className="relative flex w-full p-1 bg-gray-50 rounded">
                              <span
                                className="absolute inset-0 m-1 pointer-events-none"
                                aria-hidden="true"
                              >
                                <span
                                  className={`absolute inset-0 w-1/2 bg-white rounded border border-gray-200 shadow-sm transform transition duration-150 ease-in-out ${
                                    card ? "translate-x-0" : "translate-x-full"
                                  }`}
                                ></span>
                              </span>
                              <p
                                className="relative flex-1 md:text-sm md:p-2 md:font-medium transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 items-center justify-center flex cursor-pointer"
                                onClick={() => setCard(true)}
                              >
                                Pay With Card
                              </p>
                              <p
                                className="relative flex-1 md:text-sm font-medium md:p-2 text-center transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 items-center justify-center flex cursor-pointer hover:cursor-pointer"
                                onClick={() => setCard(false)}
                              >
                                Pay With Online Banking
                              </p>
                            </div>
                          </div>

                          {/* Card form */}
                          {card && (
                            <div className="space-y-4">
                              <div>
                                <label
                                  className="block font-semibold mb-2"
                                  htmlFor="card-nr"
                                >
                                  Card Number
                                  <span className="text-red-500">*</span>
                                </label>
                                <input
                                  id="card-nr"
                                  className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                  type="text"
                                  placeholder="1234 1234 1234 1234"
                                />
                              </div>
                              <div className="flex space-x-4">
                                <div className="flex-1">
                                  <label
                                    className="block font-semibold mb-2"
                                    htmlFor="card-expiry"
                                  >
                                    Expiry Date{" "}
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <input
                                    id="card-expiry"
                                    className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                    type="text"
                                    placeholder="MM/YY"
                                  />
                                </div>
                                <div className="flex-1">
                                  <label
                                    className="block font-semibold mb-2"
                                    htmlFor="card-cvc"
                                  >
                                    CVC <span className="text-red-500">*</span>
                                  </label>
                                  <input
                                    id="card-cvc"
                                    className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                    type="text"
                                    placeholder="CVC"
                                  />
                                </div>
                              </div>
                              <div>
                                <label
                                  className="block font-semibold mb-2"
                                  htmlFor="card-name"
                                >
                                  Name on Card
                                  <span className="text-red-500">*</span>
                                </label>
                                <input
                                  id="card-name"
                                  className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                  type="text"
                                  placeholder="John Doe"
                                />
                              </div>
                              <div>
                                <label
                                  className="block font-semibold mb-2"
                                  htmlFor="card-email"
                                >
                                  Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                  id="card-email"
                                  className="text-sm text-gray-800 bg-white mb-4 border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                  type="email"
                                  placeholder="john@company.com"
                                />
                              </div>
                            </div>
                          )}

                          {/* PayPal form */}
                          {!card && (
                            <div>
                              <div className="flex flex-col mb-4">
                                <label className="font-semibold mb-2">
                                  Mobile Banking(Bkash/Nogod/Rocket)
                                </label>
                                <input
                                  className="mt-1 bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                                  placeholder="banking no"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Booking Button */}
                <div className="md:col-span-2 mt-4">
                  <button className="border-2 border-red-600 px-4 w-full py-1 text-red-600 hover:bg-black hover:text-white transition mb-2 md:mb-0">
                    Update Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};
