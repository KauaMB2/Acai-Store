import LandingPage from "./components/LandingPage"
import LocationModal from "./components/Modals/LocationModal"
import PaymentModal from "./components/Modals/PaymentModal"
import ShoppingCartModal from "./components/Modals/ShoppingCartModal"
import SideDishesModal from "./components/Modals/SideDishesModal"

const App=()=>{
  return (
    <>
      <LandingPage />
      <SideDishesModal />
      <LocationModal />
      <PaymentModal />
      <ShoppingCartModal />
    </>
  )
}

export default App
