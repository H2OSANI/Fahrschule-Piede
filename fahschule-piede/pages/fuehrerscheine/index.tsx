import Navbar from "../../components/Navbar"
import React from 'react'

import Klassen from "../../components/Klassen"

function index() {
  return (
    <>
    <Navbar />
    <main>
      <div id="Banner" className="flex w-full h-80 bg-box-blue items-center justify-center border-b border-t border-red-600 ">
        <h1 className="text-gray-100 font-bold text-4xl">Führerscheinklassen</h1>
      </div>
    <Klassen />
      <div id="Ausbildungsstunden" className="hidden  flex-row justify-around items-center">
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