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


const SolaranlageWorms: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Solaranlage in Worms │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Solaranlagen in Worms kaufen: zukunftsweisende Solartechnik 🌞 Maßgeschneiderte Konzepte ✔️ Liefergarantie ➡️ Jetzt informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(/Images/lumix-title.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                        Solaranlage für klimaneutralen Strom in Worms
                        </h3>
                        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">
                        Wenn Sie eine Solaranlage von Lumix Solar installieren lassen, produzieren Sie in Worms Ihren eigenen Strom – klimaneutral aus sauberer Sonnenenergie. Gleichzeitig machen Sie sich unabhängig von Stromkonzernen, Stromausfällen und ständig steigenden Stromrechnungen.
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

                <SubpageLandingpages title='Solaranlage in Worms – jetzt persönliche Energiewende starten:'
                    bullet1='Klimaneutral produzierter Sonnenstrom'
                    bullet2='Reduzierung der Stromrechnung'
                    bullet3='Kein Risiko mehr durch Blackouts'
                    bullet4='Optimale Eigenverbrauchsquote'
                    bullet5='Leistungsstarke Stromspeicher'
                    bullet6='Individuell konfigurierte PV-Anlagen'
                    bullet7='Verlässliche Liefergarantie'
                    bullet8='Vorbildlicher Rundum-Service'
                    image='/Images/privat.webp' 
                    left />

                <div className="flex items-center w-full justify-center py-10">
                    <p className="text-2xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                    Sie möchten unabhängig von den großen Stromkonzernen werden, die Ihre Strompreise teilweise willkürlich erhöhen? Sie fürchten Blackouts aufgrund wachsender Überlastung der öffentlichen Stromnetze? Sie wollen aktiv zum Klimaschutz beitragen, anstatt zu warten, dass endlich politische Entscheidungen getroffen werden? Das sind gute Gründe, um eine Solaranlage in Worms installieren zu lassen und künftig den Strombedarf mit klimaneutralem Sonnenstrom zu decken. Wenn Sie erwägen, eine PV-Anlage zu kaufen, sind Sie bei Lumix Solar genau richtig, denn wir bieten unseren Kunden einen ausgezeichneten ganzheitlichen Service.
                    </p>
                </div>

                <Subpage title='Komplett-Service beim Kauf einer Solaranlage'
                text='Wenn Sie eine Solaranlage kaufen möchten, bieten wir Ihnen einen vorbildlichen Service, der von der Beratung über die detaillierte Planung und fachgerechte Montage bis weit über den Kauf hinausgeht. Unser Team sorgt für eine perfekte Wartung und ist auch zur Stelle, wenn die Solaranlage in Wiesbaden repariert werden muss. Gerne informieren wir Sie über vielen Möglichkeiten, die Ihnen eine Solaranlage mit Speicher bietet. Fordern Sie außerdem Ihr unverbindliches Angebot an – wir sind erfahrene Experten für die Konfiguration und die Montage von Solaranlagen mit Speicher für Privathaushalte, aber auch für Gewerbebetriebe in Wiesbaden.'
                image='/Images/produkte.webp'
                link='/produkte' />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <Subpage title='Ganzheitliche Bratung zu Ihrer Solaranlage '
                text='Unser Team plant und montiert Solaranlagen sowohl für Privatkunden als auch für Unternehmen und überzeugt mit Liefertreue und optimaler Servicequalität. Eine Solaranlage mit Speicher eröffnet Ihnen faszinierende Möglichkeiten, denn Sie können damit in Worms den günstigen Sonnenstrom sogar dann nutzen, wenn die Sonne gar nicht scheint. Möchten Sie mehr über die Vorteile unserer Anlagen erfahren, bevor Sie eine Entscheidung treffen? Nutzen Sie unsere herstellerunabhängige Photovoltaik-Anlagen-Beratung oder fordern Sie direkt ein Angebot an.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />

                <Subpage title='Solaranlage bedarfsorientiert planen in Worms'
                text='Wenden Sie sich an die Experten von Lumix Solar, die Ihre Solaranlage individuell planen und maßgeschneidert für Sie konfigurieren. Wir berücksichtigen bei der Planung der Solaranlage sowohl Ihren aktuellen als auch Ihren zukünftigen Strombedarf sowie die örtlichen Gegebenheiten in Worms. Wenn wir die Solaranlage planen und dimensionieren beziehen wir beispielsweise die Dachneigung und die Ausrichtung des Daches, einen eventuellen Sanierungsbedarf sowie alternative Montageoptionen in die Planung ein. Darüber hinaus führen wir bei der Planung der Solaranlage in Worms Wirtschaftlichkeitsberechnungen durch, um Ihnen die Frage: Lohnt sich PV?, exakt zu beantworten und Sie transparent darüber zu informieren, wann sich die PV-Anlage amortisiert.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                />

                
                <Subpage title='Solartechnik in Worms bei Lumix Solar kaufen'
                text='Lumix Solar ist Ihr kompetenter regionaler Anbieter für modernste Solartechnik und konfiguriert für Kunden aus Worms maßgeschneiderte Lösungen. Unsere Solaranlagen werden mit hochwertigen Produkten renommierter Hersteller konstruiert, denn die Qualität von Solarmodulen und Stromspeichern ist entscheidend für eine lange Lebensdauer und die Energieeffizienz der Photovoltaik-Anlage. Profitieren Sie von umfassender Beratung, professioneller Planung, fachgerechter Montage und einem exzellenten Service im Bereich Wartung und Reparatur. Mit innovativer Solartechnik senken Sie dauerhaft Ihre Stromkosten und leisten in Worms einen wichtigen Beitrag zum Klima- und Umweltschutz. Unsere Solarexperten beraten Sie zudem hinsichtlich aktueller Förderprogramme für Ihre Solaranlage und unterstützen Sie bei der Beantragung der Fördermittel. Wagen Sie jetzt den Schritt in Ihre individuelle Energiewende – mit Lumix Solar.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />


                <SubpageLandingpages title='Lumix Solar – Ihr kompetenter Ansprechpartner in der Region für:'
                bullet1='Solartechnik'
                bullet2='Stromspeicher'
                bullet3='Wechselrichter'
                bullet4='Backup- & Wallboxen'
                image='/Images/gewerbe.webp'
                />

                <Service />
                

                {/* <FAQ /> */}
                <Contact />
            </div>
            </HelmetProvider>

        </>
    )
}


export default SolaranlageWorms
