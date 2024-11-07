import SectionHead from "@/components/SectionHead";
import BlogCard from "@/components/BlogCard";

import BlogImg1 from "../../../../public/img/HDK.jpeg";
import BlogImg2 from "../../../../public/img/wielkiesprzatanie.jpg";
import BlogImg3 from "../../../../public/img/skontzesty.jpg";
import BlogImg4 from "../../../../public/img/dwor2.jpg";

export default function Blog() {
  return (
    <>
      <section className="blog section" id="wydarzenia">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Ważne wydarzenia w naszej społeczności."
                desc="Instytut rozwoju Orawy wspiera lokane wydarzenia"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <BlogCard
                image={BlogImg4}
                date="18 października, 2024"
                title="KONFERENCJA HISTORYCZNA oraz Dwór Moniaków."
                desc='1. Wydarzenie jest realizowane w ramach projektu "Orawa świętuje! Cykl wydarzeń skupionych wokół ważnych rocznic historycznych miejscowości Zubrzycy Dolnej i Zubrzycy Górnej”. 2. Dwór Moniaków.
W 420. rocznicę powstania pierwszych zrębów jednej z najstarszych sadyb na Podtatrzu'
                link='/wydarzenie-konferencja-dwor'
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <BlogCard
                image={BlogImg1}
                date="14 CZERWCA, 2024"
                title="Orawski Klub HDK."
                desc="Zapraszamy krwiodawców ❤️ z całej Orawy na spotkanie założycielskie: Orawski Klub Honorowych Dawców Krwi."
                link='/wydarzenie-hdk'
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <BlogCard
                image={BlogImg2}
                date="9 MARCA, 2024"
                title="IV Wielkie Sprzątanie Zubrzycy Dolnej."
                desc="Już 4 rok z rzędu organizujemy Wielkie sprzątanie Zubrzycy Dolnej 💪🏻 Z roku na rok jest nas coraz więcej, co ogromnie cieszy!"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <BlogCard
                image={BlogImg3}
                date="16 Grudnia, 2023"
                title={`Uroczysta promocja i publikacja książki "Skondeś ty, cyj ześ ty?"`}
                desc={`ZAPROSZENIE 📜
16 grudnia o godz. 16:00 w remizie OSP Zubrzyca Dolna, odbędzie się publikacja książki pt. "Skondeś ty, cyj ześ ty? Dziedzictwo Zubrzycy Dolnej zawarte na starych fotografiach". 📚🎉
`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
