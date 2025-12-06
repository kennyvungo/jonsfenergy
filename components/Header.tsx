"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  const currentPath = usePathname();

  const linkClass = (path: string) =>
    clsx(
      "mx-4 font-[Saira] text-[#545e75] hover:text-[#3E92CC] transition-all",
      currentPath === path &&
        "underline decoration-[#3E92CC] decoration-4 underline-offset-8"
    );

  return (
    <header className="w-full h-[12vh] bg-white border-b border-[#3E92CC] flex items-center justify-between px-4 md:px-12 text-lg text-[#545e75]">
      {/* Logo */}
      <div className="text-[#3E92CC] font-bold font-[Saira] text-3xl sm:text-4xl">
        Jon SF Energy
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6 text-base sm:text-lg">
        <Link href="/services" className={linkClass("/services")}>
          SERVICES
        </Link>
        <Link href="/contact" className={linkClass("/contact")}>
          CONTACT
        </Link>
      </nav>
    </header>
  );
}