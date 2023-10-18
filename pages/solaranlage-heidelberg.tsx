import type { NextPage } from 'next'

import Process from '../components/section/Process'
import SubpageLandingpages from '../components/section/SubpageLandingpages'
import Advantages from '../components/section/Advantages'

import Contact from '../components/general/Contact'
import Service from '../components/section/Service'
import KonfiguratorAddress from '../components/section/KonfiguratorAddress'
import Link from 'next/link'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import {
  FaSolarPanel,
  FaHandHoldingDollar,
  FaEarthAmericas,
} from 'react-icons/fa6'
import CountUp from 'react-countup'
import Experts from '../components/section/Experts'
import Review from '../components/section/Reviews'

import { HiOutlineArrowSmRight } from 'react-icons/hi'

const SolaranlageHeidelberg: NextPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Solaranlage in Heidelberg │ Lumix Solar GmbH</title>
          <meta
            name="description"
            content="Solaranlagen Heidelberg: moderne Solartechnik 🌞 Regionaler Anbieter ✔️ Individuelle Energielösungen ✔️ Liefergarantie ➡️ Informieren❕"
          />
        </Helmet>
        <div className="flex flex-col items-center max-w-full">
          <div
            style={{
              backgroundImage: `url(/Images/Sections/Solaranlage_Dach_5.jpeg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center"
          >
            <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

            <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">
              <h3
                className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}
              >
                Investieren Sie in eine moderne Solaranlage in Heidelberg{' '}
              </h3>
              <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44  sm:pb-0 pb-20 animate__animated animate__fadeIn animate__delay-3s">
                Nutzen Sie die Vorteile innovativer Solaranlagen von Lumix
                Solar, um in Heidelberg umweltfreundlichen Sonnenstrom auf dem
                Dach oder an der Fassade Ihres Hauses zu produzieren. Damit
                senken Sie die Stromkosten erheblich und tragen signifikant zum
                Klimaschutz bei.
              </p>

              {/* <Link href="#first_section">
                            <a className="rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 border border-gray-300 text-gray-300 text-base sm:text-xl max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                                Mehr Erfahren
                            </a>
                        </Link> */}
            </div>
            <KonfiguratorAddress />
          </div>
          <Process />

          <SubpageLandingpages
            yellowTitle="Solaranlage"
            title=" nahe Heidelberg kaufen – Ihre Vorteile:"
            bullet1="Klimafreundliche Stromerzeugung"
            bullet2="Senkung der Stromrechnung"
            bullet3="Optimaler Schutz vor Blackouts"
            bullet4="Sehr hohe Eigenverbrauchsquote"
            bullet5="Leistungsstarke Stromspeicher"
            bullet6="Individuelle Planung der Anlage"
            bullet7="Zuverlässige Termineinhaltung"
            bullet8="Kompetente persönliche Beratung"
            image="/Images/Sections/Montage2.jpeg"
            link="/konfigurator"
            linkText="Heute noch Termin vereinbaren!"
            icons2
            left
          />

          <div className="items-center w-full justify-center pt-10 p-2 sm:p-5">
            <p className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl pb-8 text-center lg:text-center">
              <span className="text-yellow-400 drop-shadow-none font-bold">
                Ihre Vorteile
              </span>{' '}
              wenn Sie mit uns zusammenarbeiten
            </p>
            <p className="text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
              Dank einer innovativen Solaranlage von Lumix Solar werden Sie
              endlich unabhängig von willkürlichen Erhöhungen des Strompreises
              und schützen sich zudem in Heidelberg vor Stromausfällen aufgrund
              der immer stärkeren Überlastung der öffentlichen Stromnetze.
              Darüber hinaus verringern Sie Ihren ökologischen Fußabdruck
              erheblich, wenn Sie eine Solaranlage kaufen, und tragen damit in
              Heidelberg aktiv zur Bekämpfung des Klimawandels bei. Lumix Solar
              hat sich darauf spezialisiert, für Kunden bedarfsorientiert
              hochwertige Solaranlagen mit Speichern zu planen und in Heidelberg
              zu installieren.
            </p>
            <div className="flex flex-col md:flex-row items-center w-full justify-center py-4">
              <div className="flex sm:p-0 p-7 flex-col items-center w-full justify-center">
                <FaSolarPanel className=" text-yellow-400 text-7xl" />
                <CountUp
                  enableScrollSpy={true}
                  prefix=">"
                  className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center"
                  end={700}
                />
                <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                  Installationen
                </p>
              </div>
              <div className="flex sm:p-0 p-7 flex-col items-center w-full justify-center">
                <FaHandHoldingDollar className="text-yellow-400 text-7xl" />
                <CountUp
                  enableScrollSpy={true}
                  suffix="Mio"
                  prefix=">"
                  decimal="."
                  decimals={1}
                  className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center"
                  end={1.3}
                />
                <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                  Kundenersparnis (€)
                </p>
              </div>
              <div className="flex sm:p-0 p-7 flex-col items-center w-full justify-center">
                <FaEarthAmericas className="text-yellow-400 text-7xl" />
                <CountUp
                  enableScrollSpy={true}
                  separator=""
                  suffix="t"
                  className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center"
                  end={1300}
                />
                <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                  Co2 Einsparungen
                </p>
              </div>
            </div>
            <div className="flex items-center w-full justify-center py-10">
              <Link href={{ pathname: '/konfigurator' }}>
                <a className="self-center flex text-xl items-center space-x-2 md:self-start bg-yellow-400 rounded-full font-medium max-w-max px-4 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                  <span>Hier Angebot anfordern!</span>
                  <HiOutlineArrowSmRight className="text-xl" />
                </a>
              </Link>
            </div>
          </div>

          <SubpageLandingpages
            yellowTitle="Persönliche Energiewende "
            title="jetzt gestalten!"
            text="Gestalten Sie Ihre ganz persönliche Energiewende: Als leistungsstarker Anbieter von Solaranlagen für die Stromerzeugung bieten wir Ihnen einen vorbildlichen Service, der über die Montage hinausgeht und auch die Wartung oder Reparatur umfasst. Nutzen Sie unsere Erfahrung und Expertise: Wir erstellen ein Konzept für Solaranlagen mit Speicher sowohl für Privatkunden als auch für Gewerbebetriebe in Heidelberg."
            image="/Images/Sections/Haus_Solaranlage2.jpeg"
            link="/konfigurator"
            linkText="Mehr erfahren"
          />

          <div className="flex items-center w-full justify-center py-10">
            {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
            <p className="hyphenate text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full">
              <span className="drop-shadow-none">
                Unabhängige, effiziente und nachhaltige{' '}
              </span>
              <span className="text-yellow-400 drop-shadow-none font-bold">
                Stromerzeugung
              </span>
              <span className="drop-shadow-none"> für alle!</span>
            </p>
          </div>

          <SubpageLandingpages
            yellowTitle="Solartechnik"
            title=" in Heidelberg – endlich klimaneutraler Strom"
            text="Die Weiterentwicklung der Solartechnik ermöglicht es Ihnen, den eigenen Strombedarf in Heidelberg weitgehend mit grünem Sonnenstrom zu decken. Lohnt sich PV? Unsere Experten werden Ihnen den Effekt der Solartechnik anhand von Wirtschaftlichkeitsberechnungen verdeutlichen. Durchschnittlich beträgt die Amortisationsdauer einer modernen Solaranlage mit Speicher mittlerweile weniger als zehn Jahre. Danach maximieren Sie die monetären Effekte, denn Sie werden Ihre Stromrechnung dauerhaft drastisch reduzieren."
            image="/Images/Sections/Haus_Solaranlage.jpeg"
            linkText="Hier Angebot anfordern!"
            link="/konfigurator"
            left
          />
          <Advantages />
          <SubpageLandingpages
            yellowTitle="Investition "
            title="mit Weitsicht"
            text='Die Lebensdauer innovativer Solartechnik beträgt mehr als 25 Jahre – somit handelt es sich bei Photovoltaik-Anlagen in jedem Fall um Investitionen, die sich auszahlen. Selbstverständlich gehört es zu unserem Service, Sie über alle Förderoptionen für Solaranlagen zu informieren und Sie in Heidelberg bei der Beantragung von Förderungen zu unterstützen.'
            image="/Images/Sections/Solaranlage.jpeg"
            link="/konfigurator"
            linkText="Jetzt informieren"
          />
          <Experts/>
          <SubpageLandingpages
            yellowTitle="Kompetente Planung "
            title="Ihrer Solaranlage in Heidelberg"
            text="Lumix Solar überzeugt seit Jahren Kunden mit einem exzellenten Service und individuellen Energielösungen. Unser Team übernimmt die bedarfsgerechte Planung der Solaranlage und konfiguriert in Heidelberg Ihre PV-Anlage mit hochwertigen Produkten renommierter Hersteller. Die zuverlässige Planung sorgt dafür, dass die Solaranlage weder überdimensioniert wird noch zu schnell an ihre Kapazitätsgrenzen stößt."
            image="/Images/Sections/Planung.jpeg"
            linkText="Jetzt Solarcheck starten!"
            link="/konfigurator"
            left
          />

          <Service />
          <SubpageLandingpages
            yellowTitle="Solartechnik – "
            title="beste Optionen für die Zukunft"
            text="Wir berücksichtigen sämtliche Zukunftsszenarien wie die geplante Kopplung mit einer Wärmepumpe oder einer Wallbox für Ihr E-Auto. Investieren Sie mit einer Solaranlage in eine zukunftsfähige Technologie – wir stehen Ihnen auch nach dem Kauf in Heidelberg mit einem kundenfreundlichem Service zur Verfügung."
            video="/Images/Sections/Video_Solaranlage2.mp4"
            linkText="Jetzt Solarcheck starten!"
            link="/konfigurator"
          />


            <div className="flex items-center w-full justify-center py-10">
            {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
            <p className="hyphenate text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full">
              <span className="drop-shadow-none">Was unsere </span>
              <span className="text-yellow-400 drop-shadow-none font-bold">
                Kunden{' '}
              </span>
              <span className="drop-shadow-none"> sagen!</span>
            </p>
          </div>
          <Review />
          <SubpageLandingpages
            title="Lumix Solar – wir liefern:"
            bullet1="Solartechnik"
            bullet2="Stromspeicher"
            bullet3="Wechselrichter"
            bullet4="Backup- & Wallboxen"
            image="/Images/gewerbe.webp"
            link="/konfigurator"
            linkText="Noch Fragen? Dann schreiben Sie uns"
            icons
            left
          />

          {/* <FAQ /> */}
          <Contact />
        </div>
      </HelmetProvider>
    </>
  )
}

export default SolaranlageHeidelberg
