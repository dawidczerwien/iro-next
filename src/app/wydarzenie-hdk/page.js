import Link from "next/link";
import Image from "next/image";

import Breadcrumbs from "@/components/Breadcrumbs";
import Comments from "./Comments";
import Form from "./Form";
import BlogSidebar from "@/components/BlogSidebar";

import BlogImg1 from "../../../public/img/HDK.jpeg";
import BlogImg2 from "../../../public/img/hdk1.jpg";
import BlogImg3 from "../../../public/img/hdk2.png";
import AuthorImg from "../../../public/img/author1.jpg";
import Header from "@/components/Header/Header";

export default function BlogSingle() {
  return (
    <>
      <Header />

      <Breadcrumbs title="wydarzenia" menuText="wydarzenia" link="/#wydarzenia"/>

      <section className="news-single section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="single-main">
                    <div className="news-head">
                      <Image src={BlogImg1} alt="#" width={557} height={373} />
                    </div>

                    <h1 className="news-title">
                      Orawski Klub HDK. Spotkanie założycielskie
                    </h1>

                    {/* <div className="meta">
                      <div className="meta-left">
                        <span className="author">
                          <Link href="#">
                            <Image
                              src={AuthorImg}
                              alt="#"
                              width={455}
                              height={455}
                            />
                            Naimur Rahman
                          </Link>
                        </span>
                        <span className="date">
                          <i className="fa fa-clock-o"></i>03 Feb 2019
                        </span>
                      </div>
                      <div className="meta-right">
                        <span className="comments">
                          <Link href="#">
                            <i className="fa fa-comments"></i>05 Comments
                          </Link>
                        </span>
                        <span className="views">
                          <i className="fa fa-eye"></i>33K Views
                        </span>
                      </div>
                    </div> */}

                    <div className="news-text">
                      <p>
                      Z przyjemnością informujemy, że dzisiaj odbyło się spotkanie założycielskie Orawskiego Klubu HDK 🩸, który będzie działał przy Instytucie Rozwoju Orawy. Naszą misją będzie promowanie i pomoc w działalności krwiodawstwa oraz DKMS. Zapraszamy do dołączenia krwiodawców z całej Orawy 😊 (w naszym gronie jest krwiodawca, który oddał już prawie 70 litrów krwi 👏 )
                      </p>
                      
                      <div className="image-gallery">
                        <div className="row" style={{alignItems: 'center'}}>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="single-image">
                              <Image
                                src={BlogImg2}
                                alt="#"
                                width={557}
                                height={373}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="single-image">
                              <Image
                                src={BlogImg3}
                                alt="#"
                                width={557}
                                height={373}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div className="blog-bottom">
                      <ul className="social-share">
                        <li className="facebook">
                          <Link href="https://www.facebook.com/profile.php?id=100070017276772"  target="_blank">

                            <i className="fa fa-facebook"></i>
                            <span>Facebook</span>
                          </Link>
                        </li>
                        
                      </ul>

                      {/* <ul className="prev-next">
                        <li className="prev">
                          <Link href="#">
                            <i className="fa fa-angle-double-left"></i>
                          </Link>
                        </li>
                        <li className="next">
                          <Link href="#">
                            <i className="fa fa-angle-double-right"></i>
                          </Link>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
                {/* <div className="col-12">
                  <Comments />
                </div>
                <div className="col-12">
                  <Form />
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-12">
              {/* <BlogSidebar /> */}
            </div>
            <div className='mt-3'>
              <iframe
                src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100083176642932&tabs=timeline&width=500&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId'
                width='500'
                height='700'
                styles={{ border: 'none', overflow: 'hidden' }}
                scrolling='no'
                frameborder='0'
                allowfullscreen='true'
                allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
