"use client"

import { ChangeAvailability } from "@/actions/change-availability-action";
import { Product } from "@/src/generated/prisma/client";
import { DeleteProductSchema } from "@/src/schema";
import { toast } from "react-toastify";

type ChangeAvailabilityButtonProps = {
    product: Product
}

export default function ChangeAvailabilityButton({ product } : ChangeAvailabilityButtonProps) {
    const handleSetAsInactive = async () => {
        /** Client Side Validation */
        const result = DeleteProductSchema.safeParse({ id: product.id });

        if (!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message);
            });
        }

        const response = await ChangeAvailability(result.data);

        /** Server Side Response Validation */
        if (response?.errors) {
            response?.errors.forEach(issue => {
                toast.error(issue.message);
            });
        }

        /** Deletion Confirmation */
        toast.success('Product availability successfully changed');
    }

    return (
        <button 
            className={`
                ${ product.active 
                    ? "text-emerald-600 hover:text-emerald-700" 
                    : "text-red-500 hover:text-red-700"
                }
            `}
            onClick={handleSetAsInactive}    
        >
            { product.active ? 'Active' : 'Inactive' }
        </button>
    )
}
