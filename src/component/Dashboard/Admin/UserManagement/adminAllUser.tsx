import { Button, Space, Table, Tag } from "antd";
import { userManagementApi } from "../../../../redux/features/Admin/userManagementApi";

const adminAllUser = () => {
  const { data: allUser } = userManagementApi.useGetAllUserQuery(undefined);
  const userData = allUser?.data;
  console.log(userData);

  const tableData = userData?.map((item) => ({
    key: item._id,
    userName: item?.name,
    userEmail: item?.email,
    role: item?.role,
    phone: item?.phone,
  }));

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },

    {
      title: "Email",
      dataIndex: "userEmail",
      key: "userEmail",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Action",
      key: "action",
      render: (item) => (
        <Space size="middle">
          <Button>Update Role</Button>
          <Button>Delete</Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-r from-slate-500 p-8 mb-10 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center text-white">
          Manage All <span className="text-yellow-300">User</span>
        </h2>
      </div>
      <Table
        columns={columns}
        dataSource={tableData || []}
        pagination={false}
        className="overflow-x-auto"
      />
    </>
  );
};

export default adminAllUser;
