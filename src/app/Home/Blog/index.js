import SectionHead from "@/components/SectionHead";
import BlogCard from "@/components/BlogCard";

import BlogImg1 from "../../../../public/img/HDK.jpeg";
import BlogImg2 from "../../../../public/img/wielkiesprzatanie.jpg";
import BlogImg3 from "../../../../public/img/skontzesty.jpg";

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
                date="09 MARCA, 2024"
                title="IV Wielkie Sprzątanie Zubrzycy Dolnej."
                desc="Już 4 rok z rzędu organizujemy Wielkie sprzątanie Zubrzycy Dolnej 💪🏻 Z roku na rok jest nas coraz więcej, co ogromnie cieszy!"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <BlogCard
                image={BlogImg3}
                date="05 Jan, 2020"
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
