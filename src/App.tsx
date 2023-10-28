import './App.css'
import Footer from './components/Footer/Footer'
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
      <Footer />

    </>
  )
}

export default App
