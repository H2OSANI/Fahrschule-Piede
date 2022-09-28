
import Navbar from "../components/Navbar"

function öffnungszeiten() {
    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen bg-back-blue">
                <h1 className="mb-2 md:mb-6 text-gray-100 font-bold text-3xl mx-4">Öffnungszeiten</h1>
                <table className="w-full hidden md:block px-4">
                    <thead className="bg-box-blue border-b-2 border-gray-300">
                        <tr>
                            <th className="w-1/3 p-3 text-xl font-semibold tracking-wide text-left text-red-600">Standort</th>
                            <th className="w-1/5 p-3 text-xl font-semibold tracking-wide text-left text-red-600">Adresse</th>
                            <th className="w-1/5 p-3 text-xl font-semibold tracking-wide text-left text-red-600">Tage</th>
                            <th className="w-1/5 p-3 text-xl font-semibold tracking-wide text-left text-red-600">Bürozeit</th>
                            <th className="w-1/5 p-3 text-xl font-semibold tracking-wide text-left text-red-600">Unterrichtszeit</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr className="bg-white">
                            <td className="p-3 text-xl text-gray-700 font-bold whitespace-nowrap">Regen</td>
                            <td className="p-3 text-xl text-gray-700 whitespace-nowrap">Bahnhofstraße 1</td>
                            <td className="p-3 text-xl text-gray-700 whitespace-nowrap">Montag, Donnerstag</td>
                            <td className="p-3 text-xl text-gray-700 whitespace-nowrap">ab 17:45</td>
                            <td className="p-3 text-xl text-gray-700 whitespace-nowrap">18:00 - 19:30</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="p-3 text-xl text-gray-700 font-bold whitespace-nowrap">Langdorf</td>
                            <td className="p-3 text-xl text-gray-700 whitespace-nowrap">Bahnhofstraße 1</td>
                            <td className="p-3 text-xl text-gray-700 whitespace-nowrap">Dienstag, Freitag</td>
                            <td className="p-3 text-xl text-gray-700 whitespace-nowrap">ab 17:45</td>
                            <td className="p-3 text-xl text-gray-700 whitespace-nowrap">18:00 - 19:30</td>
                        </tr>
                    </tbody>
                </table>
                <div className="grid grid-cols-1 gap-4 md:hidden m-4">
                    <div className="bg-white space-y-4 p-4 rounded-lg shadow">
                        <div className="flex flex-col space-y-3 items-center space-x-2 text-md">
                            <div className="font-semibold text-lg text-red-600">Regen</div>
                            <div className="text-gray-500">
                                <p className="flex">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                                    className="w-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path fill="currentColor"
                                        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                                    </path>
                                </svg>
                                Bahnhofstraße 1
                                </p>
                            </div>
                            <div><span className="text-gray-700 p-1.5 bg-red-400 rounded-sm">Montag</span>  und  <span className="text-gray-700 p-1.5 bg-red-400 rounded-sm">Donnerstag</span></div>
                            <div>Bürozeit: <span className="font-bold">ab 17:45</span></div>
                            <div>Unterrichtszeit: <span className="font-bold">18:00 - 19:30</span></div>
                        </div>
                    </div>
                    <div className="bg-white space-y-4 p-4 rounded-lg shadow">
                        <div className="flex flex-col space-y-3 items-center space-x-2 text-md">
                            <div className="font-semibold text-lg text-red-600">Langdorf</div>
                            <div className="text-gray-500">
                                <p className="flex">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                                    className="w-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path fill="currentColor"
                                        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                                    </path>
                                </svg>
                                Bahnhofstraße 1
                                </p>
                            </div>
                            <div><span className="text-gray-700 p-1.5 bg-red-400 rounded-sm">Dienstag</span>  und  <span className="text-gray-700 p-1.5 bg-red-400 rounded-sm">Freitag</span></div>
                            <div>Bürozeit: <span className="font-bold">ab 17:45</span></div>
                            <div>Unterrichtszeit: <span className="font-bold">18:00 - 19:30</span></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default öffnungszeiten