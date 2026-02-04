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

  console.log(JSON.stringify(orders, null, 2));

  return (
    <>
        <Heading>
            Manage your Orders
        </Heading>
    </>
  )
}
