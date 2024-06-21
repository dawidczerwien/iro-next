import Link from "next/link";

export default function Breadcrumbs(props) {
  const { title, menuText, link } = props;

  return (
    <>
      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2>{title ? title : "Meet Our Qualified Doctors"}</h2>
                <ul className="bread-list">
                  <li>
                    <Link href={link ? link : "/"}>Strona główna</Link>
                  </li>
                  <li>
                    <i className="icofont-simple-right"></i>
                  </li>
                  <li className="active">{menuText ? menuText : "Doctors"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
