/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Space, Table, Tag } from "antd";
import { userManagementApi } from "../../../../redux/features/Admin/userManagementApi";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { TUser } from "../../../../type/global.type";
import { userApi } from "../../../../redux/features/user/userApi";
import Loader from "../../../../shared/Loader/Loader";
import { useState } from "react";

const AdminAllUser = () => {
  const { data: allUser, isLoading: isLoadingAllUsers } =
    userManagementApi.useGetAllUserQuery(undefined);
  const userData = allUser?.data;

  const [updateRole, { isLoading: isUpdatingRole }] =
    userManagementApi.useMakeAdminMutation();
  const [deleteUser, { isLoading: isDeletingUser }] =
    userApi.useDeleteUserMutation();

  const [loadingId, setLoadingId] = useState<string | null>(null);

  const tableData = userData?.map((item: TUser) => ({
    key: item._id,
    userName: item?.name,
    userEmail: item?.email,
    role: item?.role,
    phone: item?.phone,
    status: item?.isDeleted ? "Blocked" : "Active",
  }));

  // delete user
  const handleDeleteUser: SubmitHandler<FieldValues> = async (id) => {
    try {
      setLoadingId(id);
      await deleteUser(id).unwrap();
      toast.success("User Deleted Successfully");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoadingId(null);
    }
  };

  // update role
  const updateRoleHandler = async (userId: string) => {
    try {
      setLoadingId(userId);
      await updateRole(userId).unwrap();
      toast.success("User Role Updated Successfully");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoadingId(null);
    }
  };

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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Blocked" ? "red" : "green"}>{status}</Tag>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag color={role === "admin" ? "green" : "blue"}>{role}</Tag>
      ),
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
          <Button
            onClick={() => updateRoleHandler(item.key)}
            loading={isUpdatingRole && loadingId === item.key}
          >
            Update Role
          </Button>
          <Button
            onClick={() => handleDeleteUser(item.key)}
            loading={isDeletingUser && loadingId === item.key}
            disabled={item.status === "Blocked"}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="bg-gradient-to-r from-slate-500 p-8 mb-10 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center text-white">
          Manage All <span className="text-yellow-300">Users</span>
        </h2>
      </div>
      {isLoadingAllUsers ? (
        <div className="flex justify-center items-center h-full">
          <Loader />
        </div>
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

export default AdminAllUser;
