export default function SongResult({ result, onReset }) {
  if (!result) return null

  return (
    <div className="mt-8 bg-slate-800/50 border border-blue-500/20 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{result.title}</h3>
        <button onClick={onReset} className="text-sm text-blue-300 hover:text-white">Neuen Song erstellen</button>
      </div>

      <div className="prose prose-invert max-w-none">
        {result.lyrics.map((line, idx) => (
          line === '' ? <hr key={idx} className="my-4 border-blue-500/20" /> :
          <p key={idx} className="text-blue-100 leading-relaxed">{line}</p>
        ))}
      </div>
    </div>
  )
}
