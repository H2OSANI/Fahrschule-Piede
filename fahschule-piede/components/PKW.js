import { Dialog, Disclosure, Transition } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/outline"

function PKW() {
    return (
        <>
            <img src="/assets/PKW.svg" className="cursor-pointer w-44 h-22" />
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
                            <span>B</span>
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
        </>
    )
}

export default PKW