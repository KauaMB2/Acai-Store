import { useContext, useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Button, Modal } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { OrderContext } from "../../../context/Order"
import { cupPrices, sideDishes } from "../../../jsons"
import { ModalsContext } from "../../../context/Modals"
import { FaArrowLeft } from "react-icons/fa"
import "./style.css"

const PaymentModal=()=>{
  const pixKey="02170395610"
  const [copied, setCopied] = useState(false)

  const { totalPrice, selectedCup, quantities } = useContext(OrderContext)
  const { isPaymentModalOn, setIsPaymentModalOn, setIsLocationModalOn } = useContext(ModalsContext)

  // Generate PIX code and QR code
  const generatePixCode = (amount: number, key: string, description: string) => {
    const formattedAmount = (amount * 100).toFixed(0); // Convert to cents
    const pixData = [
      "000201", // Fixed prefix
      "010211", // Merchant account information
      `26${key.length.toString().padStart(2, "0")}${key}`, // Key
      "52BR", // Country code
      "53BRL", // Currency
      `54${formattedAmount.length}${formattedAmount}`, // Amount
      `58${description.length.toString().padStart(2, "0")}${description}`, // Description
      "6304", // Additional data length (to be calculated)
    ];

    // Calculate CRC16 checksum
    const crc16 = calculateCRC16(pixData.join(""));
    pixData.push(`62${crc16.length.toString().padStart(2, "0")}${crc16}`);

    return pixData.join("");
  };

  // Simple CRC16 calculation function (just an example, you can use a library)
  const calculateCRC16 = (data: string) => {
    let crc = 0xffff;
    for (let i = 0; i < data.length; i++) {
      crc ^= data.charCodeAt(i);
      for (let j = 0; j < 8; j++) {
        if (crc & 0x0001) {
          crc = (crc >> 1) ^ 0xa001;
        } else {
          crc >>= 1;
        }
      }
    }
    return crc.toString(16).toUpperCase().padStart(4, "0");
  };

  const description = `Payment for ${selectedCup !== -1 && cupPrices[selectedCup].size}`;
  const pixCode = generatePixCode(totalPrice, pixKey, description);

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  const handleReturn=()=>{
    setIsPaymentModalOn(false)
    setIsLocationModalOn(true)
  }

  return (
    <Modal className="paymentModal" show={isPaymentModalOn} onHide={() => setIsPaymentModalOn(false)} size="lg">
      <Modal.Header className="modal-header">
        <Button
            variant="link"
            onClick={handleReturn}
            className="d-flex align-items-center me-2"
          >
            <FaArrowLeft style={{ fontSize: '20px' }} />
        </Button>
        <Modal.Title>Pagamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">
          Complete o seu pedido escaneando o QR Code ou copiando o código PIX.
        </p>
        <div className="orderSummary bg-light p-3 rounded mb-3">
          <p>Tamanho: {selectedCup !== -1 && cupPrices[selectedCup].size}</p>
          <p>
            Acompanhamentos:{" "}
            {
              quantities.map((quantity, index) =>
                quantity > 0 ? `${sideDishes[index].name}(${quantity})` : ""
              ).filter(Boolean).join(", ")
            }
          </p>
        </div>
        <div className="text-center mb-3">
          <p className="font-weight-bold">Preço total:</p>
          <h3 className="text-primary">R$ {totalPrice.toFixed(2)}</h3>
        </div>
        <div className="text-center mb-3">
          <QRCodeSVG value={pixCode} size={200} />
        </div>
        <div className="mb-3">
          <p className="font-weight-bold text-center">PIX Code</p>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={pixCode}
              readOnly
              style={{ cursor: "default" }}
            />
            <Button variant="outline-secondary" onClick={handleCopyPix}>
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <small className="text-muted">
          Por favor, complete o pagamento para finalizar o pedido.
        </small>
        <Button variant="secondary" onClick={() => setIsPaymentModalOn(false)}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default PaymentModal