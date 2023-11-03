
import { Dialog, Disclosure, Transition } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/outline"

function Traktor() {
    return (
        <>
            <div className="flex justify-center w-full">
                <div>
                    <img src="/assets/Traktor.svg" className="cursor-pointer w-20 h-16 object-contain self-center" />
                </div>
            </div>
            <Dialog.Title
                as="h2"
                className="text-lg font-medium leading-6 text-white my-6"
            >
                KLASSE: L, T
            </Dialog.Title>
            <Disclosure defaultOpen={true}>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between bg-red-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50 border-b-2 border-box-blue">
                            <span>L</span>
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
                                <h3 className='my-1 text-red-600'>Zugmaschinen</h3>
                                <h3 className='my-3'>Alter: <span className='font-bold'>ab 16</span></h3>
                                <ul className='ml-5 list-disc'>
                                    <li>für land- oder forstwirtschaftliche Zwecke</li>
                                    <li>max. 40km/h</li>
                                    <li>in Kombination mit Anhänger max. 25km/h </li>
                                </ul>
                                <h3 className='my-1 text-red-600'>selbstfahrende Arbeitsmaschinen, selbstfahrende Futtermischwagen, Stapler und andere Flurförderzeuge</h3>
                                <ul className='ml-5 list-disc'>
                                    <li>max. 25km/h (auch mit Anhäger)</li>
                                </ul>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>

            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between bg-red-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50 border-b-2 border-box-blue">
                            <span>T</span>
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
                                <h3 className='my-1 text-red-600'>Zugmaschinen</h3>
                                <h3 className='my-3'>Alter: <span className='font-bold'>ab 16</span></h3>
                                <ul className='ml-5 list-disc'>
                                    <li>für land- oder forstwirtschaftliche Zwecke</li>
                                    <li>max. 60km/h <span className="font-bold">unter 18: max. 40km/h</span></li>
                                    <li>mit Anhänger</li>
                                </ul>
                                <h3 className='my-1 text-red-600'>selbstfahrende Arbeitsmaschinen, selbstfahrende Futtermischwagen, Stapler und andere Flurförderzeuge</h3>
                                <ul className='ml-5 list-disc'>
                                    <li>max. 40km/h (auch mit Anhäger)</li>
                                </ul>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </>
    )
}

export default Traktor