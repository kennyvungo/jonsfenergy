import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-zinc-50 px-4 py-20 flex flex-col items-center space-y-10 text-[#545e75] font-sans">
      {/* SECTION 1 */}
      <section className="max-w-full flex flex-col items-start space-y-6 text-left overflow-x-auto">
        <h1 className="text-3xl md:text-5xl text-[#3E92CC] font-[Saira] lg:whitespace-nowrap">
          San Francisco Energy & Water Conservation Inspection
        </h1>
        <p className="text-base sm:text-lg lg:whitespace-nowrap">
          The Residential Energy and Water Conservation ordinance requires
          residential, multi-family, and commercial properties to meet energy
          and water conservation standards.
        </p>
        <p className="text-base sm:text-lg  lg:whitespace-nowrap">
          If you are preparing to sell or remodel your property:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base sm:text-lglg:whitespace-nowrap mb-16">
          <li>Obtain a valid inspection</li>
          <li>
            Complete any needed upgrades — install basic energy and water
            conservation devices or materials
          </li>
          <li>
            Obtain a Certificate of Completion
            <ul className="list-[circle] list-inside pl-5 mt-2 space-y-1">
              <li>
                Document compliance with conservation requirements before
                transfer of title (if you are selling) or at the time of
                property alterations or improvements
              </li>
            </ul>
          </li>
        </ul>

        {/* SECTION 2 */}
        <section className="max-w-full flex flex-col items-start space-y-6 text-left overflow-x-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-[#3E92CC] font-[Saira] lg:whitespace-nowrap">
            Inspection Overview
          </h2>
          <p className="text-base sm:text-lg lg:whitespace-nowrap">
            This section provides a brief overview of items reviewed during the
            inspection.
          </p>
          <div className="space-y-4 w-full">
            <p className=" text-base sm:text-lg lg:whitespace-nowrap">
              Water conservation devices and measures:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg lg:whitespace-nowrap">
              <li>Low-flow showerheads</li>
              <li>Efficient faucets and faucet aerators</li>
              <li>Efficient toilets</li>
              <li>Leak repair</li>
            </ul>
          </div>
          <div className="space-y-4 w-full">
            <p className=" text-base sm:text-lg lg:whitespace-nowrap">
              Energy conservation devices and measures:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg lg:whitespace-nowrap">
              <li>Insulating accessible attic space</li>
              <li>
                Weather stripping doors leading from heated to unheated areas
              </li>
              <li>Insulating hot water heaters</li>
              <li>Caulk and seal openings in building exterior</li>
              <li>Insulate accessible heating and cooling ducts</li>
            </ul>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="max-w-full flex flex-col items-start space-y-8 text-left overflow-x-auto">
          <h2 className="text-3xl md:text-4xl text-[#3E92CC] font-[Saira] lg:whitespace-nowrap">
            Contact Me
          </h2>
          <p className=" text-base sm:text-lg lg:whitespace-nowrap">
            If you have any questions or would like to make an appointment, feel free to reach out.
          </p>
          <div className="flex flex-col items-start space-y-6 w-full overflow-x-auto">
            <div className="lg:whitespace-nowrap">
              <div className="text-3xl sm:text-4xl font-[Saira]">
                Jonathan Chan
              </div>
              <div className="text-lg sm:text-xl font-[Saira] mt-2">
                Certified Residential Energy & Water Conservation #387
              </div>
              <div className="text-lg sm:text-xl font-[Saira]">
                Business License #0450986
              </div>
            </div>
            <div className="flex items-center text-2xl sm:text-3xl space-x-4 lg:whitespace-nowrap">
              <FaPhoneAlt className="text-[#3E92CC]" />
              <span>415-860-1609 (call or text)</span>
            </div>
            <div className="flex items-center text-2xl sm:text-3xl space-x-4 lg:whitespace-nowrap">
              <FaEnvelope className="text-[#3E92CC]" />
              <span>jonSFenergy@gmail.com</span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
