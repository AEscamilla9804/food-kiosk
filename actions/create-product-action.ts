"use server"

import prisma from "@/src/lib/prisma";
import { NewProductSchema } from "@/src/schema"

export async function createProduct(data: unknown) {
    // Server Side Validation
    const result = NewProductSchema.safeParse(data);

    if (!result.success) {
        return {
            errors: result.error.issues
        }
    }

    await prisma.product.create({
        data: result.data
    })
}