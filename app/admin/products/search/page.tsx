import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import prisma from "@/src/lib/prisma";

async function searchProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    });

    return products
}

export default async function page({ searchParams } : { searchParams : { search: string } }) {
    /** User Search Recovery */
    const search = searchParams.search;
    const products = await searchProducts(search);
    console.log(products);

    return (
        <>
            <Heading>Search Results: {search}</Heading>

            <div className='flex flex-col gap-5 lg:flex-row lg:justify-end'>
                <ProductSearchForm />
            </div>

            { products.length ? (
                <ProductsTable 
                    products={products}
                />
            ) : (
                <p className="mt-28 lg:mt-64 text-center text-3xl font-bold">
                    The search did not return any results.
                </p>
            )}
        </>
    )
}