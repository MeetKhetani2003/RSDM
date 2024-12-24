import { assets } from "@/assets/assetimports";

const Hero = () => {
  return (
    <div>
      <section className="bg-[#ecedf1] max-h-screen flex items-center mx-auto overflow-hidden">
        <img
          src={assets.hero}
          className=" w-1/2  overflow-hidden pt-40"
          alt="hero"
        />
        <div className=" px-9 space-y-8">
          <h1 className="text-5xl font-bold text-blue-950">
            Certified Digital Marketing Master Course
          </h1>
          <p className="text-2xl text-gray-500">
            Best Digital Marketing Course for Students, Working Professionals
            and Entrepreneurs
          </p>
          <div className="bg-gradient-to-b from-white via-white  to-gray-100 border border-blue-950 rounded-xl p-6">
            <div className="flex items-center justify-around gap-4">
              <div className="space-y-4">
                <h1 className="text-xl">Our Course Includes:</h1>
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
                      className="flex font-medium text-lg items-center space-x-2"
                    >
                      <span className="text-blue-950">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 px-10">
                <p className="text-xl text-blue-800 font-semibold ">
                  40+ Digital Marketing Tools including latest AI Tools
                </p>
                <img src={assets.ai} alt="ai" />
              </div>
            </div>
            <div>
              <button className="bg-blue-950 text-white w-full py-4 mt-3 rounded-xl">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
