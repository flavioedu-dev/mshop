import Purchases, { PurchaseType } from '../../components/Purchases/Purchases'
import PurchaseButton from '../../components/PurchaseButton/PurchaseButton'
import { UseFetch } from '@/hooks/UseFetch'
import { useEffect } from 'react'

const url = "https://localhost:7047/api/Purchase"

const Home = () => {

  const { data, httpConfig } = UseFetch(url)

  useEffect(() => {
    httpConfig()
  }, [])
  
  const purchasesList = data as unknown as PurchaseType[]

  return (
    <>
      <main>
        {purchasesList && (
          <Purchases purchases={purchasesList} />
        )}
        <PurchaseButton />
      </main>
    </>
  )
}

export default Home