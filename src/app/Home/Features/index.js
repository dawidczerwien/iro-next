import FeatureCard from "@/components/FeatureCard";
import SectionHead from "@/components/SectionHead";

export default function Features(props) {
  const { sectionName } = props;

  return (
    <>
      <section className={sectionName ? sectionName : "Feautes section"}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Jesteśmy zawsze gotowi pomóc naszej społeczności"
                desc="Organizacja pozarządowa · Organizacja non profit · Centrum badań edukacyjnych"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features"
                icon="icofont icofont-hill"
                title="Rozwój i promocja orawy"
                desc="Działania na rzecz integracji i aktywizacji mieszkańców orawy."
              />
            </div>
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features"
                icon="icofont icofont-travelling"
                title="Upowszechnianie turystyki"
                desc="Podejmowania działań na rzecz upowszechniania i rozwoju turystyki, krajoznawstwa, sportu, rekreacji oraz aktywnego wypoczynku mieszkańców, w tym przyjezdnych gości w szczególności dzieci i młodzieży."
              />
            </div>
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features last"
                icon="icofont icofont-chart-growth"
                title="Zrównoważony rozwój"
                desc="wspieranie wszechstronnego i zrównoważonego rozwoju: społecznego, kulturalnego i gospodarczego."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
