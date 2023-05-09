import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from "next/link"

const navigation = [
    { name: 'Start', href: '/' },
    { name: 'Führerscheine', href: '/fuehrerscheine' },
    { name: 'Öffnungszeiten', href: '/oeffnungszeiten' },
]

export default function Navbar() {
    return (
        <header className="md:block bg-back-blue overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="block md:block z-40 pb-8 bg-back-blue sm:pb-16 md:pb-2 lg:max-w-2xl lg:w-full lg:pb-2 xl:pb-2">
                    <Popover>
                        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <Link href="/">
                                            <img
                                                alt="Workflow"
                                                className="h-8 w-auto sm:h-10"
                                                src="/assets/piede.png"
                                            />
                                        </Link>
                                        <div className="-mr-2 flex items-center md:hidden">
                                            <Popover.Button className="bg-box-blue rounded-md p-2 inline-flex items-center justify-center text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                                                <span className="sr-only">Open main menu</span>
                                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:flex md:ml-10 md:pr-4 md:space-x-8">
                                    {navigation.map((item) => (
                                        <Link key={item.name} href={item.href}>
                                            <h3 className="font-medium text-gray-300 hover:text-red-600 cursor-pointer">{item.name}</h3>
                                        </Link>
                                    ))}
                                    <Link href="/kontakt">
                                        <h3 className="font-medium text-red-600 hover:text-red-400 cursor-pointer">Kontakt</h3>
                                    </Link>
                                </div>
                            </nav>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            >
                                <div className="rounded-lg shadow-md bg-back-blue ring-1 ring-red-600 ring-opacity-5 overflow-hidden">
                                    <div className="px-5 pt-4 flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="/assets/piede.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-box-blue rounded-md p-2 inline-flex items-center justify-center text-red-600  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600">
                                                <span className="sr-only">Close main menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                            >
                                                <h3  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-600 cursor-pointer">{item.name}</h3>
                                            </Link>
                                        ))}
                                    </div>
                                    <Link
                                        href="/kontakt"
                                    >
                                        <h3 className="block w-full px-5 py-3 text-center font-medium text-red-600 border-t border-red-600 bg-box-blue cursor-pointer">Kontakt</h3>
                                    </Link>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </div>
            </div>
        </header>
    )
}

