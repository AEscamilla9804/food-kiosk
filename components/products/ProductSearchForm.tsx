"use client"

import { SearchSchema } from "@/src/schema"
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export default function ProductSearchForm() {
    const handleSearchForm = async (formData: FormData) => {
        const data = {
            search: formData.get('search')!
        }

        /** Client Side Validation */
        const result = SearchSchema.safeParse(data);

        if (!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message);
            });

            return
        }

        /** Redirect User */
        redirect(`/admin/products/search?search=${result.data.search}`);
    }

    return (
        <form 
            action={handleSearchForm}
            className='flex items-center'
        >
            <input 
                type="text" 
                placeholder='Search Product'
                className='p-2 placeholder-gray-400 w-full border border-gray-200'
                name='search'
            />

            <input 
                type="submit" 
                value="Search" 
                className='bg-indigo-600 p-2 uppercase text-white cursor-pointer font-bold'
            />
        </form>
    )
}