import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="single-footer">
          <h2>Krótko o nas</h2>
          <p>
          z pasją i zaangażowaniem działa na rzecz wszechstronnego rozwoju naszego malowniczego regionu. Naszym celem jest tworzenie i wspieranie inicjatyw, które przyczyniają się do poprawy jakości życia mieszkańców oraz promowania Orawy.
          </p>

          <ul className="social">
            <li>
              <Link href="https://www.facebook.com/profile.php?id=100083176642932" target="_blank">

                <i className="icofont-facebook"></i>
              </Link>
            </li>
            {/* <li>
              <Link href="#">
                <i className="icofont-google-plus"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-vimeo"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-pinterest"></i>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
