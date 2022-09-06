import { Dialog, Transition, Disclosure } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Image from "next/image"
import Link from 'next/link'

function Klassen() {
    let [isOpen, setIsOpen] = useState(false)
    let klasse = [
        { name: "PKW" }
    ]

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div id="Klassenauswahl" className="w-full h-auto py-8 gap-12 flex flex-col md:flex-row items-center justify-evenly bg-back-blue">
                <div className="svgfilter flex flex-col justify-center" onClick={() => openModal()}>
                    <Image src="/assets/PKW.svg" width="48px" height="30px" className="cursor-pointer" />
                    <h2 className="text-gray-300 text-lg font-bold text-center mt-2 cursor-pointer">PKW {"→"}</h2>
                </div>
                <div className="svgfilter flex flex-col justify-center" onClick={() => openModal()}>
                    <Image src="/assets/Motorrad.svg" width="48px" height="30px" className="cursor-pointer" />
                    <h2 className="text-gray-300 text-lg font-bold text-center mt-2 cursor-pointer">Zweirad {"→"}</h2>
                </div>
                <div className="svgfilter flex flex-col justify-center" onClick={() => openModal()}>
                    <Image src="/assets/Anhänger.svg" width="48px" height="30px" className="cursor-pointer" />
                    <h2 className="text-gray-300 text-lg font-bold text-center mt-2 cursor-pointer">Anhänger {"→"}</h2>
                </div>
                <div className="svgfilter flex flex-col justify-center" onClick={() => openModal()}>
                    <Image src="/assets/LKW.svg" width="48px" height="30px" className="cursor-pointer" />
                    <h2 className="text-gray-300 text-lg font-bold text-center mt-2 cursor-pointer">LKW {"→"}</h2>
                </div>
                <div className="svgfilter flex flex-col justify-center" onClick={() => openModal()}>
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
                        leave="ease-in duration-200"
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
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl min-h-auto transform overflow-hidden rounded-2xl p-4 bg-box-blue text-center align-middle shadow-xl transition-all">
                                    <div className='text-white text-end text-3xl cursor-pointer hover:text-red-600' onClick={closeModal}>{"×"}</div>
                                    <Image src="/assets/PKW.svg" width="180px" height="80px" className="cursor-pointer" />
                                    <Dialog.Title
                                        as="h2"
                                        className="text-lg font-medium leading-6 text-white my-6"
                                    >
                                        KLASSE: PKW B
                                    </Dialog.Title>
                                    <Disclosure defaultOpen={true} >
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between bg-red-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50">
                                                    <span>Klasse B</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : 'rotate-90 transform'
                                                            } h-5 w-5 text-white`}
                                                    />
                                                </Disclosure.Button>
                                                <Transition
                                                    show={open}
                                                    enter="transition duration-100 ease-out"
                                                    enterFrom="transform scale-95 opacity-0"
                                                    enterTo="transform scale-100 opacity-100"
                                                    leave="transition duration-75 ease-out"
                                                    leaveFrom="transform scale-100 opacity-100"
                                                    leaveTo="transform scale-95 opacity-0"
                                                >
                                                    <Disclosure.Panel className="text-start px-4 pt-4 pb-2 text-sm bg-gray-100 text-black">
                                                        <h3 className='my-1'>Kraftfahrzeuge mit bis zu 3.500 kg Gesamtmasse</h3>
                                                        <h3 className='my-3'>Alter: <span className='font-bold'>ab 17 oder 18</span></h3>
                                                        <h3 className='mt-2 text-red-600'>Kraftfahrzeuge, ausgenommen Kfz der Klassen AM,A1,A2 und A:</h3>
                                                        <ul className='ml-5 list-disc'>
                                                            <li>zG max. 3.500kg</li>
                                                            <li>für max. 8 Personen außer dem Fahrer ausgelegt und gebaut</li>
                                                        </ul>
                                                        <h3 className='mt-2 text-red-600'>Anhängerregelung:</h3>
                                                        <ul className='ml-5 list-disc'>
                                                            <li>Anhänger mit zG max. 750kg immer erlaubt</li>
                                                            <li>Anhänger mit zG max. 750 kg erlaubt, wenn zG der Fahrzeugkombination mac. 3.500 kg</li>
                                                        </ul>
                                                        <p className='italic my-4'>Trikes dürfen im Inland gefahren werden, über 15kW Leistung aber erst ab 21 Jahren</p>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Disclosure>
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