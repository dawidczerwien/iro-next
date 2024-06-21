import Image from "next/image";

import SectionImg from "../../../public/img/section-img.png";

export default function SectionHead(props) {
  const { title, img, desc } = props;

  return (
    <>
      <div className="section-title">
        <h2>
          {title ? title : "We Are Always Ready to Help You & Your Family"}
        </h2>
        <p>{desc ? desc : ""}</p>
      </div>
    </>
  );
}
