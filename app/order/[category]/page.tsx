import ProductCard from '@/components/products/ProductCard';
import { Category } from '@/src/generated/prisma/client';
import prisma from '@/src/lib/prisma';

export default async function page({ params } : { params: { category: Category['slug'] } }) {
    /** Isolate category */
    const category = params.category;

    /** Obtain products by category */
    const products = await prisma.product.findMany({
        where: {
            category: {
                slug: category
            }
        }
    });

    return (
        <>
            <h1 className='text-3xl my-10 font-bold'>
                Personalize your order
            </h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start'>
                { products.map(product => (
                    <ProductCard
                        key={ product.id }
                        product={ product }
                    />
                ))}
            </div>
        </>
    )
}