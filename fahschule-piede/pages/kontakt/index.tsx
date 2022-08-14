
function index() {
  return (
    <main className="flex flex-col min-h-screen">
        <div className="min-h-screen flex flex-col align-center px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img className="mx-auto w-auto" src="/assets/test.jpg" alt="" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Anmeldung Führerschein</h2>
          </div>
          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-2xl">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
              <form className="mb-0 space-y-6"action="https://formsubmit.co/e8fb357925b57a2d52bccc728030d45b" method="POST">
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
                    <input id="Name" name="Name" type="text" autoComplete="Name" required className=""/>
                  </div>
                </div>
                <div>
                  <label htmlFor="Name" className="block text-lg font-medium text-gray-700">Name</label>
                  <div className="mt-1">
                    <input id="Name" name="Name" type="text" autoComplete="Surname" required className=""/>
                  </div>
                </div>
                <div>
                  <label htmlFor="Geburtsdatum" className="block text-lg font-medium text-gray-700">Geburtsdatum</label>
                  <div className="mt-1">
                    <input id="Geburtsdatum" name="Name" type="date" autoComplete="date" required className=""/>
                  </div>
                </div>
                <div>
                  <label htmlFor="Geburtsort" className="block text-lg font-medium text-gray-700">Geburtsort</label>
                  <div className="mt-1">
                    <input id="Geburtsort" name="Geburtsort" type="text" autoComplete="" required className=""/>
                  </div>
                </div>
                <div>
                  <label htmlFor="Name" className="block text-lg font-medium text-gray-700">Straße, Hausnummer</label>
                  <div className="mt-1">
                    <input id="Name" name="Name" type="text" autoComplete="Surname" required className=""/>
                  </div>
                </div>
                <div>
                  <label htmlFor="Name" className="block text-lg font-medium text-gray-700">PLZ</label>
                  <div className="mt-1">
                    <input id="Name" name="Name" type="text" autoComplete="Surname" required className=""/>
                  </div>
                </div>
                <div>
                  <label htmlFor="Name" className="block text-lg font-medium text-gray-700">Ort</label>
                  <div className="mt-1">
                    <input id="Name" name="Name" type="text" autoComplete="Surname" required className=""/>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Adresse</label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" required className=""/>
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Mobil</label>
                  <div className="mt-1">
                    <input id="mobil" name="mobil" type="text" autoComplete="mobile" required className=""/>
                  </div>
                </div>
                <div>
                  <label htmlFor="Topic" className="block text-lg font-medium text-gray-700" >Führerscheinklasse</label>
                  <div className="mt-1">
                    <select name="_subject" id="topic" className="">
                      <option value="">Bitte auswählen</option>
                      <option value="AM">AM</option>
                      <option value="A1">A1</option>
                      <option value="A2">A2</option>
                      <option value="A">A</option>
                      <option value="B196">B196</option>
                      <option value="Mofa">Mofa</option>
                      <option value="B">B</option>
                      <option value="BE">BE</option>
                      <option value="B96">B96</option>
                      <option value="C1">C1</option>
                      <option value="C1E">C1E</option>
                      <option value="C">C</option>
                      <option value="CE">CE</option>
                      <option value="L">L</option>
                      <option value="T">T</option>
                    </select>

                    <label htmlFor="Vorbesitz" className="block text-lg font-medium text-gray-700" >Führerschein Vorbesitz</label>
                    <select name="" id="Vorbesitz" className="">
                      <option value="">Bitte auswählen</option>
                      <option value="AM">AM</option>
                      <option value="A1">A1</option>
                      <option value="A2">A2</option>
                      <option value="A">A</option>
                      <option value="Mofa">Mofa</option>
                      <option value="B">B</option>
                      <option value="BE">BE</option>
                      <option value="B96">B96</option>
                      <option value="C1">C1</option>
                      <option value="C1E">C1E</option>
                      <option value="C">C</option>
                      <option value="CE">CE</option>
                      <option value="L">L</option>
                      <option value="T">T</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="body" className="block text-lg font-medium text-gray-700 mt-4">Nachricht</label>
                    <div className="mt-1">
                      <textarea id="body" name="body" rows={10} cols={20} required className="" placeholder="Maximal 500 Wörter!" maxLength={500}/>
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
  )
}

export default index