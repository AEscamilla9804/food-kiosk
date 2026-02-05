import ProductSearchForm from '@/components/products/ProductSearchForm';
import ProductsPagination from '@/components/products/ProductsPagination';
import ProductsTable from '@/components/products/ProductsTable';
import Heading from '@/components/ui/Heading'
import prisma from '@/src/lib/prisma'
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function productCount() {
  return await prisma.product.count()
}

async function getProducts(currentPage: number, pageSize: number) {
  const skip = (currentPage - 1) * pageSize;

  /** Fetch Products */
  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true
    }
  });

  return products
}

export default async function ProductsPage({ searchParams } : { searchParams : { page: string }}) {
  const currentPage = Number(searchParams.page) || 1;
  const pageSize = 10;

  if (currentPage < 0 ) redirect('/admin/products')

  /** Parallel Consults */
  const productsData = getProducts(currentPage, pageSize);
  const totalProductsData = productCount();
  const [ products, totalProducts ]  = await Promise.all([productsData, totalProductsData]);
  const totalPages = Math.ceil(totalProducts / pageSize);

  if (currentPage > totalPages) redirect('/admin/products');

  return (
    <>
        <Heading>Manage your Products</Heading>

        <div className='flex flex-col gap-5 lg:flex-row lg:justify-between'>
          <Link
            href={'/admin/products/new'}
            className='bg-amber-500 text-white w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'
          >
            Add Product
          </Link>

          <ProductSearchForm />
        </div>

        <ProductsTable 
          products={products}
        />

        <ProductsPagination 
          currentPage={currentPage}
          totalPages={totalPages}
        />
    </>
  )
}