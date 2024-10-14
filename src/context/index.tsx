import { LandingPageProvider } from "./LandingPage"

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <LandingPageProvider>
            {children}
        </LandingPageProvider>
    )
}

export default AppProvider;
