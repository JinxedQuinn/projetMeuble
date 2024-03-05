import Link from 'next/link';

export default function gridMeubles() {
    return (
        <grid>
            <div className='grid grid-cols-3 gap-4 m-3'>
                <div>
                    <Link href='/meubles/1'>
                        <div className='border border-red-600'>
                            <div>
                                Blahaj
                                Requin Bleu
                            </div>
                        </div>
                    </Link>
                    <button>
                        Ajout au panier
                    </button>
                </div>
            </div>
        </grid>
    )
}