"use client"

import { completeOrder } from '@/actions/complete-order-action'
import { mutate } from 'swr'
import { useTransition } from 'react'
import { toast } from 'react-toastify'

type CompleteOrderButtonProps = {
    orderId: number
}

export default function CompleteOrderButton({ orderId } : CompleteOrderButtonProps) {
    const [isPending, startTransition] = useTransition();

    const handleCompleteOrder = () => {
        startTransition( async () => {
            await completeOrder(orderId);
            mutate('/admin/orders/api');
            toast.success('Order completed');
        });
    }

    return (
        <button
            onClick={handleCompleteOrder}
            disabled={isPending}
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer disabled:opacity-50"
        >
            { isPending ? "Updating..." : "Mark Order as Completed" }
        </button>
    )
}