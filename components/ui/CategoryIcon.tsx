"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Category } from '@/src/generated/prisma/client'

type CategoryIconProps = {
    category: Category
}

export default function CategoryIcon({ category } : CategoryIconProps) {
    /** Isolationg the category */
    const params = useParams<{ category: Category['slug'] }>();

    return (
        <div 
            className={`
                flex items-center gap-5 w-full border-t border-gray-200 p-3 last-of-type:border-b
                ${ category.slug === params.category
                    ? 'bg-amber-400 hover:bg-amber-400'
                    : 'hover:bg-amber-100'
                }
            `}
        >
            <div className='relative size-12'>
                <Image 
                    src={`/icon_${category.slug}.svg`}
                    alt={`Catgory image for: ${category.name}`}
                    fill
                />
            </div>

            <Link 
                className='text-xl font-bold'
                href={`/order/${category.slug}`}
            >
                { category.name }
            </Link>
        </div>
    )
}