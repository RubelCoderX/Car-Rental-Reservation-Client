export default function Component() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute top-0 left-0 w-[80%] h-[80%] bg-gray-100 rounded-full -z-10" />
          <div className="absolute bottom-0 right-0 w-[90%] h-[90%] bg-amber-300 rounded-full -z-20" />
          <img
            src="https://i.ibb.co/4sYp9Lj/Group-24.png"
            alt="Luxury convertible car"
            className="relative w-full h-auto object-cover -z-10"
          />
        </div>

        {/* Services Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold  mb-12">
            Our <span className="text-red-500">Services</span>
          </h1>

          <div className="space-y-8">
            {/* Car Hire */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 ">
                <img src="https://i.ibb.co/LhNWFw4/Vector.png" alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Car Hire</h2>
                <p className="text-gray-600 text-lg">
                  We pride ourselves in always going the extra mile for our
                  customers.
                </p>
              </div>
            </div>

            {/* Car Sales */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 ">
                <img src="https://i.ibb.co/LhNWFw4/Vector.png" alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Car Sales</h2>
                <p className="text-gray-600 text-lg">
                  We sale the best luxury cars across the world at a competitive
                  price.
                </p>
              </div>
            </div>

            {/* Hire a Driver */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 ">
                <img src="https://i.ibb.co/LhNWFw4/Vector.png" alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Hire a driver</h2>
                <p className="text-gray-600 text-lg">
                  You want to travel and feel comfortable, our drivers are
                  available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
