import { useState } from 'react'
import GeneratorForm from './components/GeneratorForm'
import SongResult from './components/SongResult'

function App() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onGenerate = async (payload) => {
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${backend}/api/songs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      setResult(data)
    } catch (e) {
      setResult({ title: 'Fehler', lyrics: [e.message] })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">KI Geburtstagssong Generator</h1>
            <p className="text-blue-200 mt-2">Personalisierte Lyrics in Sekunden – wähle Stil, Sprache und Tempo.</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 shadow-xl">
            <GeneratorForm onGenerate={onGenerate} loading={loading} />
            <SongResult result={result} onReset={()=>setResult(null)} />
          </div>

          <div className="text-center mt-6 text-blue-300/70 text-sm">
            Tipp: Du kannst den Text kopieren und in jeder Musik-App vertonen.
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
