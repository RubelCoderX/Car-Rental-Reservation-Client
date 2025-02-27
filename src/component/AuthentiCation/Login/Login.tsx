/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form";
import { authApi } from "../../../redux/features/Auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "../../../redux/hooks";
import { verifyToken } from "../../../utils/verifyToken";
import { setUser } from "../../../redux/features/Auth/authSlice";
import { useNavigate } from "react-router-dom";

// Adjust the path as necessary

const Login = () => {
  const { register, handleSubmit } = useForm();
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

      console.log("Navigating to home...");
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

  // if (isLoading) {
  //   return <Loader />; // Show loader while logging in
  // }

  return (
    <div>
      {/* Background Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <div
          style={{
            backgroundImage: "url('https://i.postimg.cc/7Lr2YHMZ/login.png')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div style={{ background: "#E9E9E7" }}>
        <div className="container mx-auto pb-10 pt-20 px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            {/* Form Section */}
            <div className="w-full my-auto md:w-1/2 bg-[#4252B1] p-8 rounded-lg">
              <h2 className="text-4xl font-serif font-bold text-center text-white mb-8">
                Welcome to Drive Lux
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("email", { required: true })}
                  />
                </div>

                {/* Password Field */}
                <div className="mt-6 mb-4">
                  <label htmlFor="password" className="block text-white mb-3">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("password", { required: true })}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full mt-4 py-2 rounded-md transition duration-200 
                    ${
                      isLoading
                        ? "bg-blue-300"
                        : "bg-blue-500 hover:bg-blue-600"
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
                    "Login"
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
    </div>
  );
};

export default Login;
