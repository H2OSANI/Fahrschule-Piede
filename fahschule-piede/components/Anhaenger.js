import { Dialog, Disclosure, Transition } from "@headlessui/react"
import Image from "next/image"
import { ChevronUpIcon } from "@heroicons/react/outline"

function Anhaenger() {
    return (
        <>
            <img src="/assets/Anhänger.svg" className="cursor-pointer w-44 h-22" />
            <Dialog.Title
                as="h2"
                className="text-lg font-medium leading-6 text-white my-6"
            >
                KLASSE: BE, B96
            </Dialog.Title>
            <Disclosure defaultOpen={true} >
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between bg-red-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50 border-b-2 border-box-blue">
                            <span>BE</span>
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
                            leave="transition duration-0 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel className="text-start px-4 pt-4 pb-2 text-sm bg-gray-100 text-black">
                                <h3 className='my-1 text-red-600'>Anhänger mit mehr als 750kg und bis zu 3.500 kg Gesamtmasse</h3>
                                <h3 className='my-3'>Alter: <span className='font-bold'>ab 17 oder 18</span></h3>
                                <h3 className='mt-2 text-red-600'>Zugfahrzeug der Klasse B</h3>
                                <ul className='ml-5 list-disc'>
                                    <li>zG max. 3.500kg</li>
                                    <li>für max. 8 Personen außer dem Fahrer ausgelegt und gebaut</li>
                                </ul>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>

            <Disclosure >
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between bg-red-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50">
                            <span>B96</span>
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
                            leave="transition duration-0 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel className="text-start px-4 pt-4 pb-2 text-sm bg-gray-100 text-black">
                                <h3 className='my-1 text-red-600'>Fahrzeugkombination über 3.500 kg aber max. 4.250 kg</h3>
                                <h3 className='my-3'>Alter: <span className='font-bold'>ab 17 oder 18</span></h3>
                                <h3 className='mt-2 text-red-600'>Zugfahrzeug der Klasse B</h3>
                                <ul className='ml-5 list-disc'>
                                    <li>zG max. 3.500kg</li>
                                    <li>für max. 8 Personen außer dem Fahrer ausgelegt und gebaut</li>
                                </ul>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </>
    )
}

export default Anhaenger