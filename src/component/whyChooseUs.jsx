const WhyChooseUs = () => {
  return (
    <div>
      <section className="text-center py-10 bg-white">
        <div className="mb-6">
          <span className="bg-green-100/50 text-green-600 px-5 p-2  rounded-md text-lg font-medium">
            Why Choose Us
          </span>
        </div>
        <h2 className="text-[45px] font-bold text-gray-900 mb-2">
          Great Opportunity For Adventure & Travels
        </h2>
        <p className="text-gray-500 text-lg mb-10">
          Trusted by Travelers: Certified and highly recommended by real customers for seamless travel experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 max-w-7xl mx-auto">
          {/* Card Item */}
          {[
            {
              title: "100%", desc: "Money Safe", icon: (
                <>
                  <path d="M12 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  <path d="M12 12c-2.2 0-4 1.8-4 4h8c0-2.2-1.8-4-4-4z" />
                </>
              )
            },
            {
              title: "17+ years", desc: "Travel Experience", icon: (
                <path d="M5 13l4 4L19 7" />
              )
            },
            {
              title: "8,50,203+", desc: "Happy Customers", icon: (
                <>
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <circle cx="17" cy="7" r="4" />
                </>
              )
            },
            {
              title: "200+", desc: "Ground Experts", icon: (
                <path d="M7 8h10M7 16h10M9 12h6" />
              )
            },
            {
              title: "24/7+", desc: "Supports", icon: (
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.12 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.12-8.63A2 2 0 014.1 2h3a2 2 0 012 1.72 12.1 12.1 0 00.56 2.57 2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.1 12.1 0 002.57.56A2 2 0 0122 16.92z" />
              )
            },
            {
              title: "Family", desc: "Discounts", icon: (
                <>
                  <path d="M20 12H4" />
                  <path d="M12 20V4" />
                </>
              )
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 h-74 flex flex-col justify-center items-center rounded-xl shadow-lg hover:bg-green-50 hover:scale-105 transform transition duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 hover:bg-green-700 p-4 rounded-full transition-colors duration-300 delay-100">
                  <svg
                    className="w-18 h-18 text-green-600 group-hover:text-white transition-colors duration-500 delay-150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>

              </div>
              <h3 className="text-xl font-bold mt-4 text-gray-900 group-hover:text-green-700">{item.title}</h3>
              <p className="text-md text-gray-500 group-hover:text-green-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
