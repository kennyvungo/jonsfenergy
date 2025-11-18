"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        height: "20vh",
        width: "100%",
        backgroundColor: "#3E92CC",
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginLeft: "5%",
        }}
      >
        <div
          style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Jon SF Energy
        </div>
        <div>236 West Portal Ave #559</div>
        <div>San Francisco, CA 94127</div>
      </div>
      <div style={{ width: "65%" }}></div>
      <div
        style={{
          width: "10%",
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "space-around",
          textDecoration: "underline"
        }}
      >
        <Link href="/services">SERVICES</Link>
        <Link href="/contact">CONTACT</Link>
      </div>
    </footer>
  );
}
