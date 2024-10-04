import Breadcrumbs from '@/components/Breadcrumbs';
import Header from '@/components/Header/Header';
import React from 'react';

const Statut = () => {
  return (
    <>
      <Header />
      <Breadcrumbs title='Statut IRO' menuText='Statut' />

      <section className='statut section'>
        <div className='container'>
          <hr />
          <h2 class='statut-title'>STATUT INSTYTUTU ROZWOJU ORAWY</h2>
          <hr />
          <p>
            <b>Status:</b> Akt obowiązujący.{' '}
          </p>
          <p>
            <b>Wersja od:</b> xx lutego 2024r.{' '}
          </p>
          <ul className='mb-5'>
            <li>
              Do pobrania: &nbsp;
              <a href='/documents/Statut.pdf' target='_blank' className='mt-3'>
                <b>Statut Instytutu Rozwoju Orawy</b>
              </a>
            </li>
          </ul>
          <div className='statut-article'>
            <h3 className='statut-title'>Rozdział I</h3>
            <h3 className='statut-title'>POSTANOWIENIA OGÓLNE</h3>

            <h4 className='statut-title p-3'>§ 1</h4>

            <ol>
              <li>
                Stowarzyszenie nosi nazwę „INSTYTUT ROZWOJU ORAWY”, zwane dalej
                w skrócie: „IRO”
              </li>
              <li>
                Stowarzyszenie działa na podstawie Ustawy z dnia 7 kwietnia 1989
                r. – Prawo o stowarzyszeniach.
              </li>
              <li>Stowarzyszenie posiada osobowość prawną.</li>
              <li>Siedzibą stowarzyszenia jest Zubrzyca Dolna.</li>
            </ol>

            <h4 className='statut-title p-3'>§ 2</h4>
            <ol>
              <li>
                Terenem działania stowarzyszenia jest obszar Rzeczypospolitej
                Polskiej ze szczególnym uwzględnieniem regionu Orawy.
              </li>
              <li>
                Dla realizacji celów statutowych stowarzyszenie może prowadzić
                działania poza granicami kraju na terenie innych państw, z
                poszanowaniem tamtejszego prawa.
              </li>
            </ol>

            <h4 className='statut-title p-3'>§ 3</h4>
            <ol>
              <li>
                Stowarzyszenie posługuje się pieczęciami o treści ustalonej
                przez Zarząd Stowarzyszenia.
              </li>
              <li>
                Stowarzyszenie może posiadać własną odznakę, godło, znak
                graficzny, logo oraz może wydawać legitymacje.
              </li>
            </ol>

            <h4 className='statut-title p-3'>§ 4</h4>
            <p>
              Stowarzyszenie może współpracować z krajowymi, zagranicznymi i
              międzynarodowymi organizacjami pozarządowymi i innymi instytucjami
              na zasadach porozumienia. Może pozostawać członkiem tych
              organizacji na zasadach pełnej autonomii.
            </p>

            <h4 className='statut-title p-3'>§ 5</h4>
            <p>
              Stowarzyszenie opiera swoją działalność na pracy społecznej
              członków. Do prowadzenia swoich działań może zatrudniać
              pracowników oraz powoływać biura i zespoły.
            </p>

            <h4 className='statut-title p-3'>§ 6</h4>
            <p>
              Stowarzyszenie może prowadzić działalność gospodarczą. Dochód z
              tej działalności służy realizacji celów statutowych i nie może być
              przeznaczony do podziału między jego członków.
            </p>
          </div>
          <div className='statut-article mt-5'>
            <h3 className='statut-title'>Rozdział II</h3>
            <h3 className='statut-title'>CELE I SPOSOBY ICH REALIZACJI</h3>

            <h4 className='statut-title p-3'>§ 7</h4>

            <ol>
              <li>Celami stowarzyszenia są lub jest:</li>
              <ul>
                <li>1) rozwój i promocja Orawy</li>
                <li>
                  2) wspieranie wszechstronnego i zrównoważonego rozwoju:
                  społecznego, kulturalnego i gospodarczego
                </li>
                <li>
                  3) działania na rzecz integracji i aktywizacji mieszkańców
                  Orawy i turystów odwiedzających region
                </li>
                <li>
                  4) tworzenie warunków do rozwoju wszelkich grup nieformalnych
                  i organizacji, w tym orkiestr dętych grup artystycznych i
                  kapeli regionalnych działających dla rozwoju i promocji Orawy
                </li>
                <li>
                  5) promocja, upowszechnianie i ochrona wartości kultury
                  orawskiej oraz rękodzieła orawskiego
                </li>
                <li>
                  6) poznawanie oraz kultywowanie tradycji i folkloru regionu
                  Orawskiego
                </li>
                <li>
                  7) podejmowania działań na rzecz upowszechniania i rozwoju
                  turystyki, krajoznawstwa, sportu, rekreacji oraz aktywnego
                  wypoczynku mieszkańców, w tym przyjezdnych gości w
                  szczególności dzieci i młodzieży oraz wspieranie tych
                  inicjatyw
                </li>
                <li>
                  8) podejmowania działań w kierunku ochrony zabytków na terenie
                  Orawy
                </li>
                <li>
                  9) podejmowanie działań ekologicznych i ochrony środowiska,
                  zwierząt oraz dziedzictwa przyrodniczego
                </li>
                <li>10) współpraca z Sołectwami</li>
                <li>
                  11) odkrywanie i dokumentowanie historii regionu orawskiego
                </li>
                <li>
                  12) rozwój i poprawa estetyki, wizerunku oraz atrakcyjności
                  turystycznej Orawy
                </li>
                <li>13) wspieranie i upowszechnianie kultury fizycznej</li>
                <li>14) podejmowanie działalności charytatywnej</li>
                <li>
                  15) podtrzymywanie i upowszechnianie tradycji narodowej,
                  pielęgnowania polskości oraz rozwoju świadomości narodowej,
                  obywatelskiej oraz patriotycznej
                </li>
                <li>16) prowadzenie działalności szkoleniowej i wydawniczej</li>
                <li>
                  17) pomoc społeczna, w tym pomoc rodzinom i osobom w trudnej
                  sytuacji życiowej oraz wyrównywanie szans, wspieranie rodziny
                  i systemu pieczy zastępczej oraz tworzenie warunków do
                  zaspokajania potrzeb mieszkaniowych wspólnoty samorządowej
                </li>
                <li>
                  18) udzielanie nieodpłatnej pomocy prawnej oraz zwiększanie
                  świadomości prawnej społeczeństwa
                </li>
                <li>
                  19) działalność na rzecz integracji i reintegracji zawodowej i
                  społecznej osób zagrożonych wykluczeniem społecznym
                </li>
                <li>
                  20) działalność na rzecz mniejszości narodowych i etnicznych
                  oraz języka regionalnego
                </li>
                <li>21) działalność na rzecz integracji cudzoziemców</li>
                <li>
                  22) ochrona i promocja zdrowia, w tym działalność lecznicza w
                  rozumieniu ustawy z dnia 15 kwietnia 2011 r. o działalności
                  leczniczej (Dz. U. z 2022 r. poz. 633, z późn. zm. 2)
                </li>
                <li>23) działalność na rzecz osób niepełnosprawnych</li>
                <li>
                  24) promocja zatrudnienia i aktywizacja zawodowa osób
                  pozostających bez pracy i zagrożonych zwolnieniem z pracy
                </li>
                <li>25) działalność na rzecz równych praw kobiet i mężczyzn</li>
                <li>26) działalność na rzecz osób w wieku emerytalnym</li>
                <li>
                  27) działalność wspomagająca rozwój gospodarczy, w tym rozwój
                  przedsiębiorczości, w tym promocja
                </li>
                <li>
                  28) działalność wspomagająca rozwój techniki, wynalazczości i
                  innowacyjności oraz rozpowszechnianie i wdrażanie nowych
                  rozwiązań technicznych w praktyce gospodarczej
                </li>
                <li>
                  29) działalność wspomagająca rozwój wspólnot i społeczności
                  lokalnych
                </li>
                <li>
                  30) rozwój nauki, szkolnictwa wyższego, edukacji, oświaty i
                  wychowania
                </li>
                <li>31) działalność na rzecz dzieci i młodzieży</li>
                <li>
                  32) ochrona kultury, sztuki, ochrony dóbr kultury i
                  dziedzictwa narodowego oraz orawskiego
                </li>
                <li>
                  33) upowszechnianie i ochrony wolności i praw człowieka oraz
                  swobód obywatelskich, a także działań wspomagających rozwój
                  demokracji
                </li>
                <li>34) udzielania nieodpłatnego poradnictwa obywatelskiego</li>
                <li>35) działalność na rzecz ratownictwa i ochrony ludności</li>
                <li>
                  36) pomoc ofiarom katastrof, klęsk żywiołowych, konfliktów
                  zbrojnych i wojen w kraju i za granicą
                </li>
                <li>37) upowszechnianie i ochrona praw konsumentów</li>
                <li>
                  38) działalność na rzecz integracji europejskiej oraz
                  rozwijania kontaktów i współpracy między społeczeństwami
                </li>
                <li>39) promocja i organizacja wolontariatu</li>
                <li>40) pomoc Polonii i Polakom za granicą</li>
                <li>
                  41) działalność na rzecz kombatantów i osób represjonowanych
                </li>
                <li>
                  42) działalności na rzecz weteranów i weteranów poszkodowanych
                </li>
                <li>43) promocja Rzeczypospolitej Polskiej za granicą</li>
                <li>
                  44) działalność na rzecz rodziny, macierzyństwa,
                  rodzicielstwa, upowszechniania i ochrony praw dziecka
                </li>
                <li>
                  45) przeciwdziałanie uzależnieniom i patologiom społecznym
                </li>
                <li>46) rewitalizacja</li>
                <li>
                  47) działalność na rzecz organizacji pozarządowych oraz innych
                  podmiotów
                </li>
                <li>
                  48) działalność na rzecz podmiotów ekonomii społecznej i
                  przedsiębiorstw społecznych
                </li>
              </ul>
            </ol>

            <h4 className='statut-title p-3'>§ 8</h4>

            <ol>
              <li>Stowarzyszenie realizuje swoje cele poprzez:</li>
              <ul>
                <li>
                  1) współpracę z zarządami stowarzyszeń, Wójtami, Sołtysami i
                  Radami Sołeckimi
                </li>
                <li>
                  2) podejmowanie działań w kierunku rozwoju i promocji Orawy
                </li>
                <li>
                  3) pozyskiwanie funduszy, w tym unijnych oraz dotacji na cele
                  statutowe stowarzyszenia
                </li>
                <li>
                  4) inicjowanie i organizacja wycieczek, wydarzeń, targów,
                  wystaw, imprez kulturalnych, plenerowych, artystycznych,
                  rozrywkowych, sportowych oraz konkursów dla mieszkańców Orawy
                  i gości
                </li>
                <li>
                  5) uczestnictwo w szkoleniach organizowanych przez instytucje
                  zajmujące się obsługą funduszy unijnych na rzecz rozwoju wsi,
                  ekologii i ochrony środowiska oraz innych zgodnych z celami
                  statutowymi stowarzyszenia
                </li>
                <li>
                  6) organizowanie wszelkich szkoleń i warsztatów dla
                  mieszkańców Orawy{' '}
                </li>
                <li>
                  7) popieranie i wspieranie inicjatyw zarówno władz gminnych,
                  sołeckich jak i organizacji pozarządowych
                </li>
                <li>
                  8) inicjowanie i podejmowanie działań dotyczących ochrony
                  środowiska, a także kształtowanie właściwego stosunku do
                  środowiska, szerzenie zrozumienia celów ochrony środowiska
                  oraz propagowanie spraw ochrony środowiska i poczynań
                  zmierzających do zapewnienia tej ochrony
                </li>
                <li>
                  9) współpraca i wymiana doświadczeń z instytucjami,
                  stowarzyszeniami oraz sołectwami
                </li>
                <li>10) wspieranie lokalnych inicjatyw społecznych </li>
                <li>
                  11) występowanie z wnioskami dotyczącymi potrzeb mieszkańców
                  do organów samorządowych jak i administracji rządowej oraz
                  innych organizacji i instytucji{' '}
                </li>
                <li>
                  12) wspieranie i współdziałanie z organizacjami charytatywnymi{' '}
                </li>
                <li>13) prowadzenie działalności charytatywnej </li>
                <li>
                  14) finansowe wspieranie osób prawnych i fizycznych oraz
                  instytucji i organizacji pozarządowych działających na terenie
                  regionu orawskiego
                </li>
                <li>
                  15) inicjowanie projektów wynikających z zadań stowarzyszenia
                  i organizowanie publicznych zebrań i dyskusji nad nimi
                </li>
                <li>16) inicjowanie i wspieranie przedsiębiorczości</li>
                <li>17) organizowanie zbiórek pieniężnych na cele statutowe</li>
                <li>18) organizowanie szkoleń</li>
                <li>
                  19) współpracę i współdziałanie z władzami samorządowymi
                  gminy, powiatu, województwa w zakresie zrównoważonego rozwoju
                  społecznego, kulturalnego i gospodarczego
                </li>
                <li>
                  20) podejmowanie wszelkich innych pożytecznych działań w
                  realizacji i osiąganiu celów statutowych stowarzyszenia
                </li>
              </ul>
            </ol>
          </div>
          <div className='statut-article mt-5'>
            <h3 className='statut-title'>Rozdział III</h3>
            <h3 className='statut-title'>CZŁONKOWIE STOWARZYSZENIA</h3>

            <h4 className='statut-title p-3'>§ 9</h4>

            <ol>
              <li>Członkami Stowarzyszenia mogą być:</li>
              <ul>
                <li>a) obywatele polscy nie pozbawieni praw publicznych</li>
                <li>
                  b) cudzoziemcy nie pozbawieni praw publicznych zainteresowani
                  działalnością stowarzyszenia
                </li>
              </ul>
              <li>
                Osoba prawna może być jedynie członkiem wspierającym
                stowarzyszenia
              </li>
              <li>Członkowie stowarzyszenia dzielą się na:</li>
              <ul>
                <li>a) zwyczajnych,</li>
                <li>b) wspierających,</li>
                <li>c) honorowych.</li>
              </ul>
            </ol>
            <h4 className='statut-title p-3'>§ 10</h4>
            <ol>
              <li>
                Członkiem zwyczajnym Stowarzyszenia może być każda osoba
                fizyczna, posiadająca pełną zdolność do czynności prawnych,
                niepozbawiona praw publicznych.
              </li>
              <li>
                Przyjęcia nowych członków dokonuje Zarząd uchwałą podjętą nie
                później niż w ciągu sześciu miesięcy od daty złożenia
                deklaracji.
              </li>
              <li>
                Od negatywnej decyzji w przedmiocie przyjęcia w poczet członków
                zwyczajnych stowarzyszenia przysługuje zainteresowanemu prawo do
                odwołania się do najbliższego Walnego Zebrania Członków. Uchwała
                Walnego Zebrania jest ostateczna.
              </li>
            </ol>

            <h4 className='statut-title p-3'>§ 11</h4>

            <ol>
              <li>
                Członkiem wspierającym Stowarzyszenie może zostać osoba fizyczna
                i prawna, która deklaruje na piśmie pomoc finansową, rzeczową
                lub merytoryczną w realizacji celów Stowarzyszenia
              </li>
              <li>
                Członkiem wspierającym zostaje się na podstawie uchwały Zarządu
                podjętej nie później niż w ciągu sześciu miesięcy od daty
                złożenia pisemnej deklaracji.
              </li>
              <li>
                Członkiem wspierającym stowarzyszenia może zostać także osoba
                fizyczna lub osoba prawna mająca odpowiednio miejsce
                zamieszkania lub siedzibę poza granicami Rzeczypospolitej
                Polskiej.
              </li>
              <li>
                Od negatywnej decyzji w przedmiocie przyjęcia w poczet członków
                wspierających stowarzyszenia przysługuje zainteresowanemu prawo
                do odwołania się do najbliższego Walnego Zebrania Członków.
                Uchwała Walnego Zebrania jest ostateczna.
              </li>
            </ol>

            <h4 className='statut-title p-3'>§ 12</h4>

            <ol>
              <li>
                Członkiem honorowym Stowarzyszenia może zostać osoba fizyczna,
                niezależnie od narodowości, która wniosła wybitny wkład w
                działalność i rozwój Stowarzyszenia.
              </li>
              <li>
                Członkiem honorowym staje się po przyjęciu uchwały przez Walne
                Zebranie na wniosek Zarządu albo co najmniej 5 członków
                Stowarzyszenia.
              </li>
            </ol>

            <h4 className='statut-title p-3'>§ 13</h4>

            <p>Członkowie zwyczajni mają prawo do:</p>
            <ol type='a'>
              <li>
                biernego i czynnego uczestniczenia w wyborach do władz
                Stowarzyszenia,
              </li>
              <li>
                korzystania z dorobku i wszelkich form działalności
                Stowarzyszenia,
              </li>
              <li>
                udziału w zebraniach, wykładach oraz imprezach organizowanych
                przez Stowarzyszenie,
              </li>
              <li>zgłaszania wniosków co do działalności Stowarzyszenia.</li>
            </ol>

            <h4 className='statut-title p-3'>§ 14</h4>

            <p>Członkowie zwyczajni mają obowiązek:</p>
            <ol type='a'>
              <li>
                brania udziału w działalności Stowarzyszenia i w realizacji jego
                celów,
              </li>
              <li>uczestniczenia w walnych zebraniach członków,</li>
              <li>
                przestrzegania statutu i uchwał władz Stowarzyszenia oraz
                obowiązujących regulaminów,
              </li>
              <li>
                regularnego uiszczania składek członkowskich do końca bieżącego
                roku kalendarzowego.
              </li>
            </ol>

            <h4 className='statut-title p-3'>§ 15</h4>

            <ol>
              <li>
                Członkowie wspierający i honorowi nie posiadają biernego oraz
                czynnego prawa wyborczego, mogą jednak brać udział z głosem
                doradczym w statutowych władzach Stowarzyszenia, poza tym
                posiadają takie prawa jak członkowie zwyczajni.
              </li>
              <li>
                Członek wspierający ma obowiązek wywiązywania się z
                zadeklarowanych świadczeń, przestrzegania statutu oraz uchwał
                władz Stowarzyszenia.
              </li>
              <li>
                Członkowie honorowi są zobowiązani do przestrzegania statutu,
                uchwał oraz regulaminów władz stowarzyszenia.
              </li>
              <li>
                Członkowie wspierający są zwolnieni ze składek członkowskich,
                chyba że kompetentne władze postanowią inaczej.
              </li>
              <li>
                Członkowie honorowi są zwolnieni ze składek członkowskich.
              </li>
            </ol>

            <h4 className='statut-title p-3'>§ 16</h4>

            <ol>
              <li>Członkostwo w Stowarzyszeniu ustaje na skutek:</li>
              <ol type='a'>
                <li>
                  dobrowolnej rezygnacji pisemnej z przynależności do
                  Stowarzyszenia złożonej do Zarządu,
                </li>
                <li>
                  śmierci członka lub utraty osobowości prawnej przez członka
                  wspierającego,
                </li>
                <li>
                  utraty praw publicznych na mocy prawomocnego wyroku sądu,
                </li>
                <li>wykluczenia przez Zarząd:</li>
                <ul>
                  <li>
                    ● z powodu nieusprawiedliwionego zalegania z opłatą składek
                    członkowskich do końca poprzedniego roku kalendarzowego
                  </li>
                  <li>
                    ● z powodu rażącego naruszenia zasad statutowych,
                    nieprzestrzegania postanowień i uchwał władz Stowarzyszenia,
                  </li>
                  <li>
                    ● ze względu na brak przejawów aktywnej działalności na
                    rzecz Stowarzyszenia
                  </li>
                  <li>● działania na niekorzyść stowarzyszenia</li>
                </ul>
              </ol>

              <li>
                Od uchwały Zarządu w sprawie pozbawienia członkostwa w
                Stowarzyszeniu przysługuje odwołanie do Walnego Zebrania
                Członków w terminie 14 dni od daty doręczenia stosownej uchwały.
                Odwołanie jest rozpatrywane na najbliższym Walnym Zebraniu
                Członków. Uchwała Walnego Zebrania Członków jest ostateczna
              </li>
            </ol>
          </div>
          <div className='statut-article mt-5'>
            <h3 className='statut-title'>Rozdział IV</h3>
            <h3 className='statut-title'>WŁADZE STOWARZYSZENIA</h3>

            <h4 className='statut-title p-3'>§ 17</h4>

            <p>Władzami Stowarzyszenia są:</p>
            <ol type='a'>
              <li>Walne Zebranie Członków,</li>
              <li>Zarząd,</li>
              <li>Komisja Rewizyjna,</li>
            </ol>

            <h4 className='statut-title p-3'>§ 18</h4>

            <ol>
              <li>
                Władze Stowarzyszenia wybierane są przez Walne Zebranie Członków
                w głosowaniu jawnym zwykłą większością głosów. Walne Zebranie
                Członków może zdecydować o przeprowadzeniu głosowania tajnego.
              </li>
              <li>
                W razie, gdy skład władz Stowarzyszenia ulegnie zmniejszeniu w
                czasie trwania kadencji, uzupełnienie ich składu może nastąpić w
                drodze kooptacji, której dokonują pozostali członkowie organu,
                który uległ zmniejszeniu. W trybie tym można powołać nie więcej
                niż połowę składu organu w czasie trwania kadencji.
              </li>
            </ol>

            <h4 className='statut-title p-3'>§ 19</h4>

            <p>
              Uchwały wszystkich władz Stowarzyszenia zapadają w głosowaniu
              jawnym lub tajnym zwykłą większością głosów, przy obecności co
              najmniej połowy członków uprawnionych do głosowania w pierwszym
              terminie, w drugim terminie bez względu na liczbę obecnych
              członków, chyba, że dalsze postanowienia statutu stanowią inaczej.
            </p>

            <h4 className='statut-title p-3'>§ 20</h4>

            <p>
              Kadencja wszystkich wybieralnych władz Stowarzyszenia trwa 3 lata.
            </p>

            <h4 className='statut-title mt-5'>Walne Zebranie Członków</h4>
            <h4 className='statut-title p-3'>§ 21</h4>

            <ol>
              <li>
                Najwyższą władzą Stowarzyszenia jest Walne Zebranie Członków.
              </li>
              <li>
                Walne Zebranie Członków może być zwyczajne i nadzwyczajne.
              </li>
              <li>
                Zwyczajne Walne Zebrania Członków zwołuje Zarząd raz w roku jako
                sprawozdawcze, i co trzy lata jako sprawozdawczo-wyborcze,
                zawiadamiając członków stowarzyszenia, w sposób zwyczajowo
                przyjęty o jego terminie, miejscu i proponowanym porządku obrad
                co najmniej na 7 dni przed terminem Walnego Zebrania Członków.
                Jeśli na zebraniu nie ma wymaganego kworum, zebranie odbywa się
                w drugim terminie. Drugi termin wyznacza się w tym samym dniu 30
                minut później.
              </li>
              <li>Nadzwyczajne Walne Zebranie Członków zwołuje Zarząd:</li>
              <ol type='a'>
                <li>z własnej inicjatywy,</li>
                <li>na żądanie członków Komisji Rewizyjnej,</li>
                <li>
                  na pisemny wniosek co najmniej 1/3 ogólnej liczby członków
                  zwyczajnych Stowarzyszenia.
                </li>
              </ol>
              <li>
                Nadzwyczajne Walne Zebranie Członków może też zwołać Komisja
                Rewizyjna w przypadku bezczynności Zarządu.
              </li>
              <li>
                Nadzwyczajne Walne Zebranie Członków powinno zostać zwołane
                przed upływem 21 dni od daty zgłoszenia wniosku lub żądania i
                obradować nad sprawami, dla których zostało zwołane
              </li>
            </ol>

            <h4 className='statut-title p-3'>§ 22</h4>

            <p>Do kompetencji Walnego Zebrania Członków należy:</p>

            <ol type='a'>
              <li>
                określenie głównych kierunków działania i rozwoju
                Stowarzyszenia,{' '}
              </li>
              <li>uchwalanie zmian statutu,</li>
              <li>wybór i odwoływanie wszystkich władz Stowarzyszenia,</li>
              <li>
                udzielanie Zarządowi absolutorium na wniosek Komisji Rewizyjnej,{' '}
              </li>
              <li>
                rozpatrywanie i zatwierdzanie sprawozdania finansowego i
                merytorycznego oraz sprawozdań władz Stowarzyszenia,{' '}
              </li>
              <li>rozpatrywanie odwołań od uchwał Zarządu, </li>
              <li>
                podejmowanie uchwał w sprawie nadania członkostwa honorowego,
              </li>
              <li>
                podejmowanie uchwał o przyznaniu i wysokości diet za pracę
                członkom Zarządu
              </li>
              <li>
                podejmowanie uchwały o rozwiązaniu Stowarzyszenia i
                przeznaczeniu jego majątku,{' '}
              </li>
            </ol>

            <h4 className='statut-title mt-5'>Zarząd</h4>

            <h4 className='statut-title p-3'>§ 23</h4>

            <ol>
              <li>
                Zarząd jest powołany do kierowania działalnością Stowarzyszenia
                zgodnie z uchwałami Walnego Zebrania Członków, a także
                reprezentuje Stowarzyszenie na zewnątrz.{' '}
              </li>
              <li>
                Zarząd składa się z co najmniej 3 osób w skład którego wchodzą
                Prezes, Wiceprezes oraz Skarbnik wybierani z pośród siebie.
                Zarząd spośród pozostałego swojego grona może jeszcze wybrać
                sekretarza, gospodarza, kronikarza, kierowników oraz dyrektorów
                lub inne funkcje stosownie do charakteru pełnienia powierzanych
                zadań.
              </li>
              <li>
                Członkami Zarządu nie mogą być osoby skazane prawomocnym
                wyrokiem za przestępstwo umyślne ścigane z oskarżenia
                publicznego lub przestępstwo skarbowe.
              </li>
              <li>
                Członkowie Zarządu mogą otrzymywać wynagrodzenie za pełnione
                funkcje oraz zwrot udokumentowanych kosztów poniesionych w
                związku z działalnością statutową, jeżeli pozwala na to stan
                posiadanych funduszy stowarzyszenia. Łączna suma kosztów
                działalności Zarządu nie może wynosić więcej niż 100% ogólnych
                funduszy stowarzyszenia w danym roku kalendarzowym.
              </li>
              <li>
                Posiedzenia Zarządu odbywają się w miarę potrzeb, nie rzadziej
                jednak niż raz na pół roku.
              </li>
              <li>Posiedzenia Zarządu zwołuje Prezes lub Wiceprezes.</li>
              <li>
                W Posiedzeniach Zarządu mogą uczestniczyć z głosem doradczym:
              </li>
              <ol type='a'>
                <li>członkowie Komisji Rewizyjnej</li>
                <li>zaproszeni eksperci</li>
                <li>inne zaproszone osoby</li>
              </ol>
            </ol>

            <h4 className='statut-title p-3'>§ 24</h4>

            <p>Do kompetencji Zarządu należy:</p>
            <ol type='a'>
              <li>kierowanie bieżącą pracą Stowarzyszenia,</li>
              <li>opracowywanie regulaminów</li>
              <li>realizowanie uchwał Walnego Zebrania Członków,</li>
              <li>
                współpraca z organizacjami samorządowymi, rządowymi i
                pozarządowymi w realizacji zadań statutowych,
              </li>
              <li>zarządzanie majątkiem Stowarzyszenia,</li>
              <li>planowanie i prowadzenie gospodarki finansowej,</li>
              <li>
                reprezentowanie Stowarzyszenia na zewnątrz i działanie w jego
                imieniu,
              </li>
              <li>przyjmowanie i wykluczanie członków Stowarzyszenia,</li>
              <li>zwoływanie Walnego Zebrania Członków,</li>
              <li>ustalanie wysokości składek członkowskich</li>
              <li>podejmowanie uchwał</li>
              <li>
                tworzenie grup artystycznych i zespołów do określonych zadań w
                drodze uchwał
              </li>
              <li>powoływanie i odwoływanie ambasadorów</li>
            </ol>

            <h4 className='statut-title mt-5'>Komisja Rewizyjna</h4>

            <h4 className='statut-title p-3'>§ 25</h4>

            <ol>
              <li>
                Komisja Rewizyjna powoływana jest do sprawowania kontroli nad
                działalnością Stowarzyszenia zgodnie z uchwałami Walnego
                Zebrania Członków.
              </li>
              <li>
                Komisja Rewizyjna składa się od 2 do 5 osób, w tym
                Przewodniczącego, Wiceprzewodniczącego i Sekretarza wybieranego
                na pierwszym Posiedzeniu Komisji oraz członków Komisji
                Rewizyjnej.
              </li>
              <li>
                Członkowie Komisji Rewizyjnej nie mogą być Członkami Zarządu.
              </li>
              <li>
                Posiedzenia Komisji Rewizyjnej odbywają się w miarę potrzeb, nie
                rzadziej jednak niż raz w roku. Posiedzenia Komisji zwołuje
                Przewodniczący.
              </li>
              <li>
                Członkowie Komisji Rewizyjnej mają prawo do pełnej kontroli
                dokumentów i działalności stowarzyszenia.
              </li>
            </ol>

            <h4 className='statut-title p-3'>§ 26</h4>

            <p>Do kompetencji Komisji Rewizyjnej należy:</p>
            <ol type='a'>
              <li>kontrola całokształtu działalności Stowarzyszenia,</li>
              <li>
                ocena pracy Zarządu, w tym corocznych sprawozdań i bilansu,
              </li>
              <li>
                składanie sprawozdań na Walnym Zebraniu Członków wraz z oceną
                działalności Stowarzyszenia i Zarządu Stowarzyszenia,
              </li>
              <li>
                wnioskowanie do Walnego Zebrania Członków o udzielanie
                absolutorium Zarządowi,{' '}
              </li>
              <li>
                wnioskowanie o odwołanie całego Zarządu w razie jego
                bezczynności lub bezczynnego członka Zarządu,
              </li>
              <li>
                wnioskowanie o zwołanie Nadzwyczajnego Walnego Zebrania
                Członków.
              </li>
              <li>
                zwoływanie Walnego Zebrania Członków w razie nie zwołania
                Walnego Zebrania Członków przez zarząd w określonym terminie
              </li>
            </ol>
          </div>
          <div className='statut-article mt-5'>
            <h3 className='statut-title'>Rozdział V</h3>
            <h3 className='statut-title'>ORGAN WSPOMAGAJĄCY ZARZĄD</h3>

            <h4 className='statut-title p-3'>§ 27</h4>

            <ol>
              <li>Organami wspomagającym działalność stowarzyszenia jest:</li>
              <ol type='a'>
                <li>Ambasador</li>
                <li>Rada Ambasadorów</li>
              </ol>
            </ol>

            <h4 className='statut-title mt-3'>Ambasador</h4>

            <h4 className='statut-title p-3'>§ 28</h4>

            <ol>
              <li>
                Ambasadorem może zostać osoba zamieszkująca daną miejscowość, do
                której jest powoływana na ambasadora.
              </li>
              <li>
                Dla danej miejscowości orawskiej ilość ambasadorów ustala
                Zarząd.
              </li>
              <li>
                Ambasadora powołuje zarząd w drodze uchwały. Powołany ambasador
                podpisuje deklarację członkowską w terminie 3 miesięcy od dnia
                powołania stając się członkiem zwyczajnym stowarzyszenia.
              </li>
              <li>
                Sposób, formę i teren działania dla poszczególnych ambasadorów
                określa zarząd w drodze regulaminu.
              </li>
              <li>Ambasadorem nie może być:</li>
            </ol>

            <h4 className='statut-title p-3'>§ 29</h4>

            <p>
              Do kompetencji ambasadora należy w porozumieniu z zarządem i w
              granicach swojego terenu działania:
            </p>

            <ul>
              <li>&nbsp;a) wspomaganie działań zarządu</li>
              <li>b) realizowanie uchwał zarządu</li>
              <li>
                c) współpraca z grupami nieformalnymi i organizacjami
                pozarządowymi, w tym z Sołtysami i Radami Sołeckimi oraz radnymi
                różnych szczebli samorządowych
              </li>
              <li>d) reprezentowanie stowarzyszenia</li>
              <li>
                e) tworzenie grup artystycznych i zespołów do określonych zadań
              </li>
              <li>f) realizowanie celów statutowych stowarzyszenia</li>
              <li>
                g) doradzanie i opiniowanie działań zarządu stowarzyszenia
              </li>
              <li>
                h) pozyskiwanie ważnych informacji dla zarządu, mających
                znaczenie dla rozwoju Orawy i realizacji celów statutowych
                stowarzyszenia
              </li>
              <li>
                i) podejmowanie i inicjowanie działań statutowych stowarzyszenia
              </li>
              <li>
                j) prowadzenie kampanii informacyjnej działań stowarzyszenia
              </li>
              <li>
                k) pozyskiwanie wyróżniających się mieszkańców na nowych
                członków stowarzyszenia
              </li>
            </ul>

            <h4 className='statut-title mt-5'>Rada Ambasadorów</h4>

            <h4 className='statut-title p-3'>§ 30</h4>

            <ol>
              <li>
                Rada ambasadorów jest organem doradczo-opiniującym działania
                zarządu.
              </li>
              <li>
                W skład Rady Ambasadorów wchodzi każdy ambasador powołany przez
                zarząd.
              </li>
              <li>
                Rada ambasadorów działa w ścisłym porozumieniu z zarządem.
              </li>
            </ol>

            <h4 className='statut-title p-3'>§ 31</h4>

            <p>Do kompetencji Rady Ambasadorów należy:</p>

            <ol type='a'>
              <li>
                opiniowanie działań Zarządu przy realizacji działań statutowych
              </li>
              <li>
                wspomaganie działań Zarządu przy realizacji działań statutowych
              </li>
              <li>
                występowanie do zarządu z wnioskami o pomoc przy realizacji
                działań statutowych
              </li>
            </ol>
          </div>
          <div className='statut-article mt-5'>
            <h3 className='statut-title'>Rozdział VI</h3>
            <h3 className='statut-title'>MAJĄTEK I GOSPODARKA FINANSOWA</h3>

            <h4 className='statut-title p-3'>§ 32</h4>

            <ol>
              <li>Źródłami majątku Stowarzyszenia są:</li>
              <ul>
                <li>a) składki członkowskie,</li>
                <li>b) darowizny, zapisy i spadki</li>
                <li>c) środki pochodzące z ofiarności publicznej,</li>
                <li>d) dotacje, subwencje, udziały, lokaty,</li>
                <li>e) dochody z majątku stowarzyszenia,</li>
                <li>f) dochody z własnej działalności</li>
              </ul>
              <li>
                Stowarzyszenie prowadzi gospodarkę finansową zgodnie z
                obowiązującymi przepisami.
              </li>
              <li>
                Decyzje w sprawie nabywania, zbywania i obciążania majątku
                Stowarzyszenia podejmuje Zarząd.
              </li>
            </ol>

            <h4 className='statut-title p-3'>§ 33</h4>

            <ol>
              <li>
                Do składania oświadczeń woli w imieniu Stowarzyszenia, w tym w
                sprawach majątkowych, uprawniony jest każdy pełnoletni członek
                zarządu stowarzyszenia.
              </li>
              <li>
                W sprawach majątkowych powyżej kwoty 1.000,00 zł wymagane są
                podpisy dwóch pełnoletnich członków zarządu działających
                łącznie.
              </li>
            </ol>
          </div>
          <div className='statut-article mt-5'>
            <h3 className='statut-title'>Rozdział VII</h3>
            <h3 className='statut-title'>POSTANOWIENIA KOŃCOWE</h3>

            <h4 className='statut-title p-3'>§ 34</h4>

            <p>
              Uchwałę w sprawie zmiany statutu Stowarzyszenia podejmuje Walne
              Zebranie Członków zwykłą większością głosów, przy obecności
              przynajmniej połowy członków uprawnionych do głosowania.
            </p>

            <h4 className='statut-title p-3'>§ 35</h4>
            <ol>
              <li>
                Uchwałę o rozwiązaniu Stowarzyszenia podejmuje Walne Zebranie
                Członków 2/3 głosów przy obecności co najmniej połowy członków
                uprawnionych do głosowania.
              </li>
              <li>
                Podejmując uchwałę o rozwiązaniu Stowarzyszenia, Walne Zebranie
                Członków wyznacza likwidatora, który przeznacza częściowo
                majątek stowarzyszenia na pokrycie kosztów likwidacyjnych, a
                pozostały majątek rozdziela między sobą.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statut;
