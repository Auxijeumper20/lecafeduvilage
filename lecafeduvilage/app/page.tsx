export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">

      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-stone-800">
        <h1 className="text-2xl font-bold tracking-widest uppercase text-amber-400">
          Le Café du Village
        </h1>
        <nav className="flex gap-6 text-sm text-stone-300">
          <a href="#menu" className="hover:text-amber-400 transition">Menu</a>
          <a href="#reservation" className="hover:text-amber-400 transition">Réserver</a>
          <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
        <p className="text-amber-400 text-sm tracking-widest uppercase mb-4">Bienvenue</p>
        <h2 className="text-5xl font-bold mb-6">Une cuisine du terroir,<br/>au cœur du village</h2>
        <p className="text-stone-400 max-w-xl mb-10">
          Ouvert du mardi au dimanche, midi et soir. Produits frais, ambiance chaleureuse.
        </p>
        <a href="#reservation"
          className="bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-full hover:bg-amber-300 transition">
          Réserver une table
        </a>
      </section>

      {/* MENU */}
      <section id="menu" className="px-8 py-20 bg-stone-900">
        <h3 className="text-3xl font-bold text-center mb-12">Notre Menu</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { nom: "Soupe à l'oignon", desc: "Gratinée au comté", prix: "9€" },
            { nom: "Entrecôte", desc: "Frites maison, sauce au poivre", prix: "24€" },
            { nom: "Tarte Tatin", desc: "Crème fraîche maison", prix: "8€" },
          ].map((plat) => (
            <div key={plat.nom} className="bg-stone-800 rounded-2xl p-6">
              <h4 className="text-xl font-semibold">{plat.nom}</h4>
              <p className="text-stone-400 mt-2 text-sm">{plat.desc}</p>
              <p className="text-amber-400 font-bold mt-4">{plat.prix}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESERVATION */}
      <section id="reservation" className="px-8 py-20 text-center">
        <h3 className="text-3xl font-bold mb-4">Réserver une table</h3>
        <p className="text-stone-400 mb-8">Appelez-nous ou envoyez-nous un message</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+33600000000"
            className="bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-full hover:bg-amber-300 transition">
            📞 Appeler
          </a>
          <a href="https://wa.me/33600000000"
            className="border border-amber-400 text-amber-400 font-bold px-8 py-4 rounded-full hover:bg-amber-400 hover:text-stone-950 transition">
            💬 WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-stone-600 text-sm border-t border-stone-800">
        © 2025 Le Café du Village — Tous droits réservés
      </footer>

    </main>
  )
}