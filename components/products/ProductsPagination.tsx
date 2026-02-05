import Link from 'next/link'

type ProductsPaginationProps = {
    currentPage: number
    totalPages: number
}

export default function ProductsPagination({ currentPage, totalPages } : ProductsPaginationProps) {
    return (
        <nav className='flex justify-center p-10'>
            { currentPage > 1 && 
                <Link
                    href={`/admin/products?page=${currentPage - 1}`}
                    className='bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-insert ring-gray-300 focus:z-20 focus:outline-offset-0'
                >
                    &laquo;
                </Link>
            }
            
            { currentPage < totalPages && 
                <Link
                    href={`/admin/products?page=${currentPage + 1}`}
                    className='bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-insert ring-gray-300 focus:z-20 focus:outline-offset-0'
                >
                    &raquo;
                </Link>
            }
        </nav>
    )
}