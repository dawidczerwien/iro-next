import Breadcrumbs from '@/components/Breadcrumbs';
import TeamCard from '@/components/TeamCard';

import TeamImg1 from '../../../public/img/team1.png';
import Img1 from '../../../public/img/profile_mateusz.jpg';

import Header from '@/components/Header/Header';

export default function Zarzad() {
  return (
    <>
      <Header />

      <Breadcrumbs title='Zarząd IRO' menuText='Zarząd' />

      <section id='team' className='team section single-page'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-12'>
              <TeamCard
                tilt='tilt-disable'
                image={Img1}
                name='Prezes Mateusz Horniak'
                desgination='Prezes'
              />
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              <TeamCard
                tilt='tilt-disable'
                image={TeamImg1}
                name='Dariusz Owsiak'
                desgination='Wiceprezes'
              />
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              <TeamCard
                tilt='tilt-disable'
                image={TeamImg1}
                name='Mateusz Bosak'
                desgination='Skarbnik'
              />
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              <TeamCard
                tilt='tilt-disable'
                image={TeamImg1}
                name='Sylwia Chlebek'
                desgination='Sekretarz'
              />
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              <TeamCard
                tilt='tilt-disable'
                image={TeamImg1}
                name='Edyta Lis'
                desgination='Dyrektor Biura Zarządu'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
