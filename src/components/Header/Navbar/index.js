"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="main-menu">
        <nav className="navigation">
          <ul className="nav menu">
            <li>
              
              <Link
                className={` ${pathname === "/" ? "active" : ""}`}
                href="/"
              >
                Strona główna
              </Link>
              
              
            </li>
            {/* <li>
              <Link
                className={` ${pathname === "/aktualnosci" ? "active" : ""}`}
                href="/aktualnosci"
              >
                Aktualności
              </Link>
            </li> */}
            
            <li>
              <Link
                className={` ${pathname === "/#wydarzenia" ? "active" : ""}`}
                href="/#wydarzenia"
              >
                Wydarzenia
              </Link>
            </li>
            <li>
              <Link
                className={` ${pathname === "/o-nas" ? "active" : ""}`}
                href="/o-nas"
              >
                O nas <i className="icofont-rounded-down"></i>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link
                    className={` ${pathname === "/zarzad" ? "active" : ""}`}
                    href="/zarzad"
                  >
                    Zarząd
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/komisja-rewizyjna" ? "active" : ""}`}
                    href="/komisja-rewizyjna"
                  >
                    Komisja rewizyjna
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      pathname === "/statut" ? "active" : ""
                    }`}
                    href="/statut"
                  >
                    Statut
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className={` ${
                      pathname === "/dokumenty" ? "active" : ""
                    }`}
                    href="/dokumenty"
                  >
                    Dokumenty
                  </Link>
                </li> */}
              </ul>
            </li>
            <li>
              <Link
                className={` ${pathname === "/contact" ? "active" : ""}`}
                href="/contact"
              >
                Kontakt
              </Link>
            </li>
            {/* <li>
              <Link href="#">
                Doctors <i className="icofont-rounded-down"></i>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link
                    className={` ${pathname === "/doctors" ? "active" : ""}`}
                    href="/doctors"
                  >
                    Doctor
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      pathname === "/doctor-details" ? "active" : ""
                    }`}
                    href="/doctor-details"
                  >
                    Doctor Details
                  </Link>
                </li>
              </ul>
            </li> */}
            {false && (<>
            <li>
              <Link href="#">
                Services <i className="icofont-rounded-down"></i>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link
                    className={` ${pathname === "/service" ? "active" : ""}`}
                    href="/service"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      pathname === "/service-details" ? "active" : ""
                    }`}
                    href="/service-details"
                  >
                    Service Details
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#">
                Pages <i className="icofont-rounded-down"></i>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link
                    className={` ${pathname === "/about" ? "active" : ""}`}
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      pathname === "/appointment" ? "active" : ""
                    }`}
                    href="/appointment"
                  >
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/time-table" ? "active" : ""}`}
                    href="/time-table"
                  >
                    Time Table
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      pathname === "/testimonials" ? "active" : ""
                    }`}
                    href="/testimonials"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/pricing" ? "active" : ""}`}
                    href="/pricing"
                  >
                    Our Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/register" ? "active" : ""}`}
                    href="/register"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/login" ? "active" : ""}`}
                    href="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/faq" ? "active" : ""}`}
                    href="/faq"
                  >
                    Faq
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      pathname === "/mail-success" ? "active" : ""
                    }`}
                    href="/mail-success"
                  >
                    Mail Success
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/404" ? "active" : ""}`}
                    href="/404"
                  >
                    404 Error
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#">
                Blogs <i className="icofont-rounded-down"></i>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link
                    className={` ${pathname === "/blog-grid" ? "active" : ""}`}
                    href="/blog-grid"
                  >
                    Blog Grid
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      pathname === "/blog-single" ? "active" : ""
                    }`}
                    href="/blog-single"
                  >
                    Blog Details
                  </Link>
                </li>
              </ul>
            </li></>)}
            
          </ul>
        </nav>
      </div>
    </>
  );
}
