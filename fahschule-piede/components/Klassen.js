import { Dialog, Transition, Disclosure } from '@headlessui/react'
import { Fragment, useState } from 'react'
import PKWDialog from "./PKW"
import ZweiradDialog from "./Zweirad"
import AnhaengerDialog from './Anhaenger'
import LKWDialog from "./LKW"
import TraktorDialog from "./Traktor"
import Image from "next/image"
import Link from 'next/link'

function Klassen() {
    let [isOpen, setIsOpen] = useState(false)
    let [PKW, setPKW] = useState(false)
    let [Zweirad, setZweirad] = useState(false)
    let [LKW, setLKW] = useState(false)
    let [Anhaenger, setAnhaenger] = useState(false)
    let [Traktor, setTraktor] = useState(false)

    function closeModal() {
        setIsOpen(false)
        
        setPKW(false)
        setZweirad(false)
        setLKW(false)
        setAnhaenger(false)
        setTraktor(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div id="Klassenauswahl" className="w-full h-auto py-8 gap-12 flex flex-col md:flex-row items-center justify-evenly bg-back-blue">
                <div className="svgfilter flex flex-col justify-center" onClick={() => {
                    openModal()
                    setPKW(true)
                    }}>
                    <Image src="/assets/PKW.svg" width="48px" height="30px" className="cursor-pointer" />
                    <h2 className="text-gray-300 text-lg font-bold text-center mt-2 cursor-pointer">PKW {"→"}</h2>
                </div>

                <div className="svgfilter flex flex-col justify-center" onClick={() => {
                    openModal()
                    setZweirad(true)
                    }}>
                    <Image src="/assets/Motorrad.svg" width="48px" height="30px" className="cursor-pointer" />
                    <h2 className="text-gray-300 text-lg font-bold text-center mt-2 cursor-pointer">Zweirad {"→"}</h2>
                </div>

                <div className="svgfilter flex flex-col justify-center" onClick={() => {
                    openModal()
                    setAnhaenger(true)
                    }}>
                    <Image src="/assets/Anhänger.svg" width="48px" height="30px" className="cursor-pointer" />
                    <h2 className="text-gray-300 text-lg font-bold text-center mt-2 cursor-pointer">Anhänger {"→"}</h2>
                </div>

                <div className="svgfilter flex flex-col justify-center" onClick={() => {
                    openModal()
                    setLKW(true)
                    }}>
                    <Image src="/assets/LKW.svg" width="48px" height="30px" className="cursor-pointer" />
                    <h2 className="text-gray-300 text-lg font-bold text-center mt-2 cursor-pointer">LKW {"→"}</h2>
                </div>

                <div className="svgfilter flex flex-col justify-center" onClick={() => {
                    openModal()
                    setTraktor(true)
                    }}>
                    <Image src="/assets/Traktor.svg" width="48px" height="30px" className="cursor-pointer" />
                    <h2 className="text-gray-300 text-lg font-bold text-center mt-2 cursor-pointer">Traktor {"→"}</h2>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-0"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-100"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-0"
                            >
                                <Dialog.Panel className="w-full max-w-2xl min-h-auto transform overflow-hidden rounded-2xl p-4 bg-box-blue text-center align-middle shadow-xl transition-all">
                                    <div className='text-white text-end text-3xl cursor-pointer hover:text-red-600' onClick={closeModal}>{"×"}</div>
                                    
                                    {PKW && <PKWDialog />}
                                    {Zweirad && <ZweiradDialog />}
                                    {Anhaenger && <AnhaengerDialog />}
                                    {LKW && <LKWDialog/>}
                                    {Traktor && <TraktorDialog/>}
                                    
                                    <div className="mt-4">
                                        <Link href="/kontakt">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Zur Anmeldung {">"}
                                            </button>
                                        </Link>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Klassen