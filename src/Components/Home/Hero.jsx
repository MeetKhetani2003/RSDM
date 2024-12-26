import { assets } from "@/assets/assetimports";
import Stats from "./Stats";

const Hero = () => {
  return (
    <div className="bg-[#ecedf1] py-12">
      {/* Hero Section */}
      <section className="bg-[#ecedf1] py-8 md:py-6 md:max-h-screen flex flex-col md:flex-row items-center mx-auto   overflow-hidden font-openSans">
        {/* Hero Image (Hidden on mobile) */}
        <img
          src={assets.hero}
          className="w-full hidden -mt-36 md:block md:w-1/2 object-cover md:pt-40"
          alt="hero"
        />
        {/* Hero Content */}
        <div className="px-6 md:px-9 space-y-8 md:w-1/2 md:-ml-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 text-center md:text-left">
            Certified Digital Marketing Master Course
          </h1>
          <p className="text-xl md:text-xl font-bold text-center md:text-left">
            Best Digital Marketing Course for Students, Working Professionals,
            and Entrepreneurs
          </p>
          <div className="bg-gradient-to-b from-white via-white to-gray-100 border border-blue-950 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-xl text-gray-500">Our Course Includes:</h1>
                <ul>
                  {[
                    "Job Placement & Internships",
                    "Live Projects with Experts",
                    "44 Modules, 15+ Certifications",
                    "Affordable Course Fee",
                    "Learning Portal with Lifetime Access",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex font-semibold text-lg items-center space-x-2"
                    >
                      <span className="text-blue-950">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 md:px-10 md:w-1/2">
                <p className="text-xl text-blue-800 font-semibold">
                  40+ Digital Marketing Tools including latest AI Tools
                </p>
                <img src={assets.ai} alt="ai" />
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-blue-950 text-white w-full py-4 mt-3 rounded-xl hover:bg-blue-800 transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <Stats />
    </div>
  );
};

export default Hero;
