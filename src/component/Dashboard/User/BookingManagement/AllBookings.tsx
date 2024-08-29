import { Button, Space, Table, Tag } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { bookingApi } from "../../../../redux/features/Booking/bookingApi";
import { FaEdit } from "react-icons/fa";

const AllBookings = () => {
  const { data: myBookings } = bookingApi.useGetMyBookingsQuery(undefined);
  const bookingData = myBookings?.data;
  const tableData = bookingData?.map((item) => ({
    key: item._id,
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
      title: "Car Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price.toFixed(2)}/hour`,
    },
    {
      title: "Pick-Up Date",
      dataIndex: "pickUpDate",
      key: "pickUpDate",
    },
    {
      title: "Pick-Up Time",
      dataIndex: "pickUpTime",
      key: "pickUpTime",
    },
    {
      title: "Drop-Off Date",
      dataIndex: "dropOffDate",
      key: "dropOffDate",
    },
    {
      title: "Drop-Off Time",
      dataIndex: "dropOffTime",
      key: "dropOffTime",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          className={`status ${
            status === "completed" ? "text-green-500" : "text-yellow-500"
          }`}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (item) => (
        <Space size="middle">
          <Button type="primary" icon={<FaEdit />} />
          <Button type="primary" danger icon={<MdDeleteForever />} />
        </Space>
      ),
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
