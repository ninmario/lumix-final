import { useState } from "react"
import { FiMail, FiPhone } from "react-icons/fi"
import { FaMapPin } from "react-icons/fa6";


const Contact = () => {
    const [response, setResponse] = useState({ message: "", error: false })
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [processing, setProcessing] = useState(false)

    const handleSumbmit = async (e: any) => {
        e.preventDefault();
        setProcessing(true)

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: name, email: email, phone: phone, message: message })
            });
            const result = await res.json()
            if (result.err) {
                setResponse({ message: "Da ist etwas schiefgelaufen!", error: true })
            } else {
                setResponse({ message: "Nachricht erfolgreich verschickt!", error: false })
            }
            setProcessing(false);

        } catch (e) {
            setResponse({ message: "Da ist etwas schiefgelaufen!", error: true })
            setProcessing(false);
        }

    }

    return (

        <div className="w-full lg:flex-col items-center justify-between">
           {/*
					 <video autoPlay muted loop id="myVideo2">
          	  <source src="https://v.ftcdn.net/06/07/83/49/700_F_607834919_fuv9bJd3VvakduLG4tWgyxksDwzIe299_ST.mp4" type="video/mp4" />
            </video>
					*/} 
                <h3 className="p-5 py-20 sm:p-10 sm:pt-16 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl text-center leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                    Kontakt
                </h3>
            <div id="contact" className="w-full flex flex-col lg:flex-col space-x-0 space-y-8 lg:space-y-8 items-center justify-evenly p-5  sm:p-5 sm:pt-16 ">

                <div className="flex flex-col items-center space-y-10 sm:space-y-16 max-w-full">
                    <div className="flex flex-col justify-between sm:flex-row space-x-0 space-y-3 sm:space-y-0 w-full">
                        <div className="flex flex-col items-center text-center text-xl lg:w-[180px]">
                            <FiMail className="text-yellow-400 text-6xl mb-8" />
                            <a href="mailto:info@lumix.solar" className="text-gray-300 hover:text-yellow-400 transition duration-200 ease-linear">info@lumix.solar</a>
                        </div>
                        <div className="flex flex-col items-center text-center text-xl lg:w-[180px]">
                            <FiPhone className="text-yellow-400 text-6xl mb-8" />
                            {/* <a href="tel:+491627656187" className="text-gray-600 hover:text-black transition duration-200 ease-linear">+49 162 7656 187</a> */}
                            <a href="tel:+49621150350" className="text-gray-300 hover:text-yellow-400 transition duration-200 ease-linear">+49 621 150 350</a>
                        </div>
												<div className="flex flex-col items-center text-center text-xl lg:w-[180px]">
														<FaMapPin className="text-yellow-400 text-6xl mb-8" />
                            <span className="text-gray-300 hover:text-yellow-400 transition duration-200 ease-linear">Industriestraße 35, 68169 Mannheim</span>
                        </div>
                    </div>

                </div>

                <form onSubmit={handleSumbmit} onInput={() => setResponse({ message: "", error: false })} className="pb-16relative flex flex-col space-y-5 justify-between w-full md:max-w-[50%]">
                    <input required id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className={`w-full p-4 focus:outline-none border border-black border-opacity-30 hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-lg`} />
                    
                    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-5 space-y-5 sm:space-y-0">
                        <input required id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-Mail Adresse" className={`w-full p-4 focus:outline-none border border-black border-opacity-30 hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-lg`} />
                        <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Telefonnummer" className={`w-full p-4 focus:outline-none border border-black border-opacity-30 hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-lg`} />
                    
                    </div>
                    
                    <textarea required id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Nachricht" className={`w-full p-4 h-44 focus:outline-none border border-black border-opacity-30 hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-lg`} />
                    
                    {response.message && <p className={`${response.error ? "text-red-500" : "text-green-500"} pl-1`}>{response.message}</p>}
                    
                    <button type="submit" className=" bg-yellow-400 hover:scale-105 flex space-x-2 items-center justify-around p-3 border border-black/30 group hover:border-black/100 transition ease-in-out duration-300 rounded-lg shadow-dark hover:shadow-button max-w-min">
                        {processing && <svg className={`animate-spin-slow h-6 w-6 min-w-[1.5rem] border-4 border-t-gray-300 border-l-gray-300 border-gray-800 rounded-full`} />}
                        <span className="bg-yellow-400 transition duration-200 ease-linear font-medium ">Absenden</span>
                    </button>
                </form>
            </div>
        </div >

    )
}

export default Contact
