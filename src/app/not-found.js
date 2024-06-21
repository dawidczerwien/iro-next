import Header from "@/components/Header/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
    <Header />
      <section className="error-page section" style={{minHeight: '50vh'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-12">
              <div className="error-inner">
                <h1>
                  404<span>Przepraszamy, ale nie możemy znaleźć tej strony</span>
                </h1>
                <p>
                  <Link href={"/"}>
                  Wróć na stronę główną

                  </Link>
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
