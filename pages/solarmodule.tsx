
import type { NextPage } from 'next'

import Process from "../components/section/Process";
import SubpageLandingpages from "../components/section/SubpageLandingpages";
import KonfiguratorAddress from '../components/section/KonfiguratorAddress';
import Link from 'next/link';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaSolarPanel, FaHandHoldingDollar, FaEarthAmericas } from "react-icons/fa6";
import CountUp from "react-countup";
import { HiOutlineArrowSmRight } from "react-icons/hi"



const Solarmodule: NextPage = () => {

    return (
        <>
        <HelmetProvider>
          <Helmet>
          <title>Solarmodule in Mannheim │ Lumix Solar GmbH</title>
          <meta
          name="description"
          content="Solarmodule Mannheim: modernste Solartechnik 🌞 Regionaler Anbieter ✔️ Persönliche Beratung ✔️ Liefergarantie ➡️ Jetzt informieren❕"/>
          </Helmet>
            <div className="flex flex-col items-center max-w-full">
								<div style={{ backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/05/29/27/59/1000_F_529275953_MnISE2r90Y2WNNhyWH249QqIxPfFkAnb.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">
                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                        Solarmodule in höchster Qualität aus Mannheim
                        </h3>
                        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">
                        Die Qualität der Solarmodule bestimmt die Effizienz Ihrer Photovoltaik-Anlage – entscheiden Sie sich deshalb für Module von Lumix Solar aus Mannheim. Wir verwenden ausschließlich Module renommierter Hersteller, die sowohl mit Energieeffizienz als auch mit langer Haltbarkeit überzeugen.
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
                    yellowTitle ='Solarmodule  '
                    title='von Lumix Solar in Mannheim – profitieren Sie von:'
                    bullet1='Hoher Energieeffizienz'
                    bullet2='Langer Haltbarkeit'
                    bullet3='Geringem Wartungsbedarf'
                    bullet4='Exzellenter Qualität'
                    bullet5='Mono- & polykristallinen Modulen'
                    bullet6='Fachgerechter Montage'
                    image='https://as2.ftcdn.net/v2/jpg/06/06/35/13/1000_F_606351333_2E2KZd5gZDejot9kVR11E4ntFpYOpR5q.jpg'
                    link='/konfigurator'
                    linkText='Heute noch Termin vereinbaren!' 
                    left />

<div className="items-center w-full justify-center pt-10">   
                  <p className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl pb-8 text-center lg:text-center">
                    <span className="text-yellow-400 drop-shadow-none font-bold">Ihre Vorteile</span> wenn Sie mit uns zusammenarbeiten
                  </p>                 
                    <p className="text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                    Die Solarmodule bilden das Herzstück Ihrer PV-Anlage. Deshalb verwenden wir ausschließlich Module namhafter Hersteller, deren Qualität bereits in zahlreichen Photovoltaik-Anlagen unter Beweis gestellt wurde. 
                    In den Modulen wird das Sonnenlicht in elektrische Energie umgewandelt. Jedes Solarmodul besteht wiederum aus Solarzellen und die Module werden zu Strings (Gruppen) verschaltet und bilden als Gesamtheit den Solargenerator der PV-Anlage. Gerne konfigurieren wir in Mannheim eine individuell auf Ihre Bedürfnisse und die örtlichen Gegebenheiten abgestimmte Photovoltaik-Anlage. Unser erfahrenes Team installiert PV-Anlagen unter Verwendung hochwertiger Produkte, sowohl für Privatkunden als auch für Gewerbebetriebe, und bietet Ihnen einen vorbildlichen und umfangreichen Service. 
										</p>
                    <div className="flex flex-col md:flex-row items-center w-full justify-center py-4">
                            <div className="flex flex-col items-center w-full justify-center">
                            <FaSolarPanel className=" text-yellow-400 text-7xl" />
                            <CountUp enableScrollSpy={true} prefix='>' className='font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center' end={700} />
                            <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                            Installationen
                            </p>
                        </div>
                        <div className="flex flex-col  items-center w-full justify-center">
                            <FaHandHoldingDollar className="text-yellow-400 text-7xl" />
                            <CountUp enableScrollSpy={true} suffix='Mio' prefix='>' decimal='.' decimals={1} className='font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center' end={1.3} />
                            <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                            Kundenersparnis (€)
                            </p>
                        </div>
                        <div className="flex flex-col  items-center w-full justify-center">
                            <FaEarthAmericas className="text-yellow-400 text-7xl" />
                            <CountUp enableScrollSpy={true} separator='' suffix='t' className='font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center' end={1300} />
                            <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                            Co2 Einsparungen
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center w-full justify-center py-10">   
                        <Link href={{ pathname: '/konfigurator' }}>
                            <a className="self-center flex text-xl items-center space-x-2 md:self-start bg-yellow-400 rounded-full font-medium max-w-max px-4 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                                <span>Hier Angebot anfordern!</span>
                                <HiOutlineArrowSmRight className="text-xl"/>
                            </a>
                        </Link>
                    </div>
                </div>
								<SubpageLandingpages
				yellowTitle='Solarmodule kaufen – '
                title='Lumix Solar in Mannheim'
                text='Es lohnt sich, Solarmodule (Solarpanels) vom Qualitätsanbieter Lumix Solar zu kaufen, denn wir sorgen in Mannheim mit optimalem Service dafür, dass Sie mit Ihrer PV-Anlage den maximalen Ertrag erzielen. Aus diesem Grund verwenden wir Solarmodule von renommierten Herstellern und unterstützen Sie versiert bei der Auswahl der Module. Dank unserer langjährigen Erfahrung mit der Konfiguration und Montage von Photovoltaik-Anlagen wissen wir genau, welche Solarmodule sich am besten für die Installation auf Ihrem Dach eignen. Wenden Sie sich deshalb an die Experten von Lumix Solar, um Solarpanels zu kaufen, die in Mannheim perfekt Ihre Anforderungen erfüllen und einen maximalen Ertrag erzielen.'
                image='https://as2.ftcdn.net/v2/jpg/05/52/32/61/1000_F_552326147_QaFOH5cBtUxdtmLdDyhzAPjP3nfhYaAg.jpg'
                link='/konfigurator' 
				        linkText='Jetzt Solarcheck starten!'/>
                
                <SubpageLandingpages
				yellowTitle ='Solarmodule '
                title='namhafter Hersteller in Mannheim!'
                text='Als Anbieter moderner PV-Anlagen verwenden wir ausschließlich Solarmodule namhafter Hersteller, sodass Sie in Mannheim von einer hervorragenden Qualität profitieren. Sie können zwischen mono- und polykristallinen Solarmodulen verschiedener Hersteller wählen und die PV-Anlage auch optisch an Ihr Haus anpassen. Mittlerweile stehen sogar Solarmodule zur Verfügung, die von der Denkmalschutzbehörde genehmigt werden. Alle in unseren Photovoltaik-Anlagen verbauten Module garantieren Ihnen in Mannheim eine sehr lange Haltbarkeit sowie einen optimalen Ertrag und benötigen zudem nur wenig Wartung. Lohnt sich PV? Diese Frage können wir Ihnen anhand einer Wirtschaftlichkeitsberechnung ganz genau beantworten. Die meisten PV-Anlagen amortisieren sich heutzutage in weniger als zehn Jahren und der Effekt der Reduzierung Ihrer Stromkosten wirkt lange darüber hinaus. Profitieren Sie von unserem exzellenten Service, der neben der Beratung auch die Planung der PV-Anlage sowie des Stromspeichers und die Montage der Solarmodule in Mannheim umfasst.'
                image='https://as1.ftcdn.net/v2/jpg/05/54/39/78/1000_F_554397802_q8tSzs5NpQULONQpLxNy5aOMrtxut0Y8.jpg'
				linkText='Hier Angebot anfordern!'
                link='/konfigurator'
                left />


<SubpageLandingpages
								yellowTitle='Lumix Solar – '
                title='Ihr Anbieter für:'
                bullet1='Solarmodule'
                bullet2='Stromspeicher'
                bullet3='Wechselrichter'
                bullet4='Backup- & Wallboxen'
                video='https://v.ftcdn.net/06/07/83/49/700_F_607834919_fuv9bJd3VvakduLG4tWgyxksDwzIe299_ST.mp4'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                link='/konfigurator'
                />

                

            </div>
            </HelmetProvider>

        </>
    )
}


export default Solarmodule

