import { createContext, useState } from "react"
import { sideDishes } from "../../jsons"

interface OrderProps {
    totalPrice: number; 
    quantities: Array<number>;
    selectedCup:number;
    acaiCount: number;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
    setQuantities: React.Dispatch<React.SetStateAction<number[]>>;
    setSelectedCup: React.Dispatch<React.SetStateAction<number>>;
    setAcaiCount: React.Dispatch<React.SetStateAction<number>>;
  }

const OrderContext = createContext<OrderProps>({} as OrderProps)

const OrderProvider = ({ children }: { children: React.ReactNode }) => {
    const [totalPrice, setTotalPrice]=useState<number>(0)
    const [quantities, setQuantities] = useState<Array<number>>(Array(sideDishes.length).fill(0))
    const [selectedCup, setSelectedCup] = useState<number>(-1)
    const [acaiCount, setAcaiCount] = useState<number>(0)
    
    return (
        <OrderContext.Provider value={{ totalPrice, quantities, selectedCup, acaiCount, setTotalPrice, setQuantities, setSelectedCup, setAcaiCount}}>
            {children}
        </OrderContext.Provider>
    )
}

export { OrderProvider, OrderContext }
