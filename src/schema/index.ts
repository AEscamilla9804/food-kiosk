import { z } from 'zod'

export const OrderSchema = z.object({
    name: z.string()
        .min(1, 'Your name is required'),
    total: z.number()
        .min(1, 'There is something wrong with the order'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
});

export const OrderIdSchema = z.object({
    orderId: z.coerce.number()
});

export const SearchSchema = z.object({
    search: z.string()
        .trim()
        .min(1, { message: 'Search parameters cannot be empty' })
});

export const NewProductSchema = z.object({
    name: z.string()
        .trim()
        .min(1, { message: 'Product name is required'}),
    price: z.coerce.number()
        .min(1, { message: 'Invalid price'}),
    categoryId: z.coerce.number()
        .min(1, { message: 'Product category is required'}),
    image: z.string()
        .min(1, { message: 'Product image is required'})
});