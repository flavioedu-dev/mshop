import Purchases, { PurchaseType } from '../../components/Purchases/Purchases'
import PurchaseButton from '../../components/PurchaseButton/PurchaseButton'
import { UseFetch } from '@/hooks/UseFetch'
import { useEffect } from 'react'
import Loading from '@/components/Loading/Loading'
import Header from '@/components/Header/Header'

const url = "https://localhost:7047/api/Purchase"

const Home = () => {

  const { data, httpConfig } = UseFetch(url)

  useEffect(() => {
    httpConfig()
  }, [])
  
  const purchasesList = data as unknown as PurchaseType[]

  return (
    <>
      <Header pageTitle='Compras' />
      <main>
        {purchasesList ? (
          <>
            <Purchases purchases={purchasesList} />
            <PurchaseButton />
          </>
        ) : (
            <Loading />
        )}
      </main>
    </>
  )
}

export default Home