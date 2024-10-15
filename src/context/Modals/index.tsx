import { createContext, useState } from "react"

interface ModalsProps {
    isSideDishesModalOn: boolean;
    isLocationModalOn: boolean;
    isPaymentModalOn: boolean;
    isShoppingCartModalOn: boolean;
    setIsSideDishesModalOn: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLocationModalOn: React.Dispatch<React.SetStateAction<boolean>>;
    setIsPaymentModalOn: React.Dispatch<React.SetStateAction<boolean>>;
    setIsShoppingCartModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalsContext = createContext<ModalsProps>({} as ModalsProps)

const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
    const [isSideDishesModalOn, setIsSideDishesModalOn]=useState<boolean>(false)
    const [isLocationModalOn, setIsLocationModalOn]=useState<boolean>(false)
    const [isPaymentModalOn, setIsPaymentModalOn]=useState<boolean>(false)
    const [isShoppingCartModalOn, setIsShoppingCartModalOn]=useState<boolean>(false)
    
    return (
        <ModalsContext.Provider value={{ isSideDishesModalOn, isLocationModalOn, isPaymentModalOn, isShoppingCartModalOn, setIsSideDishesModalOn, setIsLocationModalOn,setIsPaymentModalOn, setIsShoppingCartModalOn }}>
            {children}
        </ModalsContext.Provider>
    )
}

export { ModalsProvider, ModalsContext }
