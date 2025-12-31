import Link from 'next/link'
import { getProducts } from '@/services/product.service'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <h1>Product List</h1>

      <ul>
        {products.map(product  => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
