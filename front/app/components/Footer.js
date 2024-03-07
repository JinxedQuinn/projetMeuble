import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="absolute bottom-0 w-full bg-blue-500 flex justify-between items-center">
            <div className="flex items-center">
                <img src="/canape.svg" className='w-7 inline-block m-2 text-white filter invert(100%)' alt="Canapé SVG" />
                <p className='inline-block text-white'>AMPUNV</p>
            </div>
            <div>
                <a href="https://www.ikea.com/fr/fr/customer-service/terms-conditions/mentions-legales-pub5414a56b" className="text-white mx-2 md:mx-4">Mentions Légales</a>
            </div>
            <div>
                <a href="https://www.ikea.com/fr/fr/customer-service/privacy-policy/" className="text-white mx-2 md:mx-4">RGPD</a>
            </div>
            <div className='flex'>
                <div>
                    <a href="https://www.facebook.com/ikea" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.svg" className='w-7 inline-block m-2 text-white filter invert(100%)' alt="Facebook" />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/ikea" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.svg" className='w-7 inline-block m-2 text-white filter invert(100%)' alt="Instagram" />
                    </a>
                </div>
                <div>
                    <a href="https://www.pinterest.com/ikea" target="_blank" rel="noopener noreferrer">
                        <img src="/pinterest.svg" className='w-7 inline-block m-2 text-white filter invert(100%)' alt="Pinterest" />
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/ikea" target="_blank" rel="noopener noreferrer">
                        <img src="/twitter.svg" className='w-7 inline-block m-2 text-white filter invert(100%)' alt="Twitter" />
                    </a>
                </div>
                <div>
                    <a href="https://www.youtube.com/user/IKEAUSA" target="_blank" rel="noopener noreferrer">
                        <img src="/youtube.svg" className='w-7 inline-block m-2 text-white filter invert(100%)' alt="Youtube" />
                    </a>
                </div>
            </div>
        </footer>
    )
}