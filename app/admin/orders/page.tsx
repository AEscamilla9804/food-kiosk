"use client"

import useSWR  from 'swr'
import OrderCard from '@/components/order/OrderCard'
import Heading from '@/components/ui/Heading'
import { OrderWithProducts } from '@/src/types';

export default function OrdersPage() {
  /** Fetch Pending Orders (SWR) */
  const url = '/admin/orders/api';
  const fetcher = () => fetch(url).then(res => res.json()).then(data => data);
  const { data, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false
  });

  if (isLoading) return <p>Loading...</p>
  if (data) return (
    <>
        <Heading>Manage your Orders</Heading>

        { data.length ? (
          <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5'>
            { data.map(order => (
              <OrderCard 
                key={order.id}
                order={order}
              />
            ))}
          </div>
        ) : (
          <p className="flex items-center justify-center h-[75%] text-3xl text-center font-bold">
            There are no pending orders
          </p>
        )}
    </>
  )
}
