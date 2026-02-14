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
        <Link
            href={`/order/${category.slug}`}
            className={`
                flex items-center gap-5 w-full border-t border-gray-200 p-3 last:border-b transition
                ${ category.slug === params.category
                    ? "bg-amber-400 hover:bg-amber-400"
                    : "hover:bg-amber-100"
                }
            `}
        >
            <div className="relative size-12">
                <Image
                    src={`/icon_${category.slug}.svg`}
                    alt={`Category image for: ${category.name}`}
                    fill
                />
            </div>

            <span className="text-xl font-bold">
                {category.name}
            </span>
        </Link>
    )
}