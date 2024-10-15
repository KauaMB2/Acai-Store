import Title from "../../Titles"
import cupIcon from "./../../../../assets/icons/cup.svg" 
import "./style.css"
interface PricesProps {
  size: string;
  price: string;
}
const Cups = () => {
  const prices: PricesProps[] = [
    { size: "300mL", price: "R$7,00" },
    { size: "400mL", price: "R$8,00" },
    { size: "500mL", price: "R$9,00" },
    { size: "700mL", price: "R$11,50" },
    { size: "1L", price: "R$18,00" },
  ]
  return (
    <div className="cups container">
        <Title icon={cupIcon} text={"Diversos tamanhos"} />
        <div className="list">
        {
          prices.map((item, index) => {
            return (
              <div className="cup" key={index}>
                <div className="cupIcon">
                  <img src={cupIcon} alt={`Icone do copo ${item.size}`} id={`cup_${index.toString()}`} />
                </div>
                <div className="moneyValue">
                  <p>{item.size}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
  )
}

export default Cups