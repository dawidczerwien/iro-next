"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Offcanvas } from "react-bootstrap";

import Logo from "../../../public/img/logo.png";

export default function MobileOffcanvas() {
  const pathname = usePathname();

  const [show, setShow] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to toggle the sub-menu
  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  // Function to check if a menu item is active
  const isActive = (path) => pathname === path;

  return (
    <>
      <button
        type="button"
        onClick={handleShow}
        className="mobile-menu-offcanvas-toggler"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* <!-- Mobile Menu Modal --> */}
      <Offcanvas show={show} onHide={handleClose} className="mobile-menu-modal">
        <div className="modal-dialog offcanvas-dialog">
          <div className="modal-content">
            <div className="modal-header offcanvas-header">
              <div className="offcanvas-logo">
                <Link href="/">
                  <h3
                        
                      >
                        <span style={{ color: '#D5091A' }}>I</span>nstytut{' '}
                        <span style={{ color: '#145394' }}>R</span>ozwoju{' '}
                        <span style={{ color: '#14562C' }}>0</span>rawy
                      </h3>
                </Link>
              </div>
              <button type="button" className="btn-close" onClick={handleClose}>
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="mobile-menu-modal-main-body">
              {/* Offcanvas Menu */}
              <nav id="offcanvas-menu" className="navigation offcanvas-menu">
                <ul id="nav" className="list-none offcanvas-men-list">
                  {/* <li>
                    <Link
                      className="menu-arrow"
                      onClick={() => toggleSubMenu(1)}
                      href="#"
                    >
                      Home <i className="icofont-rounded-down"></i>
                    </Link>
                    <ul
                      className={`sub-menu ${openSubMenu === 1 ? "open" : ""}`}
                    >
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/") ? "active" : ""}`}
                          href="/"
                        >
                          Home Page 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/home-2") ? "active" : ""}`}
                          href="/home-2"
                        >
                          Home Page 2
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${isActive("/") ? "active" : ""}`}
                      href="/"
                    >
                      Strona główna
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleClose}
                      className={` ${isActive("/#wydarzenia") ? "active" : ""}`}
                      href="/#wydarzenia"
                    >
                      Wydarzenia
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => toggleSubMenu(1)}
                      className={` ${isActive("/o-nas") ? "active" : ""}`}
                      href="#"
                    >
                      O Nas <i className="icofont-rounded-down"></i>
                    </Link>
                    <ul
                      className={`sub-menu ${openSubMenu === 1 ? "open" : ""}`}
                    >
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/o-nas") ? "active" : ""}`}
                          href="/o-nas"
                        >
                          Więcej o nas
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/zarzad") ? "active" : ""}`}
                          href="/zarzad"
                        >
                          Zarząd
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleClose}
                          className={` ${isActive("/statut") ? "active" : ""}`}
                          href="/statut"
                        >
                          Statut
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Mobile menu modal bottom */}
            <div className="mobile-menu-modal-bottom">
              <Link href="/contact" className="btn" onClick={handleClose}>
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </Offcanvas>
      {/* <!-- End Mobile Menu Modal --> */}
    </>
  );
}
