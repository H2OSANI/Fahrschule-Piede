import Navbar from "../../components/Navbar"
import Form from "../../components/Form"


function index() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pb-8 bg-back-blue border-t-2 border-red-600">
        <div className="min-h-screen flex flex-col align-center px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Anmeldung Führerschein</h2>
          </div>
          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-2xl">
            <div className="bg-box-blue py-8 px-6 shadow md:border-2 border-red-600 rounded-lg sm:px-10">
            <Form />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default index