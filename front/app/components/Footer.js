import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-blue-700 absolute bottom-0 w-full">
            <div>
                <img src="/canape.svg" className='w-7 inline-block m-2 filter invert(100%)' alt="Canapé SVG" />
                <p className='inline-block text-white'>AMPUNV</p>
            </div>
        </footer>
    )
}
