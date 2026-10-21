
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, Suspense } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import logo from "@/assets/logo.png";

const NavLinks = () => {
  const path = usePathname();

  return (
    <ul className="menu menu-horizontal gap-5">
      <li>
        <Link
          href="/"
          className={path === "/" ? "text-[#C2F800]" : "text-gray-400"}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className={path === "/my-plan" ? "text-[#C2F800]" : "text-gray-400"}
        >
          My Plan
        </Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const { todayPlan, savedWorkouts } = useContext(WorkoutContext);

  const links = [
    { name: "Workouts", href: "/" },
    { name: "My Plan", href: "/my-plan" },
  ];

  return (
    <div className="navbar bg-black sticky top-0 z-50 border-b border-white/10 px-3 md:px-8 lg:px-10">

      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost btn-sm">
            ☰
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-200 rounded-box z-50 w-40 p-2"
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FitLog" width={32} height={32} />
          <span className="font-bold text-lg text-white">FITLOG</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <Suspense fallback={null}>
          <NavLinks />
        </Suspense>
      </div>

      <div className="navbar-end gap-3">
        <Link
          href="/my-plan"
          className="text-amber-50 px-4 py-2 rounded-full"
        >
          Plan
          <span className="ml-1 w-6 h-6 bg-[#C2F800] text-black rounded-full inline-flex items-center justify-center text-xs font-bold">
            {todayPlan.length}
          </span>
        </Link>

        <Link
          href="/my-plan?tab=saved"
          className="px-4 py-2 rounded-full"
        >
          Saved
          <span className="ml-1 w-6 h-6 bg-[#C2F800] text-black rounded-full inline-flex items-center justify-center text-xs font-bold">
            {savedWorkouts.length}
          </span>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
