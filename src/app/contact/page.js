import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header/Header";

export default function Contact() {

  return (
    <>
      <Header />

      <Breadcrumbs title="Kontakt" menuText="kontakt" />

      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-us-left">
                  <div id="myMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1902.1784454555855!2d19.664633939684897!3d49.53242511316451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715dbaaeb07736d%3A0x98a0b31db7a43c7c!2sZubrzyca%20Dolna%2077%2C%2034-484%20Zubrzyca%20Dolna!5e0!3m2!1spl!2spl!4v1718695328050!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Skontaktuj się z nami</h2>
                  <p>
                  Jeśli masz jakiekolwiek pytania, skontaktuj się z nami.
                  </p>

                  <form className="form">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Imię"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Numer Telefonu"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Temat"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Twoja wiadomość"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button className="btn" type="submit">
                            Wyślij
                          </button>
                        </div>
                        {/* <div className="checkbox">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                              
                            >
                              Do you want to subscribe our Newsletter ?
                            </label>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="row">
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont icofont-ui-call"></i>
                  <div className="content">
                    <h3>+(48) 880 639 373</h3>
                    <p>instytutorawa@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Zubrzyca Dolna 77</h3>
                    <p>34-484 Zubrzyca Dolna</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont icofont-wall-clock"></i>
                  <div className="content">
                    <h3>Pon - Pt: 8:00 - 16:00</h3>
                    <p>Jesteśmy dostępni</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
