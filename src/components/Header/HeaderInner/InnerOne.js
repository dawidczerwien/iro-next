"use client";

import Link from "next/link";
import useStickyHeader from "./useStickyHeader";

import Logo from "../Logo";
import Navbar from "../Navbar";
import MobileOffcanvas from "@/components/MobileOffcanvas";

export default function HeaderInner() {
  const { isSticky } = useStickyHeader();

  return (
    <>
      <div className={`header-inner ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12 mobile-menu-sticky">
                <Logo />
                <MobileOffcanvas />
              </div>
              <div className="col-lg-7 col-md-9 col-12">
                <Navbar />
              </div>
              <div className="col-lg-2 col-12 p-0">
                <div className="get-quote">
                  
                  <div className="news-single" style={{padding: '7px 0'}}>

                      <ul className="social-share me-3">
                        <li className="facebook">
                          <Link href="https://www.facebook.com/profile.php?id=100083176642932"  target="_blank" className="btn">

                            <i className="fa fa-facebook"></i>
                            <span>Facebook</span>
                          </Link>
                        </li>
                        
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
