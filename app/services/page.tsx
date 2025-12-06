
export default function Home() {
  return (
    <div className="flex min-h-[70vh] w-screen flex-col items-center bg-zinc-50 pt-[10vh] px-4 text-[#545e75] font-sans">
      <h1
        className={`text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-[#3E92CC] font-[Saira] text-center max-w-9xl`}
      >
        San Francisco Energy & Water Conservation Inspection
      </h1>

      <p className="mt-6 text-base sm:text-lg text-left max-w-2xl">
        The Residential Energy and Water Conservation ordinance requires
        residential, multi-family, and commercial properties to meet energy and
        water conservation standards.
      </p>

      <ul className="mt-6 max-w-2xl text-base sm:text-lg list-disc list-inside space-y-2">
        <p className="font-semibold">
          If you are preparing to sell or remodel your property:
        </p>
        <li>Obtain a valid inspection</li>
        <li>
          Complete any needed upgrades — Install basic energy and water
          conservation devices or materials
        </li>
        <li>Obtain a Certificate of Completion</li>
        <li>
          Document compliance with conservation requirements before transfer of
          title if you are selling or at the time of property alterations or
          improvements
        </li>
      </ul>
    </div>
  );
}