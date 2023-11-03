
import Navbar from "../components/Navbar"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../lib/firebase"

const wochentage = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
// Function to fetch data from Firestore
async function getDataFromFirestore() {
    const querySnapshot = await getDoc(doc(db, 'settings', 'parameter'));
    const data = querySnapshot.data()
    data.oeffnungszeiten.standort.forEach(e => {
        e.unterrichtszeiten.sort((a, b) => wochentage.indexOf(a.tag) - wochentage.indexOf(b.tag));
    });
    return data;
}
function öffnungszeiten({ data }) {
    
    const currentdayNumber = new Date().getDay();
    const isNow = wochentage[currentdayNumber];
    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen bg-back-blue">
                <h1 className="mb-2 md:mb-6 text-gray-100 font-bold text-3xl mx-auto text-center">Öffnungszeiten</h1>
                <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
                    <div className="bg-white space-y-4 p-4 rounded-lg shadow">
                        <div className="flex flex-col space-y-3 items-center space-x-2 text-md">
                            <div className="font-semibold text-lg text-red-600">94209, Regen</div>
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
                            {data.oeffnungszeiten.standort[0].unterrichtszeiten.map((item) => (
                            <div className="flex space-x-4" key={item.id}>
                                <div>
                                    {isNow === item.tag ?     
                                        <p className="font-bold">{item.tag}:</p>
                                    :
                                        <p>{item.tag}:</p>
                                    }
                                </div>
                                <div>
                                {isNow === item.tag ?     
                                        <p className="font-bold">{item.zeit}</p>
                                    :
                                        <p>{item.zeit}</p>
                                    }
                                </div>
                            </div>
                            ))}
                            <div>Bürozeit: <span className="underline">{data.oeffnungszeiten.standort[0].buerozeit}</span></div>
                        </div>
                    </div>
                    <div className="bg-white space-y-4 p-4 rounded-lg shadow">
                        <div className="flex flex-col space-y-3 items-center space-x-2 text-md">
                            <div className="font-semibold text-lg text-red-600">94264, Langdorf</div>
                            <div className="text-gray-500">
                                <p className="flex">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                                        className="w-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                                        </path>
                                    </svg>
                                    Zwieseler Straße 2
                                </p>
                            </div>
                            {data.oeffnungszeiten.standort[1].unterrichtszeiten.map((item) => (
                            <div className="flex space-x-4" key={item.id}>
                                <div>
                                    {isNow === item.tag ?     
                                        <p className="font-bold">{item.tag}:</p>
                                    :
                                        <p>{item.tag}:</p>
                                    }
                                </div>
                                <div>
                                {isNow === item.tag ?     
                                        <p className="font-bold">{item.zeit}</p>
                                    :
                                        <p>{item.zeit}</p>
                                    }
                                </div>
                            </div>
                            ))}
                            <div>Bürozeit: <span className="underline">{data.oeffnungszeiten.standort[0].buerozeit}</span></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export async function getServerSideProps() {
    const data = await getDataFromFirestore();
    return {
        props: {
            data,
        },
    };
}

export default öffnungszeiten