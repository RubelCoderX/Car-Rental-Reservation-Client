/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { authApi } from "../../redux/features/Auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "../../utils/verifyToken";
import { setUser } from "../../redux/features/Auth/authSlice";
import React, { useState } from "react";

interface LoginModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [addLogin, { isLoading }] = authApi.useLoginMutation();
  // const defaultValues = {
  //   email: "rubel29879@gmail.com",
  //   password: "password1234",
  // };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const res = await addLogin(data).unwrap();
      verifyToken(res.token);

      dispatch(setUser({ user: res.data, token: res.token }));
      toast.success("Logged in", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
      setIsModalOpen(false);
      navigate("/");
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error?.data?.message || "Login failed", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title=" Welcome to Drive Lux"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div>
        <div className="bg-[#4252B1] p-4">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Form Section */}
            <div className="w-full  rounded-lg">
              <h2 className="text-4xl font-serif font-bold text-center text-white mb-8">
                Please Login to Your Account
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold text-white mb-2"
                  >
                    Write Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none "
                    {...register("email", { required: true })}
                  />
                </div>

                {/* Password Field */}
                <div className="mt-6 mb-4 relative">
                  <label
                    htmlFor="password"
                    className="block font-semibold mb-3 text-white"
                  >
                    Write Your Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none"
                    {...register("password", { required: true })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-10"
                  >
                    {showPassword ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full mt-4 py-2 rounded-md transition duration-200 
                    ${
                      isLoading ? "bg-blue-300" : "bg-red-500 hover:bg-red-600"
                    } 
                    text-white flex items-center justify-center`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="loader-icon"></span>
                      <span className="ml-2">Logging in...</span>
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>

              {/* Additional Links */}
              <p className="mt-4 text-center text-white">
                Don't have an account?
                <a
                  href="/register"
                  className="text-blue-500 ml-2 hover:underline"
                >
                  Please Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
