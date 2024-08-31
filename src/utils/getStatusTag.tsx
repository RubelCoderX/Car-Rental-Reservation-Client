import { Tag } from "antd";

export const GetStatusTag = (status: string) => {
  switch (status) {
    case "completed":
      return <Tag className="text-red-600">completed</Tag>;
    case "ongoing":
      return <Tag className="text-green-600">ongoing</Tag>;
    case "pending":
      return <Tag className="text-yellow-600">Pending</Tag>;
    default:
      return <Tag className="text-gray-500">{status}</Tag>;
  }
};
