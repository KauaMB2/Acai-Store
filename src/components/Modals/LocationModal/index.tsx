import { FormEvent, useContext, useState } from "react";
import { FaArrowLeft } from 'react-icons/fa'; // Import the left arrow icon
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap"; // Import the Button component
import { ModalsContext } from "../../../context/Modals";
import "./style.css"
import { OrderContext } from "../../../context/Order";
import { sideDishes } from "../../../jsons";

const DeliveryAddressForm = () => {
  const { isLocationModalOn, setIsLocationModalOn, setIsSideDishesModalOn, setIsPaymentModalOn } = useContext(ModalsContext);
  const { setQuantities, setSelectedCup } = useContext(OrderContext)
  const [address, setAddress] = useState({
    street: "",
    city: "",
    number: "",
    postalCode: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAddress((prev) => ({ ...prev, [name]: value }))
  }

  const handleClose=()=>{
    setQuantities(Array(sideDishes.length).fill(0))
    setSelectedCup(-1)
    setIsLocationModalOn(false)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Delivery Address:", address)
    setIsLocationModalOn(false) // Close modal on submit
    setIsPaymentModalOn(true)
  };

  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const addressData = await fetchAddress(latitude, longitude);
          if (addressData) {
            setAddress({
              street: addressData.road || "", // Use road for street
              city: addressData.town || addressData.municipality || "",
              number: "",
              postalCode: addressData.postcode || "",
            });
          }
        },
        (error) => {
          console.error(error);
          setError("Não foi possível pegar sua localização.");
        }
      );
    } else {
      setError("Geolocalização não é suportada por este navegador.");
    }
  };

  const fetchAddress = async (latitude: number, longitude: number) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      return data.address; // Return the address object
    } else {
      setError("Falha ao se comunicar com servidor de geolocalização.");
      return null;
    }
  };

  const handleReturn = () => {
    setIsLocationModalOn(false)
    setIsSideDishesModalOn(true)
  };

  return (
    <Modal className="locationModal" show={isLocationModalOn} onHide={() => setIsLocationModalOn(false)} size="xl">
      <Modal.Header className="modal-header">
        <Button
          variant="link"
          onClick={handleReturn}
          className="d-flex align-items-center me-2"
        >
          <FaArrowLeft style={{ fontSize: '20px' }} />
        </Button>
        <Modal.Title>Endereço de entrega</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
          <div className="mb-3">
            <label className="form-label">Rua:</label>
            <input
              type="text"
              className="form-control"
              name="street"
              value={address.street}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Número:</label>
            <input
              type="text"
              className="form-control"
              name="number"
              value={address.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Cidade:</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={address.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Código postal (CEP):</label>
            <input
              type="text"
              className="form-control"
              name="postalCode"
              value={address.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <Button variant="secondary" className="me-2" onClick={handleClose}>Fechar</Button>
          <Button
            variant="primary"
            onClick={getCurrentPosition}
            className="me-2" // Optional: adds margin to the right
          >
            Pegar localização atual
          </Button>
          <Button type="submit" variant="success">Prosseguir</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default DeliveryAddressForm;
