import { useState } from "react";

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <div className="relative h-[300px] md:h-[400px] w-full">
        <div
          style={{
            backgroundImage: "url('https://i.postimg.cc/7L45rBwC/signin.png')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        </div>
      </div>
      <div style={{ background: "#E9E9E7" }}>
        <div className="container mx-auto pb-10 pt-20 px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            {/* Form Section */}
            <div className="w-full md:w-1/2 bg-[#4252B1] p-8 border-4 border-red-600 rounded-lg">
              <h2 className="text-4xl font-serif font-bold text-center text-white mb-8">
                Create New Account
              </h2>
              <form>
                {/* Name and Email Fields */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      className="w-full px-3 py-2 border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Password and Confirm Password Fields */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="password" className="block text-white mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="w-full px-3 py-2 border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-white mb-2"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      className="w-full px-3 py-2 border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number Field */}
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your phone number"
                    className="w-full px-3 py-2 border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Upload Image Field */}
                <div className="mb-4">
                  <label htmlFor="image" className="block text-white mb-2">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    className="w-full px-3 py-2 bg-white border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Terms & Conditions Checkbox */}
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-2 leading-tight"
                    required
                  />
                  <label htmlFor="terms" className="text-white">
                    I agree to the{" "}
                    <a
                      href="https://example.com/terms-and-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline"
                    >
                      Terms & Conditions
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Sign Up
                </button>
              </form>

              {/* Additional Links */}
              <p className="mt-4 text-center text-white">
                Already have an account?
                <a href="/login" className="text-blue-500 ml-2 hover:underline">
                  Please Login
                </a>
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 md:h-[662px] border-4 border-red-600 mt-8 md:mt-0">
              <img
                src="https://i.postimg.cc/KY7m7xXj/singin.jpg"
                alt="Registration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
