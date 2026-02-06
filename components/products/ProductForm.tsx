import prisma from "@/src/lib/prisma"

async function getCategories() {
    return await prisma.category.findMany()
}

export default async function ProductForm() {
    const categories = await getCategories();

    return (
        <>
            <div className="space-y-2">
                <label
                    className="text-slate-800 font-semibold"
                    htmlFor="name"
                >
                    Name:
                </label>

                <input
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full p-3 bg-slate-100 border border-gray-200"
                    placeholder="Product Name"
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800 font-semibold"
                    htmlFor="price"
                >
                    Price:
                </label>

                <input
                    id="price"
                    type="number"
                    step={0.01}
                    name="price"
                    className="block w-full p-3 bg-slate-100 border border-gray-200"
                    placeholder="Product Price"
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800 font-semibold"
                    htmlFor="categoryId"
                >
                    Category:
                </label>

                <select
                    className="block w-full p-3 bg-slate-100 border border-gray-200"
                    id="categoryId"
                    name="categoryId"
                >
                    <option value="">-- Select --</option>
                    { categories.map(category => (
                        <option 
                            key={category.id}
                            value={category.id}
                        >
                            { category.name }
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}