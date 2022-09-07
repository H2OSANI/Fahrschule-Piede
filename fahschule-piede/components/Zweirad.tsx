import { Dialog, Disclosure, Transition } from "@headlessui/react"
import Image from "next/image"
import { ChevronUpIcon } from "@heroicons/react/outline"

function Zweirad() {
  return (
    <>
    <Image src="/assets/Motorrad.svg" width="180px" height="80px" className="cursor-pointer" />
    <Dialog.Title
        as="h2"
        className="text-lg font-medium leading-6 text-white my-6"
    >
        KLASSE: Zweirad: Mofa, AM, A1, A2, A
    </Dialog.Title>

    <Disclosure defaultOpen={true} >
        {({ open }) => (
            <>
                <Disclosure.Button className="flex w-full justify-between bg-red-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50 border-b-2 border-box-blue">
                    <span>Mofa</span>
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
                        <h3 className='my-1 text-red-600'>geschwindigkeitsreduzierte (25km/h) Kraftfahrzeuge der Klassen:</h3>
                        <ul className='list-disc ml-5'>
                            <li>Mopeds L1e-B</li>
                            <li>Dreirädrige Kleinkrafträder L2e-P</li>
                            <li>Leichte vierrädrige Leichtkraftfahrzeuge der Klasse L2e-U</li>
                        </ul>
                        <h3 className='my-3'>Alter: <span className='font-bold'>ab 15</span></h3>
                        <h3 className='mt-2 text-red-600'>Technische Voraussetzung:</h3>
                        <ul className='ml-5 list-disc'>
                            <li>max 50cm³</li>
                            <li>max 25 km/h</li>
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
                    <span>AM</span>
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
                        <h3 className='my-1 text-red-600'>Leichte zweirädrige Kleinkrafträder der Klasse:</h3>
                        <ul className='list-disc ml-5'>
                            <li>Mopeds L1e-B</li>
                            <li>Dreirädrige Kleinkrafträder L2e</li>
                            <li>Leichte vierrädrige Leichtkraftfahrzeuge der Klasse L6e</li>
                        </ul>
                        <h3 className='my-3'>Alter: <span className='font-bold'>ab 15</span></h3>
                        <h3 className='mt-2 text-red-600'>Technische Voraussetzung:</h3>
                        <ul className='ml-5 list-disc'>
                            <li>max 50cm³ oder 500cm³ (Selbstzünder)</li>
                            <li>max 45 km/h</li>
                            <li>Leistung nicht mehr als 4kw</li>
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
                    <span>A1</span>
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
                        <h3 className='my-1 text-red-600'>Krafträder mit:</h3>
                        <ul className='list-disc ml-5'>
                            <li>Hubraum nicht mehr als 125cm³</li>
                            <li>Motorleistung nicht mehr als 11kW</li>
                            <li>Verhältnis der Leistung zu Gewicht max. 0,1kW/kg</li>
                        </ul>
                        <p className="my-1 italic">auch mit Beiwagen</p>
                        <h3 className='my-3'>Alter: <span className='font-bold'>ab 16</span></h3>
                        <h3 className='mt-2 text-red-600'>Dreirädrige Kraftfahrzeuge:</h3>
                        <ul className='ml-5 list-disc'>
                            <li>Hubraum von mehr als 50cm³</li>
                            <li>mehr als 45 km/h</li>
                            <li>Leistung bis zu 15kW</li>
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
                    <span>A2</span>
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
                        <h3 className='my-1 text-red-600'>Krafträder mit:</h3>
                        <ul className='list-disc ml-5'>
                            <li>Motorleistung nicht mehr als 35 kW</li>
                            <li>Motorleistung abgeleitet von nicht mehr als 70kW</li>
                            <li>Verhältnis der Leistung zum Gewicht max. 0,2 kW/kg</li>
                        </ul>
                        <p className="my-1 italic">auch mit Beiwagen</p>
                        <h3 className='my-3'>Alter: <span className='font-bold'>ab 18</span></h3>
                    </Disclosure.Panel>
                </Transition>
            </>
        )}
    </Disclosure>

    <Disclosure >
        {({ open }) => (
            <>
                <Disclosure.Button className="flex w-full justify-between bg-red-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50 border-b-2 border-box-blue">
                    <span>A</span>
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
                        <h3 className='my-1 text-red-600'>Krafträder mit:</h3>
                        <ul className='list-disc ml-5'>
                            <li>Hubraum mehr als 50cm³</li>
                            <li>bauartbedingter Höchstgeschwindigkeit von mehr als 45 km/h,</li>
                        </ul>
                        <p className="my-1 italic">auch mit Beiwagen</p>
                        <h3 className='my-3'>Alter: <span className='font-bold'>ab 20 wenn Vorbesitz von A2 2 Jahre gegeben ist</span></h3>
                        <h3 className='my-3'>Alter: <span className='font-bold'>ab 24 bei Direkteinstieg</span></h3>
                    </Disclosure.Panel>
                </Transition>
            </>
        )}
    </Disclosure>
    </>
  )
}

export default Zweirad