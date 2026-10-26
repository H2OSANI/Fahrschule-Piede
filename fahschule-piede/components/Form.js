import Select from 'react-select'
import React, { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
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
    const [selectedKlasse, setSelectedKlasse] = useState([])
    const [selectedVorbesitz, setSelectedVorbesitz] = useState([])
    const [turnstileToken, setTurnstileToken] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const form = useRef(null)
    const turnstileWidgetId = useRef(null)
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''

    const onChangeSelectionKlasse = (option) => {
        setSelectedKlasse((option || []).map((item) => item.value))
    }
    const onChangeSelectionVorbesitz = (option) => {
        setSelectedVorbesitz((option || []).map((item) => item.value))
    }

    const resetTurnstile = () => {
        setTurnstileToken('')
        if (typeof window !== 'undefined' && window.turnstile && turnstileWidgetId.current != null) {
            window.turnstile.reset(turnstileWidgetId.current)
        }
    }

    const renderTurnstile = () => {
        if (!siteKey || typeof window === 'undefined' || !window.turnstile) return
        const container = document.getElementById('turnstile-widget')
        if (!container || turnstileWidgetId.current != null) return
        turnstileWidgetId.current = window.turnstile.render(container, {
            sitekey: siteKey,
            callback: (token) => setTurnstileToken(token),
            'expired-callback': () => setTurnstileToken(''),
            'error-callback': () => setTurnstileToken(''),
        })
    }

    useEffect(() => {
        renderTurnstile()
    }, [siteKey])

    const uploadKontakt = async (event) => {
        event.preventDefault()
        if (submitting) return

        if (selectedKlasse.length === 0) {
            toast.error('Bitte mindestens eine Führerscheinklasse auswählen.')
            return
        }
        if (!siteKey) {
            toast.error('Bot-Schutz ist nicht konfiguriert.')
            return
        }
        if (!turnstileToken) {
            toast.error('Bitte die Bot-Prüfung abschließen.')
            return
        }

        const formData = new FormData(form.current)
        const payload = {
            Sex: formData.get('Sex') || '',
            Vorname: formData.get('Vorname') || '',
            Name: formData.get('Name') || '',
            Geburtsdatum: formData.get('Geburtsdatum') || '',
            Geburtsort: formData.get('Geburtsort') || '',
            Adresse: formData.get('Adresse') || '',
            PLZ: formData.get('PLZ') || '',
            Ort: formData.get('Ort') || '',
            email: formData.get('email') || '',
            mobil: formData.get('mobil') || '',
            body: formData.get('body') || '',
            website: formData.get('website') || '',
            Klasse: selectedKlasse,
            Vorbesitz: selectedVorbesitz,
            turnstileToken,
        }

        setSubmitting(true)
        try {
            const response = await fetch('/api/anmeldung', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
            const result = await response.json().catch(() => ({}))
            if (!response.ok) {
                toast.error(result.error || 'Überprüfe deine Angaben!')
                resetTurnstile()
                return
            }
            toast.success('Anmeldung versendet!')
            form.current?.reset()
            setSelectedKlasse([])
            setSelectedVorbesitz([])
            resetTurnstile()
        } catch {
            toast.error('Überprüfe deine Angaben!')
            resetTurnstile()
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <form className="mb-0 space-y-6 bg-box-blue" ref={form} onSubmit={uploadKontakt}>
            <Toaster position="top-center" reverseOrder={false} />
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                strategy="afterInteractive"
                onLoad={renderTurnstile}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="">
                    <label htmlFor="anrede" className="block text-lg font-medium text-gray-100">Anrede</label>
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
                    <label htmlFor="Klasse" className="block text-lg font-medium text-gray-100">Führerscheinklasse Anmeldung</label>
                    <Select
                        isMulti={true}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        options={anmeldung}
                        onChange={onChangeSelectionKlasse}
                        name="Klasse"
                        aria-label="Multiselect Dropdown"
                        value={anmeldung.filter((o) => selectedKlasse.includes(o.value))}
                    />
                </div>
                <div>
                    <label htmlFor="Vorbesitz" className="block text-lg font-medium text-gray-100">Führerschein Vorbesitz</label>
                    <Select
                        isMulti
                        className="basic-multi-select"
                        classNamePrefix="select"
                        options={vorbesitz}
                        onChange={onChangeSelectionVorbesitz}
                        name="Vorbesitz"
                        aria-label="Multiselect Dropdown"
                        value={vorbesitz.filter((o) => selectedVorbesitz.includes(o.value))}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="body" className="block text-lg font-medium text-gray-100 mt-4">Nachricht</label>
                <div className="mt-1">
                    <textarea id="body" name="body" rows={3} cols={20} className="" placeholder="Maximal 500 Wörter!" maxLength={500} />
                </div>
            </div>

            {/* Honeypot — leave empty. Hidden from real users. */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    left: '-10000px',
                    top: 'auto',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden',
                }}
            >
                <label htmlFor="website">Website</label>
                <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            <div id="turnstile-widget" className="flex justify-center" />

            <div>
                <input
                    type="submit"
                    value={submitting ? 'Wird gesendet…' : 'Absenden'}
                    disabled={submitting}
                    className="cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent rounded-2xl text-xl shadow-sm text-gray-100 font-medium text-brand-white bg-red-600 hover:bg-red-400 hover:rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 disabled:opacity-60 disabled:cursor-not-allowed"
                />
            </div>
        </form>
    )
}

export default Form
