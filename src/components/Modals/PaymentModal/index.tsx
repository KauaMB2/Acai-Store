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
  const [copied, setCopied] = useState(false)
  const debtorCPF="02170395610"
  const debtorName="Kauã Moreira Batista"

  const { absolutePrice, selectedCup, quantities } = useContext(OrderContext)
  const { isPaymentModalOn, setIsPaymentModalOn, setIsLocationModalOn } = useContext(ModalsContext)

  

  const description = `Pagamento de ${selectedCup !== -1 && cupPrices[selectedCup].size}`;
  const data:any = generatePixCode(absolutePrice, debtorCPF, debtorName, description)

  const handleCopyPix = () => {
    navigator.clipboard.writeText(data.pixCopiaECola)
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
          <h3 className="text-primary">R$ {absolutePrice.toFixed(2)}</h3>
        </div>
        <div className="text-center mb-3">
          <QRCodeSVG value={data.pixCopiaECola} size={200} />
        </div>
        <div className="mb-3">
          <p className="font-weight-bold text-center">PIX Code</p>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={data.pixCopiaECola}
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
function generatePixCode(absolutePrice: number, debtorCPF: string, debtorName: string, description: string): any {
  console.log(absolutePrice, debtorCPF, debtorName, description)
  return { pixCopiaECola: "00020101021226830014BR.GOV.BCB.PIX2561qrcodespix.sejaefi.com.br/v2/b3e136a97ea346f1a1747ca934d2e7a05204000053039865802BR5905EFISA6008SAOPAULO62070503***6304D03A" }
}

