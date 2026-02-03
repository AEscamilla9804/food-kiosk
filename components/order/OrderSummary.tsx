"use client"

import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from "@/src/utils";
import { createOrder } from "@/actions/create-order-action";
import { OrderSchema } from "@/src/schema";
import { toast } from "react-toastify";

export default function OrderSummary() {
  const order = useStore((state) => state.order);
  const clearOrder = useStore((state) => state.clearOrder);
  const orderTotal = useMemo(() => order.reduce((total, item) => total + item.subtotal, 0), [order]);

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      total: orderTotal,
      order
    }

    /** Client Side Validation */
    const result = OrderSchema.safeParse(data);
    
    if (!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message);
      });

      return
    }

    const response = await createOrder(data);
    
    if (response?.errors) {
      response?.errors.forEach(issue => {
        toast.error(issue.message);
      });
    }

    /** Order Confirmation */
    toast.success('Order received correctly');
    clearOrder();
  }

  return (
    <aside className="md:h-screen md:overflow-y-auto md:w-64 lg:w-96 p-5">
        <h1 className="text-4xl text-center font-black">My Order</h1>

        { order.length === 0 ? (
          <p className="text-center my-10">The order is empty</p>
        ) : (
          <div className="mt-5">
            { order.map(item => (
              <ProductDetails 
                key={ item.id }
                item={item}
              />
            ))}

            <p className="text-2xl mt-10 text-center">
              Total: {''}
              <span className="font-bold">
                { formatCurrency(orderTotal) }
              </span>
            </p>

            <form 
              className="w-full mt-10 space-y-5"
              action={handleCreateOrder}
            >
              <input 
                type="text" 
                placeholder="Your name"
                className="bg-white border border-gray-200 p-2 w-full"
                name="name"
              />

              <input 
                type="submit"
                className="p-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold"  
                value="Confirm Order"
              />
            </form>
          </div>
        )}
    </aside>
  )
}
