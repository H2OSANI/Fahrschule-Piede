import { Dialog, Disclosure, Transition } from "@headlessui/react"
import Image from "next/image"
import { ChevronUpIcon } from "@heroicons/react/outline"

function LKW() {
    return (
        <>
            <Image src="/assets/LKW.svg" width="180px" height="80px" className="cursor-pointer w-44 h-20" />
            <Dialog.Title
                as="h2"
                className="text-lg font-medium leading-6 text-white my-6"
            >
                KLASSE: C, CE, C1, C1E
            </Dialog.Title>
            <Disclosure defaultOpen={true}>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between bg-red-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50 border-b-2 border-box-blue">
                            <span>C</span>
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
                                <h3 className='my-1 text-red-600'>Kraftfahrzeuge, ausgenommen Kfz der Klassen AM, A1, A2, A, D1, D</h3>
                                <h3 className='my-3'>Alter: <span className='font-bold'>ab 18 oder 21</span></h3>
                                <ul className='ml-5 list-disc'>
                                    <li>zG über 3.500kg</li>
                                    <li>für max. 8 Personen außer dem Fahrer ausgelegt und gebaut</li>
                                    <li>mit Anhänger bis 750kg zG</li>
                                </ul>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>

            <Disclosure >
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between bg-red-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50 border-b-2 border-box-blue">
                            <span>CE</span>
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
                                <h3 className='my-1 text-red-600'>Kraftfahrzeuge der Klasse C mit Sattelhänger oder Anhänger</h3>
                                <h3 className='my-3'>Alter: <span className='font-bold'>ab 18 oder 21</span></h3>
                                <ul className='ml-5 list-disc'>
                                    <li>mit Anhänger über 750kg zG</li>
                                </ul>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>

            <Disclosure >
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between bg-red-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50 border-b-2 border-box-blue">
                            <span>C1</span>
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
                                <h3 className='my-1 text-red-600'>Kraftfahrzeuge mit einer Gesamtmasse zwischen 3.500 kg und 7.500 kg</h3>
                                <h3 className='my-1 text-red-600'>Kraftfahrzeuge, ausgenommen Kfz der Klassen AM, A1, A2, A, D1, D</h3>
                                <h3 className='my-3'>Alter: <span className='font-bold'>ab 18</span></h3>
                                <ul className='ml-5 list-disc'>
                                    <li>mit Anhänger bis 750 kg zG</li>
                                    <li>zG über 3.500 kg bis max. 7.500 kg</li>
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
                        <Disclosure.Button className="flex w-full justify-between bg-red-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50 border-b-2 border-box-blue">
                            <span>C1E</span>
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
                                <h3 className='my-1 text-red-600'>Kraftfahrzeuge der Klasse C1 mit Anhänger oder Sattelanhänger</h3>
                                <h3 className='my-3'>Alter: <span className='font-bold'>ab 18</span></h3>
                                <ul className='ml-5 list-disc'>
                                    <li>mit Anhänger über 750 kg zG</li>
                                    <li>zG der Fahrzeugkombination 12.000 kg</li>
                                </ul>
                                <h3 className='my-1 text-red-600'>Kraftfahrzeuge der Klasse B mit Anhänger oder Sattelanhänger</h3>
                                <ul className='ml-5 list-disc'>
                                    <li>mit Anhänger über 3500 kg zG</li>
                                    <li>zG der Fahrzeugkombination 12.000 kg</li>
                                </ul>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </>
    )
}

export default LKW