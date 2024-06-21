'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import HeroBg1 from '../../../../public/img/slider2.jpg';
import HeroBg2 from '../../../../public/img/kraj1171.jpg';
import HeroBg3 from '../../../../public/img/slider3.jpg';

export default function Sliders(props) {
  const { sectionName } = props;

  const [heroSliders, setheroSliders] = useState([
    // {
    //   id: "slider1",
    //   bgImg: HeroBg1,
    //   title:
    //     "We Provide <span>Medical</span> Services <br/> That You Can <span>Trust!</span>",
    //   subTitle:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque,<br/>faucibus libero eu, gravida quam. ",
    //   button: {
    //     text: "Get Appointment",
    //     link: "/appoinment",
    //   },
    //   button2: {
    //     text: "Learn More",
    //     link: "/about",
    //   },
    // },
    {
      id: 'slider2',
      bgImg: HeroBg2,
      title: '',
      subTitle:
        'Instytut Rozwoju Orawy to organizacja, która z pasją i zaangażowaniem działa na rzecz wszechstronnego rozwoju naszego malowniczego regionu. Naszym celem jest tworzenie i wspieranie inicjatyw, które przyczyniają się do poprawy jakości życia mieszkańców oraz promowania Orawy jako miejsca o wyjątkowym potencjale turystycznym, kulturowym i gospodarczym.',
      button: {
        text: 'Wspólnie dla Orawy!',
        link: '/o-nas',
      },
      // button2: {
      //   text: "O nas",
      //   link: "/o-nas",
      // },
    },
    // {
    //   id: "slider3",
    //   bgImg: HeroBg3,
    //   title:
    //     "We Provide <span>Medical</span> Services <br/> That You Can <span>Trust!</span>",
    //   subTitle:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque,<br/>faucibus libero eu, gravida quam. ",
    //   button: {
    //     text: "Get Appointment",
    //     link: "/appoinment",
    //   },
    //   button2: {
    //     text: "Conatct Now",
    //     link: "/contact",
    //   },
    // },
  ]);

  return (
    <>
      {/* <!-- Slider Area --> */}
      <section className={sectionName ? sectionName : 'slider'}>
        <Swiper
          autoplay={{ delay: 4000 }}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className='hero-slider'
        >
          {heroSliders.map((singleSlider) => (
            <SwiperSlide
              className='single-slider'
              style={{
                backgroundImage: `url(${singleSlider.bgImg.src})`,
              }}
              key={singleSlider.id}
            >
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-7 col-12'>
                    <div className='text'>
                      <h1
                        style={{
                          color: 'black',
                          backgroundColor: 'white',
                          width: 'fit-content',
                          padding: '10px',
                        }}
                      >
                        <span style={{ color: '#D5091A' }}>I</span>nstytut{' '}
                        <span style={{ color: '#145394' }}>R</span>ozwoju{' '}
                        <span style={{ color: '#14562C' }}>0</span>rawy
                      </h1>
                      <h1
                        dangerouslySetInnerHTML={{
                          __html: singleSlider.title,
                        }}
                      ></h1>

                      <p
                        style={{ color: 'white' }}
                        dangerouslySetInnerHTML={{
                          __html: singleSlider.subTitle,
                        }}
                      ></p>

                      {/* <!-- Slider Button --> */}
                      <div className='button'>
                        <a href={singleSlider?.button.link} className='btn'>
                          {singleSlider?.button.text}
                        </a>
                        {singleSlider?.button2 && (
                          <a
                            href={singleSlider?.button2.link}
                            className='btn primary'
                          >
                            {singleSlider?.button2.text}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='swiper-button-next'></div>
        <div className='swiper-button-prev'></div>
      </section>
    </>
  );
}
