import prisma from "@/src/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";

export default async function OrderSidebar() {
  const categories = await prisma.category.findMany();

  return (
    <aside className="md:w-72 md:h-screen bg-white">
        <nav className="mt-10">
          { categories.map(category => (
            <CategoryIcon 
              key={category.id}
              category={category}
            />
          ))}
        </nav>
    </aside>
  )
}