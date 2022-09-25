import Select from 'react-select'
import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast'

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
function Form() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm(`service_m5npr0d`, `template_o20v3qf`, form.current!, `iEU-IFKLoxl79jqsm`)
            .then((result) => {
                console.log(result.text);
                toast.success('Anmeldung versendet!')
                form.current?.reset()
            }, (error) => {
                console.log(error.text);
                toast.error('Überprüfe deine Angaben!')
            });
    };
    return (
        <form className="mb-0 space-y-6 bg-box-blue" ref={form} onSubmit={sendEmail}>
            <Toaster position='top-center' reverseOrder={false} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="">
                    <label htmlFor="anrede" className="block text-lg font-medium text-gray-100" >Anrede</label>
                    <select name="Sex" id="anrede" className="" autoComplete="sex">
                        <option value="">Bitte auswählen</option>
                        <option value="Herr">Herr</option>
                        <option value="Frau">Frau</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="Vorname" className="block text-lg font-medium text-gray-100">Vorname</label>
                    <div className="">
                        <input id="Vorname" name="Vorname" type="text" autoComplete="given-name" required className="" />
                    </div>
                </div>

                <div>
                    <label htmlFor="Name" className="block text-lg font-medium text-gray-100">Name</label>
                    <div className="mt-1">
                        <input id="Name" name="Name" type="text" autoComplete="family-name" required className="" />
                    </div>
                </div>

                <div>
                    <label htmlFor="Geburtsdatum" className="block text-lg font-medium text-gray-100">Geburtsdatum</label>
                    <div className="mt-1">
                        <input id="Geburtsdatum" name="Geburtsdatum" type="date" autoComplete="bday" required className="" />
                    </div>
                </div>

                <div>
                    <label htmlFor="Geburtsort" className="block text-lg font-medium text-gray-100">Geburtsort</label>
                    <div className="mt-1">
                        <input id="Geburtsort" name="Geburtsort" type="text" required className="" />
                    </div>
                </div>

                <div>
                    <label htmlFor="Adresse" className="block text-lg font-medium text-gray-100">Straße, Hausnummer</label>
                    <div className="mt-1">
                        <input id="Adresse" name="Adresse" type="text" autoComplete="street-address" required className="" />
                    </div>
                </div>
                <div>
                    <label htmlFor="postal-code" className="block text-lg font-medium text-gray-100">PLZ</label>
                    <div className="mt-1">
                        <input id="postal-code" name="PLZ" type="text" autoComplete="postal-code" required className="" />
                    </div>
                </div>
                <div>
                    <label htmlFor="Ort" className="block text-lg font-medium text-gray-100">Ort</label>
                    <div className="mt-1">
                        <input id="Ort" name="Ort" type="text" autoComplete="address-level2" required className="" />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-100">Email Adresse</label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" autoComplete="email" required className="" />
                    </div>
                </div>
                <div>
                    <label htmlFor="mobil" className="block text-lg font-medium text-gray-100">Mobil</label>
                    <div className="mt-1">
                        <input id="mobil" name="mobil" type="text" autoComplete="tel" required className="" />
                    </div>
                </div>

                <div className="">
                    <label htmlFor="Klasse" className="block text-lg font-medium text-gray-100" >Führerscheinklasse Anmeldung</label>
                    <Select isMulti className="basic-multi-select"
                        classNamePrefix="select" options={anmeldung} name="Klasse" aria-label='Multiselect Dropdown'/>

                </div>
                <div>
                    <label htmlFor="Vorbesitz" className="block text-lg font-medium text-gray-100" >Führerschein Vorbesitz</label>
                    <Select isMulti className="basic-multi-select"
                        classNamePrefix="select" options={vorbesitz} name="Vorbesitz" aria-label='Multiselect Dropdown'/>
                </div>
            </div>
            <div>
                <label htmlFor="body" className="block text-lg font-medium text-gray-100 mt-4">Nachricht</label>
                <div className="mt-1">
                    <textarea id="body" name="body" rows={3} cols={20} className="" placeholder="Maximal 500 Wörter!" maxLength={500} />
                </div>
            </div>

            <div>
                <input
                    type="submit"
                    value="Absenden"
                    className="cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent rounded-2xl text-xl shadow-sm text-gray-100 font-medium text-brand-white bg-red-600 hover:bg-red-400 hover:rounded-lg transition-all duration-300  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                />
            </div>
        </form>
    )
}

export default Form