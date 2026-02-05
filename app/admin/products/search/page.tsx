import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductsTable from "@/components/products/ProductsTable";
import SearchResultsPagination from "@/components/products/SearchResultsPagination";
import Heading from "@/components/ui/Heading";
import prisma from "@/src/lib/prisma";

async function searchProductsCount(searchTerm: string) {
    const productCount = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        }
    })

    return productCount.length
}

async function searchProducts(searchTerm: string, currentPage: number, pageSize: number) {
    const skip = (currentPage - 1) * pageSize;

    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        },
        take: pageSize,
        skip
    });

    return products
}

export default async function page({ searchParams } : { searchParams : { search: string, page: string } }) {
    /** User Search Recovery */
    const search = searchParams.search;
    const currentPage = Number(searchParams.page) || 1;
    const pageSize = 10;

    const productsData = searchProducts(search, currentPage, pageSize);
    const totalProductsData = searchProductsCount(search);
    const [ products, totalProducts ] = await Promise.all([productsData, totalProductsData]);
    const totalPages = Math.ceil(totalProducts / pageSize);

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

            <SearchResultsPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                searchTerm={search}
            />
        </>
    )
}