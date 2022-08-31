import Navbar from "../../components/Navbar"
import React from 'react'
import { BriefcaseIcon } from "@heroicons/react/outline"
import Image from "next/image"

function index() {
  return (
    <>
    <Navbar />
    <main>
      <div id="Banner" className="flex w-full h-80 bg-box-blue items-center justify-center  ">
        <h1 className="text-gray-300 font-bold text-4xl">Führerscheinklassen</h1>
      </div>
      <div id="Klassenauswahl" className="w-full h-44 flex flex-row items-center justify-evenly bg-back-blue">
        <div className="svgfilter flex flex-col justify-center">
        <Image src="/assets/PKW.svg" width="48px" height="30px" className="cursor-pointer"/>
        <h2 className="text-gray-300 text-lg font-bold text-center mt-2">PKW</h2>
        </div>
        <div className="svgfilter flex flex-col justify-cente">
        <Image src="/assets/Motorrad.svg" width="48px" height="30px" className="cursor-pointer"/>
        <h2 className="text-gray-300 text-lg font-bold text-center mt-2">Zweirad</h2>
        </div>
        <div className="svgfilter flex flex-col justify-cente">
        <Image src="/assets/Anhänger.svg" width="48px" height="30px" className="cursor-pointer"/>
        <h2 className="text-gray-300 text-lg font-bold text-center mt-2">Anhänger</h2>
        </div>
        <div className="svgfilter flex flex-col justify-cente">
        <Image src="/assets/LKW.svg" width="48px" height="30px" className="cursor-pointer"/>
        <h2 className="text-gray-300 text-lg font-bold text-center mt-2">LKW</h2>
        </div>
        <div className="svgfilter flex flex-col justify-cente">
        <Image src="/assets/Traktor.svg" width="48px" height="30px" className="cursor-pointer"/>
        <h2 className="text-gray-300 text-lg font-bold text-center mt-2">Traktor</h2>
        </div>
        
      </div> 
      <div id="Ausbildungsstunden" className="flex flex-row justify-around items-center">
        <div id="Praktisch" className="flex flex-col justify-center items-center">
          <h2>Praktische Ausbildung</h2>
          <img src="/assets/test.jpg" alt="" />
        </div>
        <div id="Theoretisch" className="flex flex-col justify-center items-center">
          <h2>Theoretische Ausbildung</h2>
          <img src="/assets/test.jpg" alt="" />
        </div>
      </div>     
    </main>
    </>
  )
}

export default index