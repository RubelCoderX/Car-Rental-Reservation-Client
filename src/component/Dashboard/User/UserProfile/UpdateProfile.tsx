import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-slate-300 p-4 mb-10 rounded-lg shadow-md">
        <h2 className="text-4xl font-serif font-bold text-center text-black mb-8">
          Update Your <span className="text-red-600">Profile</span>
        </h2>
      </div>
      <div>
        <div>
          <div className="max-w-4xl mx-auto pb-10 pt-20 px-4">
            <div className="">
              {/* Form Section */}
              <div className="w-full  p-8  rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Name and Email Fields */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div>
                      <label htmlFor="name" className="block text-black mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="w-full px-3 py-2 border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <span className="text-red-500">Name is required</span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-black mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="w-full px-3 py-2 border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("email", {
                          required: true,
                          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                        })}
                      />
                      {errors.email && (
                        <span className="text-red-500">
                          {errors.email.type === "required"
                            ? "Email is required"
                            : "Invalid email address"}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Phone Number Field */}

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-black mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Your phone number"
                        className="w-full px-3 py-2 border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("phone", { required: true })}
                      />
                      {errors.phone && (
                        <span className="text-red-500">
                          Phone number is required
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="imageUrl"
                        className="text-left text-black"
                      >
                        Image URL
                      </label>
                      <input
                        id="imageUrl"
                        type=""
                        placeholder="Enter image URL"
                        className="w-full px-3 py-2 border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("image", {
                          required: "Image URL is required",
                        })}
                      />
                      {errors.image && (
                        <span className="text-red-500 text-sm block text-center">
                          {errors.image.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Upload Image Field */}
                  {/* <div className="mb-4">
                  <label htmlFor="image" className="block text-white mb-2">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    className="w-full px-3 py-2 bg-white border-b-4 border-transparent rounded-md hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("image")}
                  />
                  {errors.image && (
                    <span className="text-red-500">Image is required</span>
                  )}
                </div> */}
                  {/* <div className="flex flex-col gap-2">
                  <label htmlFor="imageUrl" className="text-left">
                    Image URL
                  </label>
                  <input
                    id="imageUrl"
                    placeholder="Enter image URL"
                    {...register("image", {
                      required: "Image URL is required",
                    })}
                  />
                  {errors.image && (
                    <span className="text-red-500 text-sm block text-center">
                      {errors.image.message}
                    </span>
                  )}
                </div> */}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
