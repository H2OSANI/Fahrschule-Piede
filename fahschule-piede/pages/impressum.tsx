import Navbar from "../components/Navbar"

function impressum() {
    return (
        <>
            <Navbar />
            <main className="w-full flex min-h-screen bg-box-blue">
                <div className="mx-2 md:mx-14 lg:mx-20 mt-6">
                    <h1 className="text-red-600 text-4xl">Impressum</h1>
                    <p className="text-gray-100 text-2xl">Angaben gemäß § 5 TMG</p>
                    <p className="text-gray-100 text-2xl">Verantwortlich: Fahrschule Piede</p>
                    <p className="text-gray-100 text-2xl">Inhaber: Hans–Peter Piede</p>
                    <p className="text-gray-100 text-2xl">Bahnhofstrasse 1 94209 Regen</p>
                    <p className="text-gray-100 text-2xl">Telefon: 0171 219 218 8</p>
                    <p className="text-gray-100 text-2xl">E-Mail: info@fahrschule-piede.de</p>

                    <h3 className="text-red-600 text-3xl">gesetzliche Berufsbezeichnung:</h3>
                    <p className="text-gray-100 text-2xl">Fahrlehrer (erteilt für Deutschland)</p>

                    <h3 className="text-red-600 text-3xl">berufsrechtliche Regelungen:</h3>
                    <p className="text-gray-100 text-2xl">Fahrlehrergesetz, Fahrschülerausbildungsordnung</p>

                    <h3 className="text-red-600 text-3xl">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
                    <p className="text-gray-100 text-2xl">Hans–Peter Piede</p>
                    <p className="text-gray-100 text-2xl">Bahnhofstrasse 1 94209 Regen</p>
                </div>
            </main>
        </>
    )
}

export default impressum