import prisma from "@/src/lib/prisma";

export default async function OrderSidebar() {
  const categories = await prisma.category.findMany();
  console.log(categories);

  return (
    <aside className="md:w-72 md:h-screen bg-white">
        OrderSidebar
    </aside>
  )
}