import Link from "next/link";

type SearchResultsPaginationProps = {
    currentPage: number
    totalPages: number
    searchTerm: string
}

export default function SearchResultsPagination({ currentPage, totalPages, searchTerm } : SearchResultsPaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className='flex justify-center p-10'>
            { currentPage > 1 && 
                <Link
                    href={`/admin/products/search?search=${searchTerm}&page=${currentPage - 1}`}
                    className='bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-insert ring-gray-300 focus:z-20 focus:outline-offset-0'
                >
                    &laquo;
                </Link>
            }

            { pages.map(page => (
                <Link
                    key={page}
                    href={`/admin/products/search?search=${searchTerm}&page=${page}`}
                    className={`
                        bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-insert ring-gray-300 focus:z-20 focus:outline-offset-0
                        ${ page === currentPage && 'bg-indigo-200 font-black text-indigo-700' }
                    `}
                >
                    { page }
                </Link>
            ))}
            
            { currentPage < totalPages && 
                <Link
                    href={`/admin/products/search?search=${searchTerm}&page=${currentPage + 1}`}
                    className='bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-insert ring-gray-300 focus:z-20 focus:outline-offset-0'
                >
                    &raquo;
                </Link>
            }
        </nav>
    )
}
