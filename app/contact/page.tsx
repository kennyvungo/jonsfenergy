import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Roboto } from "next/font/google";

const roboto = Roboto({
weight: ["400", "700"],
subsets: ["latin"],
display: "swap",
});
export default function Contact() {
  return (
    <div style={{ height: "70vh", flexDirection: "row", display: "flex",color:"#545e75",    backgroundColor: "white" }}>
      <div
        style={{
          width: "50%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          fontFamily: "'Saira', sans-serif",
          color: "#545e75"
        }}
      >
        <div className={roboto.className} style={{fontSize:"60px"}}>Get in Touch</div>
        <div className={roboto.className} style={{fontSize:"1.5rem"}}>To Schedule An Appointment</div>
      </div>
      <div
               style={{
          width: "50%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
   
          display: "flex",
          fontFamily: "'Saira', sans-serif"
        }}
      >
        <div style={{height: "40%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start",}}>
        <div>

        <div style={{fontSize:"3rem"}}>Jonathan Chan</div>
        <div style={{fontSize:"1.5rem"}}>Certified Residential Energy & Water Conservation #387 </div>
        <div style={{fontSize:"1.5rem"}}>Business License #0450986 </div>
        </div>
        <div style={{fontSize:"2rem", display: "flex",flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}> <FaPhoneAlt style={{marginRight: 20,color: "#3E92CC"}}/>  415-860-1609 (call or text)</div>
        <div style={{fontSize:"2rem", display: "flex",flexDirection:"row", justifyContent: "center", alignItems: "center"}}> <FaEnvelope style={{marginRight: 20, color: "#3E92CC"}} /> jonSFenergy@gmail.com</div>
        </div>


      </div>
    </div>
  );
}
