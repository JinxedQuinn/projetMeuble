import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <ul className='flex justify-between p-2 bg-gray-300'>
                <input className="input-wrapper" placeholder="Rechercher..." />
                <li><Link href="/about">Accueil</Link></li>
                <li><Link href="/registration">Inscription</Link></li>
                <li><Link href="/login">Connexion</Link></li>
                <li><Link href="/about">A Propos</Link></li>
            </ul>
        </nav>
    )
}