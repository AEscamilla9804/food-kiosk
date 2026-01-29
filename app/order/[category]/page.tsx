import { Category } from '@/src/generated/prisma/client';

export default function page({ params } : { params: { category: Category['slug'] } }) {
    console.log(params);

    return (
        <div>Category Products</div>
    )
}