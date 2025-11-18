import { useState } from 'react'

const styles = [
  { value: 'pop', label: 'Pop' },
  { value: 'rock', label: 'Rock' },
  { value: 'hiphop', label: 'Hip-Hop' },
  { value: 'ballad', label: 'Ballade' },
]

const tempos = [
  { value: 'slow', label: 'Langsam' },
  { value: 'medium', label: 'Mittel' },
  { value: 'fast', label: 'Schnell' },
]

export default function GeneratorForm({ onGenerate, loading }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [relation, setRelation] = useState('')
  const [style, setStyle] = useState('pop')
  const [language, setLanguage] = useState('de')
  const [tempo, setTempo] = useState('medium')

  const submit = (e) => {
    e.preventDefault()
    const payload = {
      name,
      age: age ? Number(age) : undefined,
      relation: relation || undefined,
      style,
      language,
      tempo,
    }
    onGenerate(payload)
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-blue-200 mb-1">Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} required className="w-full bg-slate-900/50 border border-blue-500/30 rounded-lg px-3 py-2 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="z.B. Lea" />
        </div>
        <div>
          <label className="block text-sm text-blue-200 mb-1">Alter (optional)</label>
          <input type="number" min="0" max="130" value={age} onChange={(e)=>setAge(e.target.value)} className="w-full bg-slate-900/50 border border-blue-500/30 rounded-lg px-3 py-2 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="z.B. 30" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-blue-200 mb-1">Beziehung (optional)</label>
          <input value={relation} onChange={(e)=>setRelation(e.target.value)} className="w-full bg-slate-900/50 border border-blue-500/30 rounded-lg px-3 py-2 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Freund/in, Mama, Kollege..." />
        </div>
        <div>
          <label className="block text-sm text-blue-200 mb-1">Sprache</label>
          <select value={language} onChange={(e)=>setLanguage(e.target.value)} className="w-full bg-slate-900/50 border border-blue-500/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="de">Deutsch</option>
            <option value="en">Englisch</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-blue-200 mb-1">Stil</label>
          <select value={style} onChange={(e)=>setStyle(e.target.value)} className="w-full bg-slate-900/50 border border-blue-500/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            {styles.map(s=> <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm text-blue-200 mb-1">Tempo</label>
          <select value={tempo} onChange={(e)=>setTempo(e.target.value)} className="w-full bg-slate-900/50 border border-blue-500/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            {tempos.map(t=> <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </div>
      </div>

      <button disabled={loading} type="submit" className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-semibold py-2 px-4 rounded-lg shadow">
        {loading ? 'Erzeuge Song...' : 'Song generieren'}
      </button>
    </form>
  )
}
