import FunfactCard from "@/components/FunfactCard";

export default function Funfact() {
  return (
    <>
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-home"
                number="10"
                desc="lat od założenia"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-user-alt-3"
                number="941"
                desc="Liczba obsewujących"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <FunfactCard
                icon="icofont-people"
                number="3456"
                desc="Odwiedzin strony"
              />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
