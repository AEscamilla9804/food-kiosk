import AutoRefresh from '@/components/order/AutoRefresh';
import ProductCard from '@/components/products/ProductCard';
import Heading from '@/components/ui/Heading';
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
            <AutoRefresh />
            <Heading>Personalize your order</Heading>

            <div className='grid grid-cols-1 md:px-0 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-start'>
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