import { useContext, useState } from "react";
import { Button, Modal, Container } from "react-bootstrap";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import cupIcon from "./../../../assets/icons/cup.svg";
import { ModalsContext } from "../../../context/Modals";
import { sideDishes, cupPrices } from "../../../jsons";
import { OrderContext } from "../../../context/Order";
import "./style.css"

interface CupsProps {
  selectedCup: number;
  setSelectedCup: React.Dispatch<React.SetStateAction<number>>;
}

const Cups = ({ selectedCup, setSelectedCup }: CupsProps) => {

  const handleCupClick = (index: number) => {
    const newSelectedCup = selectedCup !== index ? index : -1;
    setSelectedCup(newSelectedCup);
  }

  return (
    <div className="cups modalContainer">
      <div className="list">
        {cupPrices.map((item, index) => (
          <div
            className={`cup ${selectedCup === index ? "selected" : ""}`}
            key={index}
            onClick={() => handleCupClick(index)}
          >
            <div className="cupIcon">
              <img
                src={cupIcon}
                alt={`Icone do copo ${item.size}`}
                id={`cup_${index}`}
              />
            </div>
            <div className="money-value">
              <p>{item.size}</p>
              <p>R$ {item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SideDishesModal = () => {
  const { isSideDishesModalOn, setIsSideDishesModalOn, setIsLocationModalOn, setIsShoppingCartModalOn } = useContext(ModalsContext);
  const { totalPrice, quantities, selectedCup, setTotalPrice, setQuantities, setSelectedCup, acaiCount, setAcaiCount } = useContext(OrderContext);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(true);

  const handleClose = () => {
    setQuantities(Array(sideDishes.length).fill(0));
    setSelectedCup(-1);
    setIsSideDishesModalOn(false);
    setShowErrorMessage(false);
    setErrorMessage("");
    setAcaiCount(0); 
  };

  const addOrder=()=>{
    setAcaiCount(prev => prev+1)
    setQuantities(Array(sideDishes.length).fill(0));
    setSelectedCup(-1);
  }

  const handleContinue = () => {
    if (selectedCup == -1) {
      setShowErrorMessage(true);
      setErrorMessage("Você deve selecionar algum copo.");
      return;
    }
    setIsSideDishesModalOn(false);
    setIsLocationModalOn(true);
    setShowErrorMessage(false);
    setErrorMessage("");
  };

  const handleOpenShoppingCart=()=>{
    setIsSideDishesModalOn(false)
    setIsShoppingCartModalOn(true)
  }

  const increment = (index: number) => {
    setQuantities((prev: number[]) => {
      const newQuantities = [...prev];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };

  const decrement = (index: number) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      if (newQuantities[index] > 0) {
        newQuantities[index] -= 1;
      }
      return newQuantities;
    });
  };

  setTotalPrice(
    quantities.reduce((total, quantity, index) => {
      return total + quantity * sideDishes[index].price;
    }, 0) + (selectedCup !== -1 ? [7.0, 8.0, 9.0, 11.5, 18.0][selectedCup] : 0)
  )

  const getSelectedSideDishes = () => {
    return quantities.map((quantity, index) =>
      quantity > 0 ? `${sideDishes[index].name}(${quantity})` : ""
    )
      .filter(Boolean)
      .join(", ");
  };

  return (
    <Container className="text-center">
      <Modal show={isSideDishesModalOn} onHide={handleClose} size="xl">
        <Modal.Header className="modal-header">
          <div className="header-title">
            <div className="header-title-text">
              <Button variant="link" onClick={handleClose} className="d-flex align-items-center me-2">
                <FaArrowLeft style={{ fontSize: '20px' }} />
              </Button>
              <Modal.Title className="modal-title">Tamanho e acompanhamentos</Modal.Title>
            </div>
            <div className="size-amount">
              <p className="modal-subtitle">
                Tamanho: {selectedCup !== -1 ? [`300mL`, `400mL`, `500mL`, `700mL`, `1L`][selectedCup] : ""}
              </p>
              <p className="modal-subtitle">
                Acompanhamentos: {getSelectedSideDishes() || ""}
              </p>
              <p className="modalErrorMessage modal-subtitle">{showErrorMessage && errorMessage}</p>
            </div>
          </div>
            <Button variant="link" onClick={handleOpenShoppingCart} className="cart-container">
              <FaShoppingCart size={42} className="fa-shopping-cart" />
              {acaiCount > 0 && (
                <div className="cart-counter">{acaiCount}</div>
              )}
            </Button>
        </Modal.Header>
        <Modal.Body className="modal-body">
        <Cups selectedCup={selectedCup} setSelectedCup={setSelectedCup} />
          <div style={{ width: "100%", overflowX: "auto", marginTop: "20px" }}>
            <div className="table-header">
              <div className="table-cell">Acompanhamento</div>
              <div className="table-cell">Preço</div>
              <div className="table-cell">Quantidade</div>
            </div>
            {sideDishes.map((dish, index) => (
              <div key={index} className="table-row">
                <span className="table-cell">{dish.name}</span>
                <span className="table-cell">R$ {dish.price.toFixed(2)}</span>
                <div className="table-cell">
                  <Button variant="secondary" onClick={() => decrement(index)}>
                    -
                  </Button>
                  <span style={{ margin: "0 10px" }}>{quantities[index]<10 ? `0${quantities[index]}` : quantities[index]}</span>
                  <Button variant="secondary" onClick={() => increment(index)}>
                    +
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="total">
            <strong>Total: R$ {totalPrice.toFixed(2)}</strong>
          </div>
          <Button variant="secondary" onClick={handleClose}>Fechar</Button>
          <Button variant="primary" onClick={addOrder}>Adicionar pedido</Button>
          <Button variant="success" onClick={handleContinue}>Prosseguir</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SideDishesModal;
