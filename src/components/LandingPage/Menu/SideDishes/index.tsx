import { useContext } from "react";
import Title from "../../Titles";
import sideDishesIcon from "./../../../../assets/icons/sidedishes.svg";
import "./style.css";
import { ModalsContext } from "../../../../context/Modals";

interface SideDishesProps {
  sideDish: string;
  price: string;
}

const SideDishes = () => {
  const { setIsSideDishesModalOn } = useContext(ModalsContext)

  const sideDishes: SideDishesProps[] = [
    { sideDish: "Abacaxi:", price: "R$2,00" },
    { sideDish: "Amendoim:", price: "R$2,00" },
    { sideDish: "Banana:", price: "R$2,00" },
    { sideDish: "Bis Preto:", price: "R$2,00" },
    { sideDish: "Bis Branco:", price: "R$2,50" },
    { sideDish: "Brigadeiro:", price: "R$3,00" },
    { sideDish: "Chatili:", price: "R$2,50" },
    { sideDish: "Chocolate em Gotas:", price: "R$2,00" },
    { sideDish: "Confete:", price: "R$2,00" },
    { sideDish: "Calda de Chocolate:", price: "R$2,00" },
    { sideDish: "Calda de Morango:", price: "R$2,00" },
    { sideDish: "Creme de Leite Ninho:", price: "R$2,00" },
    { sideDish: "Creme de Ovomaltine:", price: "R$2,00" },
    { sideDish: "Dadinho:", price: "R$2,00" },
    { sideDish: "Diamante Negro:", price: "R$2,00" },
    { sideDish: "Doce de Leite:", price: "R$2,00" },
    { sideDish: "Granola:", price: "R$2,00" },
    { sideDish: "Farinha Láctea:", price: "R$2,00" },
    { sideDish: "Granulado:", price: "R$2,00" },
    { sideDish: "Iogurte Morango:", price: "R$2,00" },
    { sideDish: "Kit Kat:", price: "R$2,00" },
    { sideDish: "Laka:", price: "R$2,00" },
    { sideDish: "Leite Condensado:", price: "R$2,00" },
    { sideDish: "Leite Ninho:", price: "R$2,00" },
    { sideDish: "Leite em Pó:", price: "R$2,00" },
    { sideDish: "Mel:", price: "R$2,00" },
    { sideDish: "Morango:", price: "R$2,00" },
    { sideDish: "Mousse de Maracujá:", price: "R$2,00" },
    { sideDish: "Mousse de Morango:", price: "R$2,00" },
    { sideDish: "Mousse de Limão:", price: "R$2,00" },
    { sideDish: "Nutella:", price: "R$2,00" },
    { sideDish: "Nescal Ball:", price: "R$2,00" },
    { sideDish: "Neston:", price: "R$2,00" },
    { sideDish: "Ovomaltine:", price: "R$2,00" },
    { sideDish: "Ouro Branco:", price: "R$2,00" },
    { sideDish: "Paçoca:", price: "R$2,00" },
    { sideDish: "Prestígio:", price: "R$2,00" },
    { sideDish: "Sonho de Valsa:", price: "R$2,00" },
    { sideDish: "Space Ball:", price: "R$2,00" },
    { sideDish: "Sucrilhos:", price: "R$2,00" },
    { sideDish: "Suflair:", price: "R$2,00" },
    { sideDish: "Raspas de Chocolate Preto:", price: "R$2,00" },
    { sideDish: "Bolacha Oreo:", price: "R$2,00" },
    { sideDish: "Raspas de Chocolate Branco:", price: "R$2,00" },
  ];

  return (
    <div className="container">
      <div>
        <Title icon={sideDishesIcon} text="Acompanhamentos" />
        <div className="flex-container">
          {sideDishes.map((dish, index) => (
            <div key={index} className="sideDishInfo">
              <p>{dish.sideDish}</p>
              <p>{dish.price}</p>
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