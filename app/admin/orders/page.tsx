import OrderCard from '@/components/order/OrderCard';
import Heading from '@/components/ui/Heading'
import prisma from '@/src/lib/prisma'

export default async function OrdersPage() {
  /** Fetch Pending Orders */
  const orders = await prisma.order.findMany({
    where: {
      status: false
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  });

  return (
    <>
        <Heading>Manage your Orders</Heading>

        { orders.length ? (
          <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap- mt-5'>
            { orders.map(order => (
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
