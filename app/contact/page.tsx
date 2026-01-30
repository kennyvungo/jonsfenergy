import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SF Energy Water Inspection",
  description:
    "Residential energy and water conservation inspections in San Francisco. Certified inspections for ordinance compliance, remodels, and property sales.",
};

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row min-h-[70vh] w-full bg-white text-[#545e75]">
      <div className="flex w-full md:w-1/2 flex-col items-center justify-center text-start px-6 py-10 font-[Saira]">
        <div className={`${roboto.className} text-4xl sm:text-5xl lg:text-6xl`}>
          Get in Touch
        </div>
        <div className={`${roboto.className} text-xl sm:text-2xl mt-4`}>
          To Schedule An Appointment
        </div>
      </div>

      <div className="flex w-full md:w-1/2 flex-col justify-center px-6 py-10 font-[Saira]">
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <div className="text-3xl sm:text-4xl">Jonathan Chan</div>
            <div className="text-lg sm:text-xl mt-2">
              Certified Residential Energy & Water Conservation #387
            </div>
            <div className="text-lg sm:text-xl">Business License #0450986</div>
          </div>

          <div className="text-2xl sm:text-3xl flex items-center">
            <FaPhoneAlt className="mr-4 text-[#3E92CC]" />
            415-860-1609 (call or text)
          </div>

          <div className="text-2xl sm:text-3xl flex items-center">
            <FaEnvelope className="mr-4 text-[#3E92CC]" />
            jonSFenergy@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
