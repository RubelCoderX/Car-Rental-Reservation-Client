import { Button, Space, Table, Tag } from "antd";
import { carApi } from "../../../../redux/features/Car/carApi";
import { toast } from "sonner";

const GetAllCarData = () => {
  const { data: allCars } = carApi.useGetAllCarsQuery({});
  const carData = allCars?.data;
  const [deleteCar] = carApi.useDeleteCarMutation();

  const tableData = carData?.map((item) => ({
    key: item._id,
    isDelete: item?.isDelete,
    carImage: item?.carImgUrl ? item.carImgUrl[0] : null,
    carName: item?.name,
    status: item?.status,
    carType: item?.carType,
  }));
  // delete car
  const handleDeleteCar = async (id) => {
    try {
      await deleteCar(id).unwrap();
      toast.success("Car Deleted Successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "carImage",
      key: "carImage",
      render: (carImage) => (
        <img
          src={carImage}
          alt="Car"
          style={{
            width: 70,
            height: 70,
            borderRadius: "100%",
            objectFit: "cover",
          }}
        />
      ),
    },
    {
      title: "Car Name",
      dataIndex: "carName",
      key: "carName",
    },

    {
      title: "Car Type",
      dataIndex: "carType",
      key: "carType",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          className={`status ${
            status === "completed" ? "text-green-500" : "text-red-500"
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
          <Button onClick={() => handleDeleteCar(item.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="bg-gradient-to-r from-slate-500 p-8 mb-10 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center text-white">
          Manage All <span className="text-yellow-300">Cars</span>
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

export default GetAllCarData;
