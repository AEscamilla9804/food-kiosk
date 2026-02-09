import prisma from '@/src/lib/prisma'
import { notFound } from 'next/navigation'

async function getProductById(id: number) {
    const product =  await prisma.product.findUnique({
        where: {
            id
        }
    })

    if (!product) notFound()

    return product
}

export default async function EditProductsPage({ params } : { params: { id: string } }) {
    const productId = Number(params.id);
    const product = await getProductById(productId);

    return (
        <div>page</div>
    )
}