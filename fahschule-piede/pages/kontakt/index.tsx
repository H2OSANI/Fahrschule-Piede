import Navbar from "../../components/Navbar"
import Select from 'react-select'

const vorbesitz = [
  { value: 'AM', label: 'AM' },
  { value: 'A1', label: 'A1' },
  { value: 'A2', label: 'A2' },
  { value: 'A', label: 'A' },
  { value: 'Mofa', label: 'Mofa' },
  { value: 'B', label: 'B' },
  { value: 'BE', label: 'BE' },
  { value: 'B96', label: 'B96' },
  { value: 'C1', label: 'C1' },
  { value: 'C1E', label: 'C1E' },
  { value: 'C', label: 'C' },
  { value: 'CE', label: 'CE' },
  { value: 'L', label: 'L' },
  { value: 'T', label: 'T' }
]
const anmeldung = [
  { value: 'AM', label: 'AM' },
  { value: 'A1', label: 'A1' },
  { value: 'A2', label: 'A2' },
  { value: 'A', label: 'A' },
  { value: 'Mofa', label: 'Mofa' },
  { value: 'B', label: 'B' },
  { value: 'BE', label: 'BE' },
  { value: 'B96', label: 'B96' },
  { value: 'C1', label: 'C1' },
  { value: 'C1E', label: 'C1E' },
  { value: 'C', label: 'C' },
  { value: 'CE', label: 'CE' },
  { value: 'L', label: 'L' },
  { value: 'T', label: 'T' }
]


function index() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-box-blue border-t-2 border-red-600">
        <div className="min-h-screen flex flex-col align-center px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Anmeldung Führerschein</h2>
          </div>
          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-2xl">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
              <form className="mb-0 space-y-6" action="https://formsubmit.co/e8fb357925b57a2d52bccc728030d45b" method="POST">
                <label htmlFor="anrede" className="block text-lg font-medium text-gray-700" >Anrede</label>
                <div className="mt-1">
                  <select name="_subject" id="anrede" className="">
                    <option value="">Bitte auswählen</option>
                    <option value="Führerschein">Herr</option>
                    <option value="Führerschein">Frau</option>

                  </select>
                </div>
                <div>
                  <label htmlFor="Vorname" className="block text-lg font-medium text-gray-700">Vorname</label>
                  <div className="mt-1">
                    <input id="Name" name="Name" type="text" autoComplete="Name" required className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="Name" className="block text-lg font-medium text-gray-700">Name</label>
                  <div className="mt-1">
                    <input id="Name" name="Name" type="text" autoComplete="Surname" required className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="Geburtsdatum" className="block text-lg font-medium text-gray-700">Geburtsdatum</label>
                  <div className="mt-1">
                    <input id="Geburtsdatum" name="Name" type="date" autoComplete="date" required className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="Geburtsort" className="block text-lg font-medium text-gray-700">Geburtsort</label>
                  <div className="mt-1">
                    <input id="Geburtsort" name="Geburtsort" type="text" autoComplete="" required className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="Name" className="block text-lg font-medium text-gray-700">Straße, Hausnummer</label>
                  <div className="mt-1">
                    <input id="Name" name="Name" type="text" autoComplete="Surname" required className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="Name" className="block text-lg font-medium text-gray-700">PLZ</label>
                  <div className="mt-1">
                    <input id="Name" name="Name" type="text" autoComplete="Surname" required className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="Name" className="block text-lg font-medium text-gray-700">Ort</label>
                  <div className="mt-1">
                    <input id="Name" name="Name" type="text" autoComplete="Surname" required className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Adresse</label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" required className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Mobil</label>
                  <div className="mt-1">
                    <input id="mobil" name="mobil" type="text" autoComplete="mobile" required className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="Topic" className="block text-lg font-medium text-gray-700" >Führerscheinklasse</label>
                  <div className="mt-1">
                    <Select isMulti className="basic-multi-select"
                      classNamePrefix="select" options={anmeldung} name="_subject" id="topic"/>

                    <label htmlFor="Vorbesitz" className="block text-lg font-medium text-gray-700" >Führerschein Vorbesitz</label>
                    <Select isMulti className="basic-multi-select"
                      classNamePrefix="select" options={vorbesitz} name="_Vorbesitz" id="vorbesitz"/>
                  </div>
                  <div>
                    <label htmlFor="body" className="block text-lg font-medium text-gray-700 mt-4">Nachricht</label>
                    <div className="mt-1">
                      <textarea id="body" name="body" rows={10} cols={20} required className="" placeholder="Maximal 500 Wörter!" maxLength={500} />
                    </div>
                  </div>
                </div>
                <div>
                  <input type="hidden" name="_next" value="https://www.cloudshot.de/danke_fuer_ihre_anfrage" />
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-2xl text-xl shadow-sm  font-medium text-brand-white bg-brand-blue-3 hover:bg-brand-blue-1 hover:rounded-lg transition-all duration-300  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-2">Absenden</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default index