export type Product = {
  id: number
  title: string
  price: number
  description: string
  image: string
}

/**
 * Fetch list product - SSR
 */
export async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store', // SSR mỗi request
  })

  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }

  return res.json()
}

export async function getProductById(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: 'no-store', // SSR
  })

  if (!res.ok) {
    throw new Error('Failed to fetch product')
  }

  return res.json()
}
