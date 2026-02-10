"use server"

import prisma from "@/src/lib/prisma"
import { DeleteProductSchema } from "@/src/schema"
import { revalidatePath } from "next/cache";

export async function ChangeAvailability(data: unknown) {
    /** Server Side Validation */
    const result = DeleteProductSchema.safeParse(data);

    if (!result.success) {
        return {
            errors: result.error.issues
        }
    }

    const product = await prisma.product.findUnique({
        where: {
            id: result.data.id
        },
        select: {
            active: true
        }
    });

    await prisma.product.update({
        where: {
            id: result.data.id
        },
        data: { active: !product?.active }
    });

    revalidatePath('/admin/products');
    revalidatePath('/order/products');
}