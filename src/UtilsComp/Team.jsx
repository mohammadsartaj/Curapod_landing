import React from "react";

const Team = () => {
  // Team members data
  const members = [
    {
      name: "Andrew Huberman, Ph.D.",
      role: "Neuroscientist, Stanford professor, and host of the top-ranked Huberman Lab podcast",
      image: "", // replace with actual image path later
    },
    {
      name: "Peter Attia, M.D.",
      role: "Physician focusing on the applied science of longevity and host of The Drive podcast",
      image: "",
    },
    {
      name: "Lex Fridman, Ph.D.",
      role: "Research scientist, AI expert, and host of the globally popular Lex Fridman Podcast",
      image: "",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 px-4 py-16">
      {/* Title */}
      <h1 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl text-white">
        Backed By Industry Leaders
      </h1>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Image placeholder */}
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-[#D9D9D9] rounded-2xl flex items-center justify-center">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <span className="text-gray-600">Image</span>
              )}
            </div>

            {/* Name */}
            <h2 className="mt-5 font-medium text-lg md:text-xl lg:text-2xl text-white">
              {member.name}
            </h2>

            {/* Role / Bio */}
            <p className="mt-2 text-sm md:text-base text-gray-300">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
