import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'


const navigation = [
  { name: 'Start', href: '/' },
  { name: 'Führerscheine', href: '/fuehrerscheine' },
  { name: 'Ablauf', href: '/ablauf' },
  { name: 'Spezial', href: '/spezial' },
]

export default function Herosection() {
  return (
    <div className="block md:relative bg-back-blue overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="block md:relative z-10 pb-8 bg-back-blue sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" className='text-back-blue' />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/">
                      <img
                        alt="Workflow"
                        className="h-8 w-auto sm:h-10 cursor-pointer"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=red&shade=600"
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
                <div className="hidden md:flex md:ml-10 md:pr-4 md:space-x-8 ">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <h3 className="font-medium text-gray-300 hover:text-red-600 cursor-pointer">{item.name}</h3>
                    </Link>
                  ))}
                  <Link href="/kontakt" >
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
                <div className="rounded-lg shadow-md bg-back-blue ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=red&shade=600"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-box-blue rounded-md p-2 inline-flex items-center justify-center text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
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
                        <h3 className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-red-900">{item.name}</h3>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/kontakt"
                  >
                    <h3 className="block w-full px-5 py-3 text-center font-medium text-red-600 bg-box-blue border-t border-red-600">Kontakt</h3>
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-gray-300 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
                <span className="block xl:inline">Fahrschule Piede</span>{' '}
                <span className="block text-red-600 xl:inline">in Regen und Langdorf</span>
              </h1>
              <p className="mt-3 text-base text-gray-300  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/kontakt"
                  >
                    <h2 className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10">
                      Direkt zur Anmeldung
                    </h2>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/ablauf"
                  >
                    <h2 className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10">
                      Erfahre Mehr
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-slate-600">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full mix-blend-overlay"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  )
}
