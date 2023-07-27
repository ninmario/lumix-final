import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Process from "../components/section/Process";
import Subpage from "../components/section/Subpage";
import SubpageLandingpages from "../components/section/SubpageLandingpages";
import Contact from '../components/general/Contact';
import Service from '../components/section/Service';
import KonfiguratorAddress from '../components/section/KonfiguratorAddress';
import Link from 'next/link';
import { Helmet, HelmetProvider } from "react-helmet-async";


const PhotovoltaikHeidelberg: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Photovoltaik in Heidelberg │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Photovoltaik Heidelberg: renommierter Anbieter 🌞 Regionaler Partner ✔️ Individuelle Lösungen ✔️ Liefergarantie ➡️ Jetzt informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(/Images/lumix-title.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>Photovoltaik-Anlage in Heidelberg – Lumix Solar</h3>
                        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">Moderne Photovoltaik-Anlagen ermöglichen Privat- und Geschäftskunden in Heidelberg, einen Großteil der Stromkosten zu sparen und endlich unabhängig von gängigen Stromanbietern zu werden. Unser Team hilft Ihnen, den Umstieg auf Photovoltaik in Heidelberg zu bewältigen.</p>

                        {/* <Link href="#first_section">
                            <a className="rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 border border-gray-300 text-gray-300 text-base sm:text-xl max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                                Mehr Erfahren
                            </a>
                        </Link> */}

                    </div>
                    <KonfiguratorAddress />

                </div>
                <Process />

                <SubpageLandingpages title='Solar für Zuhause' 
                    bullet1='Klimaneutrale Erzeugung von Strom' 
                    bullet2='Drastische Reduzierung der Stromkosten' 
                    bullet3='Eigenverbrauchsquote bis zu 80 Prozent'
                    bullet4='Kombination mit Wallbox & Wärmepumpe'
                    bullet5='Individuelle Konfiguration der PV-Anlage'
                    bullet6='Zuverlässiger regionaler Ansprechpartner'
                    bullet7='Kompetente Wirtschaftlichkeitsberechnung'
                    bullet8='Liefergarantie und vorbildlicher Service'
                    image='/Images/privat.webp' 
                    left />

                <div className="flex items-center w-full justify-center py-10">
                    <p className="text-2xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                    Die Photovoltaik-Technologie trägt entscheidend zur Lösung des Energieproblems bei, denn damit wird es Privathaushalten und Gewerbebetrieben in Heidelberg ermöglicht, klimaneutral eigenen Strom zu erzeugen. Wenn Sie sich für die Installation einer Photovoltaik-Anlage entscheiden, machen Sie sich unabhängig von den ständigen Erhöhungen des Strompreises und senken Ihre Stromkosten erheblich. Die Entwicklung neuer Stromspeicher und die günstigere Herstellung dieser Komponenten führen dazu, dass Sie das Potenzial Ihrer Photovoltaik-Anlage in Heidelberg wesentlich besser nutzen können, denn es werden nun Eigenverbrauchsquoten von bis zu 80 Prozent erreicht. Möchten Sie mehr über die Möglichkeiten der Photovoltaik erfahren und sich in Heidelberg individuell beraten lassen oder direkt ein Angebot anfordern?
                    </p>
                </div>

                <Subpage title='PV-Anlage mit Speicher in Heidelberg installieren'
                text='Wenn Sie sich für eine PV-Anlage mit Speicher entscheiden, erstellen wir für Ihr Gebäude in Heidelberg eine maßgeschneiderte Energielösung. Unsere PV-Anlagen werden bedarfsgerecht dimensioniert und aus hochwertigen Produkten namhafter Hersteller konfiguriert. Sowohl die Solarmodule als auch die Stromspeicher überzeugen mit optimaler Energieeffizienz und langer Haltbarkeit.'
                image='/Images/produkte.webp'
                link='/produkte' />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <Subpage title='Ganzheitliche Lösungen – effeketiver Nutzen'
                text='Als erfahrener Anbieter für Photovoltaik-Anlagen bieten wir unseren Kunden aus Heidelberg einen vorbildlichen Service, der die kompetente Beratung, die detaillierte Planung, die fachgerechte Montage ebenso wie die Betreuung nach dem Kauf einschließt. Photovoltaik-Anlagen aus dem Hause Lumix Solar bilden einen effektiven Beitrag zur Energiewende und schützen Sie gleichzeitig vor Stromausfällen aufgrund von Netzüberlastungen. Falls Sie eine PV-Anlage kaufen, verliert der vieldiskutierte Blackout in Heidelberg endlich seinen Schrecken.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />

                <SubpageLandingpages title='PV-Anlage mit Speicher kaufen – unsere Leistungen für Kunden aus Heidelberg:'
                bullet1='Persönliche Beratung'
                bullet2='Individuelle Planung der PV-Anlage'
                bullet3='Berechnung der Wirtschaftlichkeit'
                bullet4='Montage der PV-Anlage'
                bullet5='Prüfung und Inbetriebnahme'
                bullet6='Wartung und Reparatur'
                image='/Images/gewerbe.webp'
                 />

                <Service />
                <Subpage title='Lumix Solar – Photovoltaik-Anbieter nahe Heidelberg'
                text='Sie möchten klimafreundlichen Sonnenstrom selbst produzieren und suchen nach einem kompetenten Photovoltaik-Anbieter, der Ihnen einen überzeugenden Service bietet? Das Team von Lumix Solar kennt sich bestens mit der Konfiguration und Installation von Photovoltaik Anlagen aus und betreut Ihr Projekt in Heidelberg bereits im Planungsstadium. Anhand von realistischen Wirtschaftlichkeitsberechnungen können wir Ihnen sogar die Frage: Lohnt sich PV?, ganz genau beantworten. Darüber hinaus informieren wir über aktuelle Förderprogramme und unterstützen Sie bei der Beantragung der Photovoltaik-Förderung in Heidelberg.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                 />

                {/* <FAQ /> */}
                <Contact />
            </div>
            </HelmetProvider>

        </>
    )
}


export default PhotovoltaikHeidelberg
