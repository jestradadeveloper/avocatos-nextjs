import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
const HomePage = () => {
  const [productList, setproductList] = useState<TProduct[]>([])
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setproductList(data)
      })
  }, [])
  return (
    <Layout>
      <KawaiiHeader />
      <section>
        <Link href="/yes-or-no">
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </section>
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
          margin-top: 5px;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
