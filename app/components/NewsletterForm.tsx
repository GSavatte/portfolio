'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setMessage('Merci ! Votre adresse a bien été ajoutée à la liste.');
        setEmail('');
      } else {
        throw new Error('Erreur API');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Oups, une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="mt-16 p-8 md:p-12 bg-zinc-900 rounded-3xl border border-zinc-800 text-center max-w-3xl mx-auto shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
        Ne manquez aucun post 📬
      </h2>
      <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
        Entrez votre adresse mail pour recevoir un mail
        à chaque fois que je publie un nouveau post.
      </p>

      {status === 'success' ? (
        <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded-xl font-medium inline-block">
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            disabled={status === 'loading'}
            className="flex-grow px-4 py-3 rounded-xl bg-black border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-colors disabled:opacity-50 flex items-center justify-center min-w-[140px]"
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                En cours...
              </span>
            ) : (
              "S'abonner"
            )}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="text-red-400 mt-4 text-sm">{message}</p>
      )}
    </div>
  );
}