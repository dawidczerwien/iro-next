import Link from "next/link";

export default function Newsletter() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-footer">
          <h2>Dołącz do Nas</h2>
          <p>
          Instytut Rozwoju Orawy to przestrzeń, w której każdy może znaleźć swoje miejsce i przyczynić się do pozytywnych zmian w naszym regionie. Zapraszamy do współpracy przedsiębiorców, mieszkańców, którzy chcą wspólnie działać na rzecz lepszej przyszłości Orawy.
          </p>
          <form
            action="mail/mail.php"
            method="get"
            className="newsletter-inner"
          >
            <input
              name="email"
              placeholder="Email"
              className="common-input"
              // onfocus="this.placeholder = ''"
              // onblur="this.placeholder = 'Your email address'"
              required=""
              type="email"
            />
            <Link className="button" href="/contact">
              <i className="icofont icofont-paper-plane m-2 p-1"></i>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
