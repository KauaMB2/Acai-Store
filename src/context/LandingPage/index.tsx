import { createContext } from "react";

interface LandingPageProps {
    currentDay: string;
}

const LandingPageContext = createContext<LandingPageProps>({} as LandingPageProps)

const LandingPageProvider = ({ children }: { children: React.ReactNode }) => {
    const daysOfWeek: string[] = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const currentDay: string = daysOfWeek[(new Date()).getDay()]
    return (
        <LandingPageContext.Provider value={{ currentDay }}>
            {children}
        </LandingPageContext.Provider>
    )
}

export { LandingPageProvider, LandingPageContext }
