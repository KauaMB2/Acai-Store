import { useContext } from "react"
import Title from "../Titles"
import clockIcon from "./../../assets/icons/clock.svg"
import "./style.css"
import { LandingPageContext } from "../../context/LandingPage"

const Hours = () => {
  const { currentDay } = useContext(LandingPageContext)
  const operatingHours = [
    { day: "Domingo:", hours: "14:00 – 19:00" },
    { day: "Segunda-feira:", hours: "13:00 – 19:00" },
    { day: "Terça-feira:", hours: "13:00 – 19:00" },
    { day: "Quarta-feira:", hours: "13:00 – 19:00" },
    { day: "Quinta-feira:", hours: "13:00 – 19:00" },
    { day: "Sexta-feira:", hours: "13:00 – 21:00" },
    { day: "Sábado:", hours: "13:00 – 19:00" },
  ]  
  return (
    <div className="hours">
        <div className="container">
          <Title icon={clockIcon} text="Nossos horários" />
          <div className="hoursInfo">
            {
              operatingHours.map((item, index)=>(
                <div key={index} style={item.day.includes(currentDay) ? { color: "#71058C", textDecoration:"underline" } : {}} className="hour">
                  <p>{item.day}</p>
                  <p>{item.hours}</p>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Hours