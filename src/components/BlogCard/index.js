import Image from "next/image";
import Link from "next/link";

import BlogImg1 from "../../../public/img/blog1.jpg";

export default function BlogCard(props) {
  const { image, date, title, desc, link } = props;

  return (
    <>
      <div className="single-news">
        <div className="news-head" style={{maxHeight: '300px'}}>
          <Image
            src={image ? image : BlogImg1}
            alt="#"
            width={557}
            height={373}
          />
        </div>
        <div className="news-body">
          <div className="news-content">
            <div className="date">{date ? date : "22 Aug, 2020"}</div>
            <h2>
              {link ? <Link href={link}>
                {title ? title : "We have annnocuced our new product."}
              </Link> : <>
              {title ? title : "We have annnocuced our new product."}
              </>}
            </h2>
            <p className="text">
              {desc
                ? desc
                : "Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
