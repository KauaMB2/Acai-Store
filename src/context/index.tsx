import { LandingPageProvider } from "./LandingPage"
import { ModalsProvider } from "./Modals"
import { OrderProvider } from "./Order"

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <LandingPageProvider>
            <ModalsProvider>
                <OrderProvider>
                    {children}
                </OrderProvider>
            </ModalsProvider>
        </LandingPageProvider>
    )
}

export default AppProvider;
