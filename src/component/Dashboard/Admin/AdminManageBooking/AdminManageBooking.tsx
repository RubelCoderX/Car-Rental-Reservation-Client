/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Space, Table, Tag } from "antd";
import { bookingApi } from "../../../../redux/features/Booking/bookingApi";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { GetStatusTag } from "../../../../utils/getStatusTag";

const AdminManageBooking = () => {
  const { data: allBookings } = bookingApi.useGetAllBookingsQuery(undefined);
  const allBookingData = allBookings?.data;
  const [updateStatus] = bookingApi.useUpdateBookingStatusMutation();
  const [deleteBooking] = bookingApi.useDeleteBookingMutation();
  // handle approve
  const handleApprove: SubmitHandler<FieldValues> = async (bookingId) => {
    try {
      await updateStatus(bookingId).unwrap();
      toast.success("Booking Approved");
    } catch (error: any) {
      toast.error("Failed to approve booking");
    }
  };
  // handle delete booking
  const handleDeleteBooking: SubmitHandler<FieldValues> = async (bookingId) => {
    try {
      await deleteBooking(bookingId).unwrap();

      toast.success("Booking Deleted Successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const tableData = allBookingData?.map((item) => ({
    key: item._id,
    userName: item?.user?.name,
    userEmail: item?.user?.email,
    name: item?.car.name,
    price: item?.car.pricePerHour,
    pickUpDate: item?.pickUpDate,
    pickUpTime: item?.pickUpTime,
    dropOffDate: item?.dropOffDate,
    dropOffTime: item?.dropOffTime,
    status: item?.status,
  }));

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Car Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "User Email",
      dataIndex: "userEmail",
      key: "userEmail",
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
      render: (text, record) => (record.status === "completed" ? text : "N/A"),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => GetStatusTag(status),
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        const isOngoing = item.status === "ongoing";
        return (
          <Space size="middle">
            <Button
              onClick={() => handleApprove(item.key)}
              disabled={isOngoing}
            >
              Approve
            </Button>
            <Button onClick={() => handleDeleteBooking(item.key)}>
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];
  return (
    <div className="bg-gray-50  min-h-screen p-4">
      <div className="bg-gradient-to-r from-slate-500  p-8 mb-10 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center text-white">
          Manage All <span className="text-yellow-300">User Bookings</span>
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

export default AdminManageBooking;
