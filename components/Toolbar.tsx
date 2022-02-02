import { useState } from "react"
import Link from 'next/link'
import { HiMenuAlt4 } from "react-icons/hi"
import { MdClose } from "react-icons/md"


const Toolbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={`text-2xl absolute top-0 left-0 justify-center text-center w-full p-0 lg:p-3 flex z-50  backdrop-blur-md`}>

            <div className="z-20 p-5 pr-5 lg:pr-0 xl:pr-5 w-full flex justify-between items-center font-medium">

                <nav className={`hidden lg:flex flex-row flex-grow justify-center items-stretch`} >

                    <div className="flex flex-grow space-x-8 items-center justify-start">
                        <a href="/" className="hidden lg:block mr-5 transform hover:scale-105 transition-all duration-500 ease-in-out">
                            <img src="/Logos/lumix-logo_gr.svg" className={`w-44`} />
                        </a>
                    </div>

                    <div className="flex flex-grow space-x-10 items-center justify-end mr-5">
                        <Link href={`#service`}>
                            <a className="hover:text-yellow-500 transition duration-300 ease-in-out">Service</a>
                        </Link>
                        {/* <Link href={`#team`}>
                            <a className="hover:text-yellow-500 transition duration-300 ease-in-out">Team</a>
                        </Link>
                        <Link href={`#faq`}>
                            <a className="hover:text-yellow-500 transition duration-300 ease-in-out">FAQ</a>
                        </Link> */}
                        <Link href={`#contact`}>
                            <a className="hover:text-yellow-500 transition duration-300 ease-in-out">Kontakt</a>
                        </Link>
                    </div>
                </nav>


                <a href="/" className="block lg:hidden transform hover:scale-110 transition-all duration-500 ease-in-out">
                    <img src="/Logos/lumix-logo_gr.svg" className={`w-32`} />
                </a>

                <button className={`block float-right lg:hidden transform hover:scale-110 transition duration-300 ease-in-out`} onClick={() => setOpen(!open)}>
                    {open ? <MdClose size={34} /> : <HiMenuAlt4 size={34} />}
                </button>
            </div>

            <nav onClick={() => setOpen(!open)} className={`${open ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutUp hidden"} p-5 top-0 fixed w-full backdrop-filter backdrop-blur-2xl bg-black bg-opacity-10 flex flex-col space-y-5 items-center pt-20`} >
                <Link href={`#service`}>
                    <a className="hover:text-yellow-500 transition duration-300 ease-in-out">Service</a>
                </Link>
                {/* <Link href={`#team`}>
                    <a className="hover:text-yellow-500 transition duration-300 ease-in-out">Team</a>
                </Link>
                <Link href={`#faq`}>
                    <a className="hover:text-yellow-500 transition duration-300 ease-in-out">FAQ</a>
                </Link> */}
                <Link href={`#contact`}>
                    <a className="hover:text-yellow-500 transition duration-300 ease-in-out">Kontakt</a>
                </Link>
            </nav>

        </div>

    )
}

export default Toolbar


