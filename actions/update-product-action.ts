"use server"

import prisma from "@/src/lib/prisma"
import { NewProductSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";

export async function updateProduct(data: unknown, id: number) {
    // Server Side Validation
    const result = NewProductSchema.safeParse(data);

    if (!result.success) {
        return {
            errors: result.error.issues
        }
    }

    await prisma.product.update({
        where: {
            id
        },
        data: result.data
    });

    revalidatePath('/admin/products');
}