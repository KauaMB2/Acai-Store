import { useContext } from "react";
import Title from "../../Titles";
import sideDishesIcon from "./../../../../assets/icons/sidedishes.svg";
import "./style.css";
import { ModalsContext } from "../../../../context/Modals";
import { sideDishes } from "../../../../jsons";

const SideDishes = () => {
  const { setIsSideDishesModalOn } = useContext(ModalsContext)

  return (
    <div className="container">
      <div>
        <Title icon={sideDishesIcon} text="Acompanhamentos" />
        <div className="flex-container">
          {sideDishes.map((dish, index) => (
            <div key={index} className="sideDishInfo">
              <p>{dish.name}</p>
              <p>R$ {dish.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="sideDishes-placeAnOrder-button">
        <button onClick={()=>{setIsSideDishesModalOn(true)}}>Faça seu pedido</button>
      </div>
    </div>
  );
};

export default SideDishes;