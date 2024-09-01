/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, Space, Table } from "antd";
import { bookingApi } from "../../../../redux/features/Booking/bookingApi";
import { GetStatusTag, PaymentStatusTag } from "../../../../utils/getStatusTag";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { TCarBooking } from "../../../../type/global.type";
import Loader from "../../../../shared/Loader/Loader";
import Swal from "sweetalert2";
import { carApi } from "../../../../redux/features/Car/carApi";

const AllBookings = () => {
  const [returnCarWithPayment] = carApi.useCompletePaymentMutation();
  const {
    data: myBookings,
    isFetching,
    isLoading,
  } = bookingApi.useGetMyBookingsQuery(undefined);
  const bookingData = myBookings?.data;

  const [deleteMyBooking, { isLoading: isDeleting }] =
    bookingApi.useDeleteBookingMutation();
  const tableData = bookingData?.map((item: TCarBooking) => ({
    key: item._id,
    name: item?.car?.name,
    price: item?.car.pricePerHour,
    pickUpDate: item?.pickUpDate,
    pickOfTime: item?.pickTime,
    dropOffDate: item?.dropOffDate,
    dropOfTime: item?.dropTime,
    status: item?.status,
    paymentStatus: item?.paymentStatus,
    identity: item?.identity,
    identityNo: item?.identityNo,
    drivingLicenseNo: item?.drivingLicenseNo,
    totalCost: item?.totalCost,
  }));

  // Delete my booking with SweetAlert confirmation
  const handleDeleteMyBooking: SubmitHandler<FieldValues> = async (
    bookingId
  ) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteMyBooking(bookingId).unwrap();
          Swal.fire("Deleted!", "Your booking has been deleted.", "success");
        } catch (error: any) {
          Swal.fire(
            "Error!",
            error.message || "There was an error deleting your booking.",
            "error"
          );
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your booking is safe :)", "error");
      }
    });
  };
  // complete payment && return car
  const handleReturnCarWithPayment: SubmitHandler<FieldValues> = async (
    bookingId
  ) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to return the car with payment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, return it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await returnCarWithPayment(bookingId).unwrap();
          console.log(res);
          window.location.href = res.data.payment_url;
        } catch (error: any) {
          Swal.fire(
            "Error!",
            error.message || "There was an error returning your booking.",
            "error"
          );
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your booking is safe :)", "error");
      }
    });
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
      render: (last: number) => `Tk ${last.toFixed(2)}/ hour`,
    },

    {
      title: "Pick-Up Date",
      dataIndex: "pickUpDate",
      key: "pickUpDate",
    },
    {
      title: "Pick-Up Time",
      dataIndex: "pickOfTime",
      key: "pickOfTime",
    },
    {
      title: "Drop-Off Date",
      dataIndex: "dropOffDate",
      key: "dropOffDate",
      render: (text: any, record: { status: string }) =>
        record.status === "completed" ? text : "N/A",
    },
    {
      title: "Drop-Off Time",
      dataIndex: "dropOfTime",
      key: "dropOfTime",
      render: (text: any, record: { status: string }) =>
        record.status === "completed" ? text : "N/A",
    },
    {
      title: "Car Booking Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => GetStatusTag(status),
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (paymentStatus: string) => PaymentStatusTag(paymentStatus),
    },
    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
    },
    {
      title: "Action",
      key: "action",
      render: (item: any) => {
        const onGoing = item.status === "ongoing";
        const completed = item.status === "completed";
        const payment = item.status === "pending";

        return (
          <Space size="middle">
            <UpdateBookingModel data={item} />
            <Button
              onClick={() => handleDeleteMyBooking(item.key)}
              disabled={onGoing || isDeleting}
            >
              Delete
            </Button>
            <Button
              onClick={() => handleReturnCarWithPayment(item.key)}
              disabled={payment || completed}
            >
              Payment
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
          // pagination={false}
          className="overflow-x-auto"
        />
      )}
    </div>
  );
};

export default AllBookings;

const UpdateBookingModel = ({ data }: any) => {
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

      Swal.fire(
        "Updated!",
        "Your booking has been updated successfully.",
        "success"
      );
      handleCancel();
      reset();
    } catch (error: any) {
      Swal.fire(
        "Error!",
        error.message || "There was an error updating your booking.",
        "error"
      );
    }
  };

  const onGoing = data.status === "ongoing";
  const isCompleted = data.status === "completed";
  return (
    <div>
      <Button onClick={showModal} disabled={onGoing || isCompleted}>
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
