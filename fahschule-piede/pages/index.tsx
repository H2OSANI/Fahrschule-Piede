import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Herosection from '../components/Herosection'

const Home: NextPage = () => {
  return (
    <>
      <Herosection />
      <div className='w-full min-h-screen pb-8 bg-back-blue'>
        <h2 className='pt-8 pb-8 text-red-600 text-4xl font-bold text-center'>Fahrschule in Regen</h2>
        <div className="flex justify-center items-center flex-col w-full">
          
          <div className='flex justify-around max-w-6xl '>
            <div className='w-1/2 bg-slate-600 rounded-tl-xl object-cover'>
              <Image src="/assets/test.jpg" layout='responsive' width="380px" height="280px" className='rounded-tl-xl object-fit mix-blend-overlay' />
            </div>
            <div className='w-1/2 bg-box-blue rounded-tr-xl flex items-center pt-8 px-6 flex-col'>
            <h3 className='text-3xl font-bold text-red-600 mb-4'>Werde mit uns ein sicherer Fahrer</h3>
              <p className=' text-gray-300 '>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa excepturi tenetur ipsam facilis, dolorum officiis dolorem quod. Doloribus odio hic nam ad ut aspernatur harum nulla iure itaque. Dolore possimus nemo quos reprehenderit dicta distinctio suscipit delectus excepturi tempore illo
              </p>
            </div>
          </div>

          <div className='flex justify-around max-w-6xl '>
            <div className='w-1/2 bg-box-blue'>
              <p className='m-6'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa excepturi tenetur ipsam facilis, dolorum officiis dolorem quod. Doloribus odio hic nam ad ut aspernatur harum nulla iure itaque. Dolore possimus nemo quos reprehenderit dicta distinctio suscipit delectus excepturi tempore illo
              </p>
            </div>
            <div className='w-1/2 bg-slate-600 object-cover'>
              <Image src="/assets/test.jpg" layout='responsive' width="380px" height="280px" className=' object-fit mix-blend-overlay' />
            </div>
          </div>

          <div className='flex justify-around max-w-6xl '>
            <div className='w-1/2 bg-slate-600 rounded-bl-xl object-cover'>
              <Image src="/assets/test.jpg" layout='responsive' width="380px" height="280px" className='rounded-bl-xl object-fit mix-blend-overlay' />
            </div>
            <div className='w-1/2 bg-box-blue rounded-br-xl'>
              
              <p className='m-6'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa excepturi tenetur ipsam facilis, dolorum officiis dolorem quod. Doloribus odio hic nam ad ut aspernatur harum nulla iure itaque. Dolore possimus nemo quos reprehenderit dicta distinctio suscipit delectus excepturi tempore illo
              </p>
            </div>
          </div>

        </div>
        <h2 className='pt-8 pb-8 text-red-600 text-4xl font-bold text-center'>Fahrschule in Langdorf</h2>
        <div className="flex justify-center items-center flex-col w-full">

          <div className='flex justify-around max-w-6xl '>
            <div className='w-1/2 bg-slate-600 rounded-tl-xl object-cover'>
              <Image src="/assets/test.jpg" layout='responsive' width="380px" height="280px" className='rounded-tl-xl object-fit mix-blend-overlay' />
            </div>
            <div className='w-1/2 bg-white rounded-tr-xl'>
              <p className='m-6'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa excepturi tenetur ipsam facilis, dolorum officiis dolorem quod. Doloribus odio hic nam ad ut aspernatur harum nulla iure itaque. Dolore possimus nemo quos reprehenderit dicta distinctio suscipit delectus excepturi tempore illo
              </p>
            </div>
          </div>

          <div className='flex justify-around max-w-6xl '>
            <div className='w-1/2 bg-white'>
              <p className='m-6'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa excepturi tenetur ipsam facilis, dolorum officiis dolorem quod. Doloribus odio hic nam ad ut aspernatur harum nulla iure itaque. Dolore possimus nemo quos reprehenderit dicta distinctio suscipit delectus excepturi tempore illo
              </p>
            </div>
            <div className='w-1/2 bg-slate-600 object-cover'>
              <Image src="/assets/test.jpg" layout='responsive' width="380px" height="280px" className=' object-fit mix-blend-overlay' />
            </div>
          </div>

          <div className='flex justify-around max-w-6xl '>
            <div className='w-1/2 bg-slate-600 rounded-tl-xl object-cover'>
              <Image src="/assets/test.jpg" layout='responsive' width="380px" height="280px" className='rounded-tl-xl object-fit mix-blend-overlay' />
            </div>
            <div className='w-1/2 bg-white rounded-tr-xl'>
              <p className='m-6'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa excepturi tenetur ipsam facilis, dolorum officiis dolorem quod. Doloribus odio hic nam ad ut aspernatur harum nulla iure itaque. Dolore possimus nemo quos reprehenderit dicta distinctio suscipit delectus excepturi tempore illo
              </p>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Home
