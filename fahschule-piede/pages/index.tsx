import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Herosection from '../components/Herosection'

const Home: NextPage = () => {
  return (
    <>
      <Herosection />
      <div className='w-full min-h-screen p-8 bg-back-blue'>
        <div className="flex justify-center items-center flex-col w-full">

          <div className='flex flex-col justify-around mb-5 md:mb-0 md:flex-row w-full md:max-w-6xl'>
            <div className='md:w-1/2 bg-slate-600 rounded-t-xl md:rounded-t-none md:rounded-tl-xl object-cover'>
              <Image src="/assets/test.jpg" layout='responsive' width="380px" height="280px" className='rounded-t-xl md:rounded-t-none md:rounded-tl-xl object-fit mix-blend-overlay' />
            </div>
            <div id='desc' className='md:w-1/2 bg-box-blue md:rounded-tr-xl flex items-center pt-8 px-6 flex-col'>
              <h3 className='text-3xl font-bold text-red-600 mb-4'>Werde mit uns ein sicherer Fahrer</h3>
              <p className='m-6 text-gray-300 '>
                Die Fahrschule Piede möchte Dich auf Deinem Weg in die mobile Zukunft begleiten. Wir sind Deine Ansprechpartner in Theorie und Praxis und bringen Dich in kürzester Zeit spielerisch durch die Prüfungen. Motorisiert macht das Leben eindeutig mehr Spaß!
              </p>
            </div>
          </div>

          <div className='flex flex-col-reverse justify-around mb-5 md:mb-0 md:flex-row w-full md:max-w-6xl'>
            <div className='md:w-1/2 bg-box-blue flex items-center pt-8 px-6 flex-col'>
              <h3 className='text-3xl font-bold text-red-600 mb-4'>Deine Vorteile</h3>
              <p className='m-6 text-gray-300'>
                Jeder lernt anders! Egal, welches Deine bevorzugte Geschwindigkeit am Steuer oder in der Theorie ist: Bei uns bleibt garantiert niemand auf der Strecke! Unser flexibles Ausbildungskonzept orientiert sich deshalb ganz an Deinen individuellen Bedürfnissen.
                Damit dabei der Spaß auch nicht zu kurz kommt, arbeiten wir mit innovativen Methoden. Und das alles zu einem fairen Preis.

              </p>
            </div>
            <div className='md:w-1/2 bg-slate-600 object-cover'>
              <Image src="/assets/test.jpg" layout='responsive' width="380px" height="280px" className=' object-fit mix-blend-overlay' />
            </div>
          </div>

          <div className='flex flex-col justify-around mb-5 md:mb-0 md:flex-row w-full md:max-w-6xl'>
            <div className='md:w-1/2 bg-slate-600 md:rounded-bl-xl object-cover'>
              <Image src="/assets/test.jpg" layout='responsive' width="380px" height="280px" className='md:rounded-bl-xl object-fit mix-blend-overlay' />
            </div>
            <div className='md:w-1/2 bg-box-blue flex items-center pt-8 px-6 flex-col rounded-b-xl md:rounded-b-none rounded-br-xl'>
              <h3 className='text-3xl font-bold text-red-600 mb-4 text-center'> Top Erfahrung: Qualität und Kompentenz seit 1966 in Regen </h3>
              <p className='m-6 text-gray-300'>
                Gegründet von Hans Piede sind wir seit 1966 in Regen und seit 1994 in Langdorf niedergelassen. Wir bieten dir in dritter Generation familiäres Klima sowie freundliche und kompetente Fahrlehrer. Dank jahrelanger Erfahrung, stetiger Modernisierung und Anpassung an die Wünsche unserer Kunden, können wir auch!
              </p>
            </div>
          </div>

        </div>
        <h2 className='hidden md:block pt-8 pb-8 text-red-600 text-4xl font-bold text-center'>Fahrschulen in Regen und Langdorf</h2>
        <h2 className='md:hidden pt-8 pb-8 text-red-600 text-4xl font-bold text-center'>Fahrschulen in Regen</h2>
          <div className='flex flex-col md:flex-row justiy-center w-full'>
            <div className='md:w-1/2 bg-slate-600 md:rounded-l-xl object-cover'>
              <Image src="/assets/test.jpg" layout='responsive' width="380px" height="280px" className='md:rounded-l-xl object-fit mix-blend-overlay' />
            </div>
            <h2 className='md:hidden pt-8 pb-8 text-red-600 text-4xl font-bold text-center'>Fahrschulen in Langdorf</h2>
            <div className='md:w-1/2 bg-slate-600 md:rounded-r-xl'>
              <Image src="/assets/test.jpg" layout='responsive' width="380px" height="280px" className='md:rounded-r-xl object-fit mix-blend-overlay' />
            </div>
          </div>
        </div>
    </>

  )
}

export default Home
