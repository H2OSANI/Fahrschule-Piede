import Navbar from "../../components/Navbar"
import { BriefcaseIcon } from "@heroicons/react/outline"

function index() {
  return (
    <>
    <Navbar />
    <main>
      <div id="Banner" className="flex w-full h-64 bg-red-400 items-center justify-center">
        <h1 className="text-white text-3xl">Führerscheinklassen</h1>
      </div>
      <div id="Klassenauswahl" className="w-full h-44 flex flex-row items-center justify-evenly">
        <BriefcaseIcon className="h-10 w-10 cursor-pointer"/>
        <BriefcaseIcon className="h-10 w-10 cursor-pointer"/>
        <BriefcaseIcon className="h-10 w-10 cursor-pointer"/>
        <BriefcaseIcon className="h-10 w-10 cursor-pointer"/>
        <BriefcaseIcon className="h-10 w-10 cursor-pointer"/>
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