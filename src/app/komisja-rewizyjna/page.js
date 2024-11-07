import Breadcrumbs from '@/components/Breadcrumbs';
import Header from '@/components/Header/Header';
import TeamCard from '@/components/TeamCard';
import TeamImg1 from '../../../public/img/team1.png';

const KomisjaRewizyjna = () => {
  return (
    <>
      <Header />

      <Breadcrumbs title='Komisja rewizyjna' menuText='Komisja rewizyjna' />

      <section id='team' className='team section single-page'>
        <div className='container'>
          <div className='row'>

          <div className='col-lg-4 col-md-6 col-12'>
            <TeamCard
              tilt='tilt-disable'
              image={TeamImg1}
              name='Damian Kostyra'
              desgination='Przewodniczący Komisji Rewizyjnej'
            />
          </div>
          <div className='col-lg-4 col-md-6 col-12'>
            <TeamCard
              tilt='tilt-disable'
              image={TeamImg1}
              name='Ewelina Knapczyk'
              desgination='Wiceprzewodnicząca Komisji Rewizyjnej'
            />
          </div>
          <div className='col-lg-4 col-md-6 col-12'>
            <TeamCard
              tilt='tilt-disable'
              image={TeamImg1}
              name='Ewelina Torba'
              desgination='Sekretarz Komisji Rewizyjnej'
            />
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KomisjaRewizyjna;
