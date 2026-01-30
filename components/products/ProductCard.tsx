import { Product } from '@/src/generated/prisma/client'
import { formatCurrency } from '@/src/utils'
import Image from 'next/image'
import React from 'react'

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product } : ProductCardProps) {
    
    return (
        <div className='bg-white border flex flex-col h-full'>
            <Image
                src={`/products/${product.image}.jpg`}
                alt={`${product.name} image`}
                width={400}
                height={500}
                className='object-cover'
            />

            <div className='flex flex-col gap-4 p-5 flex-1'>
                <h3 className='text-[1.35rem] font-bold line-clamp-2'>{ product.name }</h3>

                <p className='font-black text-[2rem] text-amber-500'>
                    { formatCurrency(product.price) }
                </p>

                <button
                    type='button'
                    className='mt-auto bg-emerald-600 hover:bg-emerald-700 text-xl text-white font-bold w-full p-3 uppercase cursor-pointer'
                >
                    Add to order
                </button>
            </div>
        </div>
    )
}
