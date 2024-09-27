import Link from "next/link";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <ul className="top-link" style={{display:'none'}}>
                {/* <li>
                  <Link href="/o-nas">O nas</Link>
                </li>
                
                <li>
                  <Link href="/contact">Kontakt</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li> */}
                {/* <Link href='/'>
                <h4>
                  
                      <span style={{color: '#D5091A'}}>I</span>nstytut <span style={{color: '#145394'}}>R</span>ozwoju <span style={{color: '#14562C'}}>0</span>rawy
                </h4>

                      </Link> */}
              </ul>
            </div>
            <div className="col-lg-6 col-md-7 col-12">
              <ul className="top-contact">
                <li>
                  <i className="fa fa-phone"></i>+48 880 639 373
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <Link href="mailto:instytutorawa@gmail.com">
                    instytutorawa@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
