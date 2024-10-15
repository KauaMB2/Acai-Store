import LandingPage from "./components/LandingPage"
import LocationModal from "./components/Modals/LocationModal"
import PaymentModal from "./components/Modals/PaymentModal"
import SideDishesModal from "./components/Modals/SideDishesModal"

const App=()=>{
  return (
    <>
      <LandingPage />
      <SideDishesModal />
      <LocationModal />
      <PaymentModal />
    </>
  )
}

export default App
