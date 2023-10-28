import './App.css'
import Header from './components/Header/Header'
import PurchaseButton from './components/PurchaseButton/PurchaseButton'
import Purchases from './components/Purchases/Purchases'

function App() {

  return (
    <>
      <Header />
      <main>
        <Purchases />
        <PurchaseButton />
      </main>

    </>
  )
}

export default App
