export default function Home() {
  return (
    <div
      className="flex-1 items-center justify-center bg-zinc-50 font-sans"
      style={{ height: "70vh", color: "#545e75", fontSize:"20px", width: "100vw", flexDirection: "column", justifyContent: "flex-start", display: "flex", paddingTop:"10vh" }}
    >
      <div style={{fontSize: "60px",fontFamily: "'Saira', sans-serif",color: "#3E92CC"}}>San Francisco Energy & Water Conservation Inspection</div>

      <div >
        The Residential Energy and Water Conservation ordinance requires
        residential, multi-family, and commercial properties to meet energy and
        water conservation standards.
      </div>
      <div></div>
      <ul>
        If you are preparing to sell or remodel your property:
        <li>Obtain a valid inspection</li>
        <li>Complete any needed upgrades --- Install basic energy and water conservation devices or materials</li>
        <li>Obtain a Certificate of Completion</li>
        <li>Document compliance with conservation requirements before transfer of title if you are selling or at the time or property alterations or improvements</li>
      </ul>
    </div>
  );
}
