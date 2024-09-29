import Breadcrumbs from "@/components/Breadcrumbs"
import Header from "@/components/Header/Header"
import Documents from "./Documents"

const Dokumenty = () => {
  return (
    <>
        <Header />
        <Breadcrumbs menuText="Dokumenty"/>
        <Documents />
    </>
  )
}

export default Dokumenty