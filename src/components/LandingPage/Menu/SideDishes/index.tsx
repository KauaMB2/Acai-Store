import { useContext } from "react";
import Title from "../../Titles";
import nameesIcon from "./../../../../assets/icons/sidedishes.svg";
import "./style.css";
import { ModalsContext } from "../../../../context/Modals";

interface SideDishesProps {
  name: string;
  price: string;
}

const SideDishes = () => {
  const { setIsSideDishesModalOn } = useContext(ModalsContext)

  const namees: SideDishesProps[] = [
    { name: "Abacaxi:", price: "R$2,00" },
    { name: "Amendoim:", price: "R$2,00" },
    { name: "Banana:", price: "R$2,00" },
    { name: "Bis Preto:", price: "R$2,00" },
    { name: "Bis Branco:", price: "R$2,50" },
    { name: "Brigadeiro:", price: "R$3,00" },
    { name: "Chatili:", price: "R$2,50" },
    { name: "Chocolate em Gotas:", price: "R$2,00" },
    { name: "Confete:", price: "R$2,00" },
    { name: "Calda de Chocolate:", price: "R$2,00" },
    { name: "Calda de Morango:", price: "R$2,00" },
    { name: "Creme de Leite Ninho:", price: "R$2,00" },
    { name: "Creme de Ovomaltine:", price: "R$2,00" },
    { name: "Dadinho:", price: "R$2,00" },
    { name: "Diamante Negro:", price: "R$2,00" },
    { name: "Doce de Leite:", price: "R$2,00" },
    { name: "Granola:", price: "R$2,00" },
    { name: "Farinha Láctea:", price: "R$2,00" },
    { name: "Granulado:", price: "R$2,00" },
    { name: "Iogurte Morango:", price: "R$2,00" },
    { name: "Kit Kat:", price: "R$2,00" },
    { name: "Laka:", price: "R$2,00" },
    { name: "Leite Condensado:", price: "R$2,00" },
    { name: "Leite Ninho:", price: "R$2,00" },
    { name: "Leite em Pó:", price: "R$2,00" },
    { name: "Mel:", price: "R$2,00" },
    { name: "Morango:", price: "R$2,00" },
    { name: "Mousse de Maracujá:", price: "R$2,00" },
    { name: "Mousse de Morango:", price: "R$2,00" },
    { name: "Mousse de Limão:", price: "R$2,00" },
    { name: "Nutella:", price: "R$2,00" },
    { name: "Nescal Ball:", price: "R$2,00" },
    { name: "Neston:", price: "R$2,00" },
    { name: "Ovomaltine:", price: "R$2,00" },
    { name: "Ouro Branco:", price: "R$2,00" },
    { name: "Paçoca:", price: "R$2,00" },
    { name: "Prestígio:", price: "R$2,00" },
    { name: "Sonho de Valsa:", price: "R$2,00" },
    { name: "Space Ball:", price: "R$2,00" },
    { name: "Sucrilhos:", price: "R$2,00" },
    { name: "Suflair:", price: "R$2,00" },
    { name: "Raspas de Chocolate Preto:", price: "R$2,00" },
    { name: "Bolacha Oreo:", price: "R$2,00" },
    { name: "Raspas de Chocolate Branco:", price: "R$2,00" },
  ];

  return (
    <div className="container">
      <div>
        <Title icon={nameesIcon} text="Acompanhamentos" />
        <div className="flex-container">
          {namees.map((dish, index) => (
            <div key={index} className="nameInfo">
              <p>{dish.name}</p>
              <p>{dish.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="namees-placeAnOrder-button">
        <button onClick={()=>{setIsSideDishesModalOn(true)}}>Faça seu pedido</button>
      </div>
    </div>
  );
};

export default SideDishes;