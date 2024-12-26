import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

// Replace these with your actual company logos
const companyLogos = [
  "https://d9hhrg4mnvzow.cloudfront.net/course.digitalvidya.com/best-digital-marketing-course/cb7fca41-2000px-sony-logo-svg_103000j000000000000028.png",
  "https://d9hhrg4mnvzow.cloudfront.net/course.digitalvidya.com/best-digital-marketing-course/e7cf988e-5fbfc37a-tata-consultancy-services-logo-blue-svg-0_1000000000000000000028.png",
  "https://d9hhrg4mnvzow.cloudfront.net/course.digitalvidya.com/best-digital-marketing-course/766e9c24-588e5990-accenture-logo-03l00z03l00z000000_1000000000000000000028.png",
  "https://d9hhrg4mnvzow.cloudfront.net/course.digitalvidya.com/best-digital-marketing-course/0cdba1f0-digitalvidya-color-high-2_104g01f047010003006028.png",
  "https://d9hhrg4mnvzow.cloudfront.net/course.digitalvidya.com/best-digital-marketing-course/19529082-bb4f886c-automobiles-05o00r05j00r002000_1000000000000000000014.jpg",
  "https://d9hhrg4mnvzow.cloudfront.net/course.digitalvidya.com/best-digital-marketing-course/d1fd5d4e-2daf9399-ceat-tyres-logo-f14e11f4ba-seeklogo-com-0_1000000000000000000028.png",
];

const LogoCard = ({ logo }) => (
  <div
    className={cn(
      "flex items-center justify-center  mix-blend-multiply p-4 bg-gray-100 dark:bg-gray-800",
      "rounded-lg shadow-md"
    )}
  >
    <img
      src={logo}
      alt="Company Logo"
      className="w-full object-contain mix-blend-multiply max-h-20  min-h-20 min-w-32 max-w-32"
    />
  </div>
);

export function LogoMarquee() {
  return (
    <div className="relative flex-col flex  w-full items-center justify-center overflow-hidden rounded-lg border bg-white dark:bg-gray-900 gap-8">
      {/* First Marquee Row */}
      <Marquee className="[--duration:20s]">
        {companyLogos.map((logo, index) => (
          <div key={index}>
            <LogoCard logo={logo} />
          </div>
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {companyLogos.map((logo, index) => (
          <div key={index}>
            <LogoCard logo={logo} />
          </div>
        ))}
      </Marquee>

      {/* Second Marquee Row (Reverse) */}
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {companyLogos.map((logo, index) => (
          <LogoCard key={`reverse-${index}`} logo={logo} />
        ))}
      </Marquee> */}

      {/* Gradient Effects */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent dark:from-gray-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent dark:from-gray-900"></div>
    </div>
  );
}

export default LogoMarquee;
