
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const path = usePathname();

  const links = [
    { name: "Workouts", href: "/" },
    { name: "My Plan", href: "/my-plan" },
  ];

  return (
    <div className="navbar bg-transparent border-b border-white/10 px-3 md:px-8 lg:px-10">

      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost btn-sm">☰</button>
          <ul tabIndex={0} className="menu dropdown-content bg-base-200 rounded-box z-50 w-40 p-2">
            {links.map(l => (
              <li key={l.href}><Link href={l.href}>{l.name}</Link></li>
            ))}
          </ul>
        </div>

        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FitLog" width={32} height={32} />
          <span className="font-bold text-lg text-white">FITLOG</span>
        </Link>
      </div>

      
       <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal gap-5">
    <li><a className="text-[#C2F800]">Workouts</a></li>
    <li><a className="text-gray-400">My Plan</a></li>
  </ul>
     </div>


      <div className="navbar-end gap-3">
  <span className="bg-[#C2F800] text-black px-4 py-2 rounded-full">
    Plan 0
  </span>
  <span className="border border-white/30 px-4 py-2 rounded-full">
    Saved 0
  </span>
</div>

    </div>
  );
};

export default Navbar;
