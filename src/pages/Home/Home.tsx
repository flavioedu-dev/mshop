import Purchases from '../../components/Purchases/Purchases'
import PurchaseButton from '../../components/PurchaseButton/PurchaseButton'
import { UseFetch } from '@/hooks/UseFetch'

const Home = () => {

  const data = UseFetch()

  console.log(data)

  return (
    <>
      <main>
        <Purchases />
        <PurchaseButton />
      </main>
    </>
  )
}

export default Home