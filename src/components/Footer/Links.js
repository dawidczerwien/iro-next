import Link from "next/link";

export default function Links() {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="single-footer f-link">
          <h2>Przydatne Linki</h2>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <ul>
                <li>
                  <Link href="/">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>Strona główna
                  </Link>
                </li>
                <li>
                  <Link href="/o-nas">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    O nas
                  </Link>
                </li>
                
                
                
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul>
                
                {/* <li>
                  <Link href="/faq">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>FAQ
                  </Link>
                </li> */}
                <li>
                  <Link href="/contact">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Kontakt
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
