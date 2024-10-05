'use client';

import { useState } from 'react';

export default function AboutLogo() {
  const [missionData, setmissionData] = useState([
    {
      id: 'item1',
      icon: '&',
      title: 'Czarny',
      desc: 'to barwa solidności i mocy, wyrażająca trwałość idei oraz fundamenty, na których budowany jest rozwój Instytutu.',
      color: 'black',
    },
    {
      id: 'item2',
      icon: 'I',
      title: 'Czerwony',
      desc: 'symbolizuje energię, zapał i odwagę – odzwierciedla pasję lokalnych inicjatyw, dynamikę zmian oraz odwagę w stawianiu czoła wyzwaniom.',
      color: 'red',
    },
    {
      id: 'item3',
      icon: 'R',
      title: 'Niebieski',
      desc: 'to kolor nieba i wód Orawy, emanujący spokojem i harmonią, podkreślając zrównoważony rozwój oparty na współpracy i naturalnym pięknie regionu.',
      color: '#145394',
    },
    {
      id: 'item4',
      icon: 'O',
      title: 'Zielony',
      desc: 'reprezentuje przyrodę, odnowę i nadzieję – to odniesienie do ochrony środowiska i ekologicznych działań, które mają na celu budowanie zrównoważonej przyszłości.',
      color: 'green',
    },
  ]);

  return (
    <>
      <section className='our-mission-area ptb-100 pt-0'>
        <div className='container-fluid p-0'>
          <div className='row m-0'>
            <div className='col-lg-6 col-md-12 p-0'>
              <div className='our-mission-content'>
                <span className='sub-title'>Logo</span>
                <h2>O Naszym Logo</h2>
                <p>
                  Logo Instytutu Rozwoju Orawy, zaprojektowane przez{' '}
                  <strong>Katarzynę Miąskowską-Paniak</strong>, działaczkę
                  społeczną z Zubrzycy Dolnej, która tragicznie zginęła w 2023
                  roku, zawiera trzy główne elementy symbolizujące region
                  orawski.
                </p>
                <p>
                  To wizualne odzwierciedlenie tradycji, kultury i tożsamości,
                  które z dumą reprezentujemy. Czwartym elementem jest skrót i
                  nazwa naszego instytutu. Składa się z trzech kluczowych
                  elementów, które harmonijnie oddają ducha Orawy:
                </p>
                <p>
                  <b>● Babia Góra</b>, majestatyczna góra będąca nieodłącznym
                  symbolem Orawy, dominująca w krajobrazie i pamięci
                  mieszkańców.
                </p>
                <p>
                  <b>● Orawska półparzenica</b>, inspirowana lokalnym haftem i sztuką ludową, subtelnie nawiązuje do bogatego dziedzictwa kulturowego regionu, przypominając o tradycjach przekazywanych z pokolenia na pokolenie.
                </p>
                <p>
                  <b>● Koło regionalne</b>, symbol wieczności, ruchu i wspólnoty, odwołuje się do współpracy mieszkańców, w której kształtowanie przyszłości opiera się na sile jedności.
                </p>
                <p>
                  Logo jest w czterech kolorach, z których każdy niesie za sobą
                  głęboką symbolikę:
                </p>
                <br></br>
                <ul>
                  {missionData.map((items) => (
                    <li key={items.id}>
                      <div
                        className='icon'
                        style={{
                          color: `${items.color}`,
                          fontSize: '40px',
                          fontWeight: 'bold',
                        }}
                      >
                        {items.icon}
                      </div>
                      <span>{items.title}</span>
                      {items.desc}
                    </li>
                  ))}
                </ul>
                <p className='mt-5'>
                  Całość herbu łączy tradycję z nowoczesnością, oddając hołd
                  dziedzictwu Orawy oraz wizji przyszłości, jaką niesie nasz
                  Instytut działając na rzecz zrównoważonego rozwoju.
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 p-0'>
              <div className='about-image' style={{maxHeight: '700px'}}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
