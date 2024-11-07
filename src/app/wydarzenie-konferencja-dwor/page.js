import Link from 'next/link';
import Image from 'next/image';

import Breadcrumbs from '@/components/Breadcrumbs';
import BlogSidebar from '@/components/BlogSidebar';

import BlogImg1 from '../../../public/img/konf.jpg';
import BlogImg2 from '../../../public/img/dwor.jpg';
import BlogImg3 from '../../../public/img/dwor2.jpg';
import AuthorImg from '../../../public/img/author1.jpg';
import Header from '@/components/Header/Header';

export default function BlogSingle() {
  return (
    <>
      <Header />

      <Breadcrumbs
        title='wydarzenia'
        menuText='wydarzenia'
        link='/#wydarzenia'
      />

      <section className='news-single section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-12'>
              <div className='row'>
                <div className='col-12'>
                  <div className='single-main'>
                    <div className='news-head'>
                      <Image src={BlogImg1} alt='#' width={557} height={373} />
                    </div>

                    <h1 className='news-title'>
                      KONFERENCJA HISTORYCZNA oraz Dwór Moniaków
                    </h1>

                    <div className='news-text'>
                      <p>
                        1. KONFERENCJA HISTORYCZNA W 350. rocznicę nobilitacji
                        sołtysich rodów Moniaków, Wilczków i Bukowińskich.
                        Wydarzenie współorganizowane z Muzeum - Orawski Park
                        Etnograficzny 18 października 2024 r., od godz. 11.00,
                        Czarna karczma w muzeum. Wydarzenie jest realizowane w
                        ramach projektu &quot;Orawa świętuje! Cykl wydarzeń
                        skupionych wokół ważnych rocznic historycznych
                        miejscowości Zubrzycy Dolnej i Zubrzycy Górnej&quot;.
                        Projekt zrealizowano przy wsparciu finansowym
                        Województwa Małopolskiego. Pełny plan konferencji już
                        wkrótce. 2. Dwór Moniaków. W 420. rocznicę powstania
                        pierwszych zrębów jednej z najstarszych sadyb na
                        Podtatrzu Serdecznie zapraszamy na wystawę czasową
                        związaną z dziejami najstarszego obiektu do Skansenu w
                        Zubrzycy Górnej - otwarcie 18 października 2024 r.
                        (piątek) w plebanii z Podwilka w skansenie. Dzień
                        później - 19 października spotykamy się ponownie w
                        muzeum na Posiadach Orawskich w Czarnej karczmie -
                        kustosz Jadwiga Pilch i prof. Tadeusz Trajdos opowiedzą
                        nie tylko o historii, ale i ludziach związanych z
                        zubrzyckimi włościami - o mieszkańcach, opiekunach, ale
                        i sąsiadach.
                      </p>

                      <div className='image-gallery'>
                        <div className='row' style={{ alignItems: 'center' }}>
                          <div className='col-lg-6 col-md-6 col-12'>
                            <div className='single-image'>
                              <Image
                                src={BlogImg2}
                                alt='#'
                                width={557}
                                height={373}
                              />
                            </div>
                          </div>
                          <div className='col-lg-6 col-md-6 col-12'>
                            <div className='single-image'>
                              <Image
                                src={BlogImg3}
                                alt='#'
                                width={557}
                                height={373}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='blog-bottom'>
                      <ul className='social-share'>
                        <li className='facebook'>
                          <Link
                            href='https://www.facebook.com/profile.php?id=100070017276772'
                            target='_blank'
                          >
                            <i className='fa fa-facebook'></i>
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
              </div>
            </div>
            <div className='col-lg-4 col-12'>{/* <BlogSidebar /> */}</div>
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
