import React from 'react';
import Link from 'next/link';

export default function gridMeubles() {
    return (
        <grid>
            <div className='grid grid-cols-3 gap-4 m-3'>
                <div>
                    <Link href='/'>
                        <div className='border border-red-600'>
                            <div>
                                Blahaj
                                Requin Bleu
                                <img src="/blahaj.png" alt="Blahaj" />
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