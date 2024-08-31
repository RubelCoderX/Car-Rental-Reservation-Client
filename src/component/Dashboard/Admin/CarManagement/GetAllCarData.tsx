import { useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import { carApi } from "../../../../redux/features/Car/carApi";
import { toast } from "sonner";
import Loader from "../../../../shared/Loader/Loader";
import { TCar } from "../../../../type/global.type";

const GetAllCarData = () => {
  const { data: allCars, isLoading: isFetching } = carApi.useGetAllCarsQuery(
    {}
  );
  const carData = allCars?.data;
  const [deleteCar, { isLoading: isDeleting }] = carApi.useDeleteCarMutation();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const tableData = carData?.map((item: TCar) => ({
    key: item._id,
    isDelete: item?.isDelete,
    carImage: item?.carImgUrl ? item.carImgUrl[0] : null,
    carName: item?.name,
    status: item?.status,
    carType: item?.carType,
  }));

  // delete car
  const handleDeleteCar = async (id: string) => {
    try {
      setLoadingId(id);
      await deleteCar(id).unwrap();
      toast.success("Car Deleted Successfully");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoadingId(null);
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "carImage",
      key: "carImage",
      render: (carImage: string) => (
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
      render: (status: string) => (
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
      render: (item: any) => (
        <Space size="middle">
          <Button
            onClick={() => handleDeleteCar(item.key)}
            loading={isDeleting && loadingId === item.key}
            disabled={isFetching || (isDeleting && loadingId === item.key)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  if (isFetching)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );

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
