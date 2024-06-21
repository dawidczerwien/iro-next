"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/img/IRO_Logo.png"

export default function Preloader() {
  let pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`preloader ${isLoading ? "visible" : "preloader-deactivate"}`}
    >
      <div className="loader">
        <div className="loader-outter">

        </div>
        <div className="loader-inner"></div>
        <div className="indicator">
        <Image alt="logo" width={1000} height={800} src={Logo} style={{borderRadius: '50%'}}/>

          {/* <svg style={{ width: "16px", height: "12px" }}>
            <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
            <polyline
              id="front"
              points="1 6 4 6 6 11 10 1 12 6 15 6"
            ></polyline>
          </svg> */}
        </div>
      </div>
    </div>
  );
}
