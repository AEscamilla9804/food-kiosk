"use client"

import { Product } from "@/src/generated/prisma/client";
import { useStore } from "@/src/store";

type AddProductButtonProps = {
    product: Product
}

export default function AddProductButton({ product } : AddProductButtonProps) {
    const addToOrder = useStore((state) => state.addToOrder);
    return (
        <button
            type='button'
            className='mt-auto bg-emerald-600 hover:bg-emerald-700 text-xl text-white font-bold w-full p-3 uppercase cursor-pointer'
            onClick={() => addToOrder(product)}
        >
            Add to order
        </button>
    )
}