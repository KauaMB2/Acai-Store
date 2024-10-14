import { createContext, useState } from "react";

interface LandingPageProps {
    currentDay: string;
}

const LandingPageContext = createContext<LandingPageProps>({} as LandingPageProps);

const LandingPageProvider = ({ children }: { children: React.ReactNode }) => {
    const daysOfWeek: string[] = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const today: Date = new Date();
    const [currentDay, _] = useState<string>(daysOfWeek[today.getDay()]);

    return (
        <LandingPageContext.Provider value={{ currentDay }}>
            {children}
        </LandingPageContext.Provider>
    );
}

export { LandingPageProvider, LandingPageContext };
