import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Head>
        <title>W cieniu gry – Ebook</title>
        <meta name="description" content="Psychologiczny thriller z duchowym przesłaniem – kup teraz" />
      </Head>

      <header className="bg-black text-white p-6 text-center">
        <h1 className="text-3xl font-bold">W cieniu gry</h1>
        <p className="mt-2 text-lg italic">Nie zaufasz już własnym myślom…</p>
      </header>

      <main className="p-6 max-w-3xl mx-auto text-center">
        <Image src="/mockup-w-cieniu-gry.png" alt="Mockup ebooka" width={600} height={400} className="mx-auto rounded-lg" />
        <h2 className="text-2xl font-semibold mt-8">Kup ebook za 29 zł</h2>
        <p className="mt-4 text-md">Przelej BLIK na numer <strong>739 091 170</strong>, a następnie podaj swój e-mail:</p>

        <form className="mt-6" method="POST" action="/api/sendEbook">
          <input type="email" name="email" required placeholder="Twój e-mail" className="p-2 border rounded w-full max-w-md mx-auto block" />
          <button type="submit" className="mt-4 bg-black text-white px-6 py-2 rounded">Wyślij ebook</button>
        </form>

        <p className="mt-6 text-sm text-gray-500">Po opłaceniu i podaniu maila otrzymasz ebook automatycznie.</p>
      </main>

      <footer className="text-center py-6 text-sm text-gray-600">
        &copy; 2025 Hubert Niedziałek
      </footer>
    </div>
  )
}
