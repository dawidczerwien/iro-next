"use client";

import { useState } from "react";

export default function Vission() {
  const [vissionData, setvissionData] = useState([
    {
      id: "item1",
      icon: "icofont-tick-mark",
      title: "Orawa – Twój Kolejny Kierunek Podróży",
      desc: "Nie czekaj dłużej i odkryj piękno Orawy! To miejsce, gdzie każdy dzień przynosi nowe przygody, a naturalne piękno i autentyczna kultura pozostają w sercu na zawsze. Spakuj plecak i wyrusz w podróż, która dostarczy Ci niezapomnianych wspomnień i pozwoli na chwilę oderwać się od codzienności. Orawa czeka na Ciebie!",
    },
    {
      id: "item2",
      icon: "icofont-tick-mark",
      title: "Gościnność i Komfort",
      desc: "Orawa to region, który dba o swoich gości. Znajdziesz tu szeroki wybór miejsc noclegowych – od przytulnych pensjonatów, przez komfortowe hotele, po urokliwe agroturystyki. Lokalne ośrodki turystyczne oferują również różnorodne atrakcje i usługi, które sprawią, że Twój pobyt będzie niezapomniany.",
    },
    {
      id: "item3",
      icon: "icofont-tick-mark",
      title: "Niezapomniane Widoki i Aktywności na Świeżym Powietrzu",
      desc: "Orawa słynie z przepięknych górskich krajobrazów, które zachęcają do pieszych wędrówek, wspinaczki oraz jazdy na rowerze. Podczas spacerów po malowniczych szlakach można podziwiać dziką przyrodę, czyste jeziora oraz majestatyczne szczyty Tatr. Zimą region zamienia się w raj dla narciarzy i snowboardzistów, oferując doskonałe warunki do uprawiania sportów zimowych.",
    },
  ]);

  return (
    <>
      <section className="our-vision-area ptb-100 pt-0">
        <div className="container">
          <div className="row">
            {vissionData.map((items) => (
              <div className="col-lg-4 col-md-6 col-12" key={items.id}>
                <div className="single-vision-box">
                  <div className="icon">
                    <i className={items.icon}></i>
                  </div>
                  <h3>{items.title}</h3>
                  <p>{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
