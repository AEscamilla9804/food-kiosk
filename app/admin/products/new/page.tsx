import AddProductForm from '@/components/products/AddProductForm'
import ProductForm from '@/components/products/ProductForm'
import Heading from '@/components/ui/Heading'
import React from 'react'

export default function page() {
  return (
    <>
      <Heading>New Product</Heading>

      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  )
}