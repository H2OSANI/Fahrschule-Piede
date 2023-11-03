import Navbar from "../../components/Navbar"
import React from 'react'
import Klassen from "../../components/Klassen"

function index() {
  return (
    <>
    <Navbar />
    <main>
      <div id="Banner" className="flex w-full bg-slate-600 items-center justify-center  border-t border-red-600 object-fit ">
        <img src="/assets/Klassen.jpg" alt="fahrschule Piede Führerscheinklassen" className="w-full max-h-[600px] h-auto mix-blend-overlay" ></img>
        <h1 className="absolute text-gray-100 font-bold text-4xl lg:text-7xl cursor-default">Führerscheinklassen</h1>
      </div>
    <Klassen />
      <div id="Ausbildungsstunden" className="hidden flex-row justify-around items-center">
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