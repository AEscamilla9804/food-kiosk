import { ProductWithCategory } from '@/src/types'
import { formatCurrency } from '@/src/utils'
import Link from 'next/link'
import ChangeAvailabilityButton from './ChangeAvailabilityButton'

type ProductsTableProps = {
    products: ProductWithCategory[]
}

export default function ProductsTable({ products } : ProductsTableProps) {
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-10">
            <div className="mt-8 flow-root ">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 ">
                        <table className="min-w-full divide-y divide-gray-300 ">
                            <thead>
                                <tr>
                                    <th scope="col" className="w-1/2 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Product
                                    </th>

                                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                        Price
                                    </th>

                                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                        Category
                                    </th>

                                    <th scope="col" className="text-center text-sm py-3.5">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                { products.map(product => (
                                    <tr
                                        key={product.id}
                                    >
                                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            { product.name }
                                        </td>

                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                                            { formatCurrency(product.price) }
                                        </td> 

                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                                            { product.category.name }
                                        </td>

                                        <td className="py-4">
                                            <div className='flex flex-col md:flex-row h-full items-center justify-center gap-3 md:gap-4'>
                                                <Link
                                                    href={`/admin/products/${product.id}/edit`}
                                                    className='text-indigo-600 hover:text-indigo-800'
                                                >
                                                    Edit <span className='sr-only'>, { product.name }</span>
                                                </Link>

                                                <ChangeAvailabilityButton 
                                                    product={product}
                                                />
                                            </div>
                                            
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}