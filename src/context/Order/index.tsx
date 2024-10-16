import { createContext, useEffect, useState } from "react"
import { sideDishes } from "../../jsons"

interface OrderProps {
    totalPrice: number; 
    quantities: Array<number>;
    selectedCup:number;
    orderList: AcaiProps;
    absolutePrice:number;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
    setQuantities: React.Dispatch<React.SetStateAction<number[]>>;
    setSelectedCup: React.Dispatch<React.SetStateAction<number>>;
    setOrderList: React.Dispatch<React.SetStateAction<AcaiProps>>;
    setAbsolutePrice: React.Dispatch<React.SetStateAction<number>>;
}

interface AcaiProps{
    count:number;
    orders:Array<{
        selectedCup:number;
        totalPrice:number;
        quantity:number[];
    }>
}

const OrderContext = createContext<OrderProps>({} as OrderProps)

const OrderProvider = ({ children }: { children: React.ReactNode }) => {
    const [totalPrice, setTotalPrice]=useState<number>(0)
    const [quantities, setQuantities] = useState<Array<number>>(Array(sideDishes.length).fill(0))
    const [selectedCup, setSelectedCup] = useState<number>(-1)
    const [absolutePrice, setAbsolutePrice] = useState<number>(0)
    const [orderList, setOrderList] = useState<AcaiProps>({count:0, orders:[]})
    
    useEffect(()=>{
        console.log(quantities)
    }, [quantities])

    useEffect(()=>{
        console.log(orderList)
    }, [orderList])

    return (
        <OrderContext.Provider value={{ totalPrice, quantities, selectedCup, orderList, absolutePrice, setTotalPrice, setQuantities, setSelectedCup, setOrderList, setAbsolutePrice}}>
            {children}
        </OrderContext.Provider>
    )
}

export { OrderProvider, OrderContext }
