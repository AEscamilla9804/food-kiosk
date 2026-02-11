"use client"

import LatestOrderItem from "@/components/order/LatestOrderItem";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import useSWR from "swr";

export default function OrdersPage() {
    /** Fetch Orders Ready */
    const url = '/orders/api';
    const fetcher = () => fetch(url).then(res => res.json()).then(data => data);
    const { data, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 180000,
        revalidateOnFocus: false
    });

    if (isLoading) return <p>Loading...</p>
    if (data) return (
        <>
            <h1 className="text-center mt-12 text-6xl font-black">Orders Ready</h1>

            <Logo />

            { data.length ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto mt-10 px-5 pb-10">
                    { data.map(order => (
                        <LatestOrderItem 
                            key={order.id}
                            order={order}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center my-10">There are no orders ready</p>
            )}
        </>
    )
}