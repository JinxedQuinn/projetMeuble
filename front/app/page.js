// page.js
import React from 'react';
import Link from 'next/link'; // Importer la fonction Link de Next.js
import MyComponent from './components/MyComponent'; // Importer le composant

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="text-center bg-white text-black p-2">Anciens Meubles pour une Nouvelle Vie</h1>
      </header>
      {/* Ajouter un lien vers la nouvelle page */}
      <Link href="/NewPage">
        Voir la nouvelle page
      </Link>
      <MyComponent />
    </main>
  );
}