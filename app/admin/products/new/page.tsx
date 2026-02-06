import AddProductForm from '@/components/products/AddProductForm'
import Heading from '@/components/ui/Heading'
import React from 'react'

export default function page() {
  return (
    <>
      <Heading>New Product</Heading>

      <AddProductForm />
    </>
  )
}