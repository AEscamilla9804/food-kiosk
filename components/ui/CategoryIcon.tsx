import Image from 'next/image'
import Link from 'next/link'
import { Category } from '@/src/generated/prisma/client'

type CategoryIconProps = {
    category: Category
}

export default function CategoryIcon({ category } : CategoryIconProps) {
    return (
        <div className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}>
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