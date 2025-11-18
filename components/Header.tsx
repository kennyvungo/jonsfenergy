"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentPath = usePathname();
  const linkStyle = (path: string) =>
    currentPath === path
      ? { margin: "0 15px", textDecoration: "underline",fontFamily: "'Saira', sans-serif", color: "#545e75", textDecorationColor: "#3E92CC",         textDecorationThickness: "3px",    // make it bolder
        textUnderlineOffset: "6px",  }
      : { margin: "0 15px" ,fontFamily: "'Saira', sans-serif", color: "#545e75"};

  return (
    <header
      style={{
        height: "12vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        borderBottom: "1px solid",
        borderBottomColor: "#3E92CC",
        fontSize: '1.3rem',
        color: "#545e75",
      }}
    >
      <div style={{ display: "flex", width: "20%", justifyContent: "center" , color: "#3E92CC", fontFamily: "'Saira Condensed', sans-serif", fontSize: "3rem", fontWeight: "bold"}}>
        Jon SF Energy
      </div>
      <div
        style={{ display: "flex", width: "60%", justifyContent: "center" }}
      ></div>
      <div
        style={{
          display: "flex",
          width: "10%",
          justifyContent: "space-between",
        }}
      >
        <Link href="/services" style={linkStyle("/services")}>
          SERVICES
        </Link>
        <Link href="/contact" style={linkStyle("/contact")}>
          CONTACT
        </Link>
      </div>
            <div
        style={{ display: "flex", width: "5%", justifyContent: "center" }}
      ></div>
    </header>
  );
}
