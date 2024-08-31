import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const AddCarData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // Handle form submission logic here, e.g., send data to the API
    console.log(data);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="bg-gradient-to-r from-slate-500 p-6 mb-10 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center text-white">
          Create New <span className="text-yellow-300">Car</span>
        </h2>
      </div>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Car Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Car Name is required" })}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">
                  {String(errors.name.message)}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="color"
                className="block text-sm font-medium text-gray-700"
              >
                Color
              </label>
              <input
                type="text"
                {...register("color", { required: "Car color is required" })}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              {errors.color && (
                <p className="text-red-500 text-xs">
                  {String(errors.color.message)}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="isElectric"
                className="block text-sm font-medium text-gray-700"
              >
                Is Electric?
              </label>
              <select
                {...register("isElectric", {
                  required: "Please select if the car is electric",
                })}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              >
                <option value="">Select...</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              {errors.isElectric && (
                <p className="text-red-500 text-xs">
                  {String(errors.isElectric.message)}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="pricePerHour"
                className="block text-sm font-medium text-gray-700"
              >
                Price Per Hour
              </label>
              <input
                type="number"
                {...register("pricePerHour", {
                  required: "Price Per Hour is required",
                })}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              {errors.pricePerHour && (
                <p className="text-red-500 text-xs">
                  {String(errors.pricePerHour.message)}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="maxSeats"
                className="block text-sm font-medium text-gray-700"
              >
                Max Seats
              </label>
              <input
                type="number"
                {...register("maxSeats", {
                  required: "Max Seats are required",
                })}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              {errors.maxSeats && (
                <p className="text-red-500 text-xs">
                  {String(errors.maxSeats.message)}
                </p>
              )}
            </div>

            <div>
              <div>
                <label
                  htmlFor="carImgUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Car Image
                </label>
                <input
                  type="file"
                  // onChange={handleImageChange}
                  accept="image/*"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              {errors.carImgUrl && (
                <p className="text-red-500 text-xs">
                  {String(errors.carImgUrl.message)}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                {...register("location", { required: "Location is required" })}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              {errors.location && (
                <p className="text-red-500 text-xs">
                  {String(errors.location.message)}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="gearType"
                className="block text-sm font-medium text-gray-700"
              >
                Gear Type
              </label>
              <input
                type="text"
                {...register("gearType", { required: "Gear Type is required" })}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              {errors.gearType && (
                <p className="text-red-500 text-xs">
                  {String(errors.gearType.message)}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="fuelType"
                className="block text-sm font-medium text-gray-700"
              >
                Fuel Type
              </label>
              <input
                type="text"
                {...register("fuelType", { required: "Fuel Type is required" })}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              {errors.fuelType && (
                <p className="text-red-500 text-xs">
                  {String(errors.fuelType.message)}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="carType"
                className="block text-sm font-medium text-gray-700"
              >
                Car Type
              </label>
              <input
                type="text"
                {...register("carType", { required: "Car Type is required" })}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              {errors.carType && (
                <p className="text-red-500 text-xs">
                  {String(errors.carType.message)}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Car Description is required",
              })}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.description && (
              <p className="text-red-500 text-xs">
                {String(errors.description.message)}
              </p>
            )}
          </div>

          <div className="flex justify-center col-span-full">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Add Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCarData;
