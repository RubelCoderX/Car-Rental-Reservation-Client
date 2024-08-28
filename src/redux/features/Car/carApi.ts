import { baseApi } from "../../api/baseApi";

export const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCar: builder.mutation({
      query: (carData) => ({
        url: "/cars",
        method: "POST",
        body: carData,
      }),
    }),
    getAllCars: builder.query({
      query: ({ name, carType, price, location }) => {
        console.log(price);
        const params = new URLSearchParams();
        if (name) {
          params.append("name", name);
        }
        if (carType) {
          params.append("carType", carType);
        }
        if (price > 0) {
          params.append("price", price);
        }
        if (location) {
          params.append("location", location);
        }
        return {
          url: "/cars",
          method: "GET",
          params,
        };
      },
    }),
    getSingleCars: builder.query({
      query: (id: string) => ({
        url: `/cars/${id}`,
        method: "GET",
      }),
    }),
    searchCars: builder.mutation({
      query: (searchData) => {
        return {
          url: "/cars/search-cars",
          method: "POST",
          body: searchData,
        };
      },
    }),
  }),
});
