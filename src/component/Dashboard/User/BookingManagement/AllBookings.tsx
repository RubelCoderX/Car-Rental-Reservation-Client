/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, Space, Table, Spin } from "antd"; // Added Spin for loading indicator
import { bookingApi } from "../../../../redux/features/Booking/bookingApi";
import { toast } from "sonner";
import { GetStatusTag } from "../../../../utils/getStatusTag";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { TCarBooking } from "../../../../type/global.type";
import Loader from "../../../../shared/Loader/Loader";

const AllBookings = () => {
  const {
    data: myBookings,
    isFetching,
    isLoading,
  } = bookingApi.useGetMyBookingsQuery(undefined);
  const bookingData = myBookings?.data;
  const [deleteMyBooking, { isLoading: isDeleting }] =
    bookingApi.useDeleteBookingMutation(); // Track delete loading state
  const tableData = bookingData?.map((item: TCarBooking) => ({
    key: item._id,
    name: item?.car.name,
    price: item?.car.pricePerHour,
    pickUpDate: item?.pickUpDate,
    dropOffDate: item?.dropOffDate,
    status: item?.status,
    identity: item?.identity,
    identityNo: item?.identityNo,
    drivingLicenseNo: item?.drivingLicenseNo,
  }));

  // Delete my booking
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
              disabled={onGoing || isDeleting}
            >
              {isDeleting ? <Spin size="small" /> : "Delete"}
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
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <Table
          columns={columns}
          dataSource={tableData || []}
          pagination={false}
          className="overflow-x-auto"
        />
      )}
    </div>
  );
};

export default AllBookings;

const UpdateBookingModel = ({ data }: any) => {
  const [updateBooking, { isLoading: isUpdating }] =
    bookingApi.useUpdateBookingMutation(); // Track update loading state
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
          <div className="flex flex-col mb-3">
            <label>NID/PASSPORT</label>
            <select
              className="mt-1 bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
              {...register("identity")}
            >
              <option value="nid" selected={data.identity === "nid"}>
                NID
              </option>
              <option value="passport" selected={data.identity === "passport"}>
                Passport
              </option>
            </select>
          </div>

          <div className="flex flex-col mb-3">
            <label>NID/PASSPORT No.</label>
            <input
              className="mt-1 bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
              {...register("identityNo")}
              defaultValue={data.identityNo}
            />
          </div>

          <div className="flex flex-col mb-3">
            <label>Driving License No.</label>
            <input
              className="mt-1 bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
              {...register("drivingLicenseNo")}
              defaultValue={data.drivingLicenseNo}
            />
          </div>

          <div className="space-x-4">
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              key="submit"
              type="primary"
              loading={isUpdating}
              htmlType="submit"
              style={{ backgroundColor: "red" }}
            >
              Update
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
