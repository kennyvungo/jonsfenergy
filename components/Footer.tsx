"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3E92CC] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Left Section */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-semi-bold font-[Saira]">Jon SF Energy</h2>
          <div>236 West Portal Ave #559</div>
          <div>San Francisco, CA 94127</div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-3 text-lg underline">
          <Link href="/services" className="hover:text-gray-200">
            SERVICES
          </Link>
          <Link href="/contact" className="hover:text-gray-200">
            CONTACT
          </Link>
        </div>
      </div>
    </footer>
  );
}