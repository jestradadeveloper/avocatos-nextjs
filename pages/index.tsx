import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
//getServerSideProps
//getStaticProps
export const getStaticProps = async () => {
  const response = await fetch('https://avocatos-nextjs.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}
const HomePage = ({ productList }: { productList: TProduct[] }) => {
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
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
