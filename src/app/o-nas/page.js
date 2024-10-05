import Breadcrumbs from "@/components/Breadcrumbs";
import AboutSection from "./AboutSection";
import Vission from "./Vission";
import Mission from "./Mission";
import Header from "@/components/Header/Header";
import AboutLogo from "./AboutLogo";

export default function About() {
  return (
    <>
      <Header />
      <Breadcrumbs title="O nas" menuText="O nas" />
      <AboutSection />
      <AboutLogo />
      <Vission />
      <Mission />
    </>
  );
}
