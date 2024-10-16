import React, { useContext } from 'react'
import { Modal, Button, Table } from 'react-bootstrap'
import { cupPrices, sideDishes } from './../../../jsons'
import { ModalsContext } from '../../../context/Modals'
import { FaArrowLeft } from 'react-icons/fa'
import { OrderContext } from '../../../context/Order'
import "./style.css"

const ShoppingCartModal: React.FC = () => {
    const { isShoppingCartModalOn, setIsShoppingCartModalOn, setIsSideDishesModalOn }=useContext(ModalsContext)
    const { orderList, absolutePrice, setOrderList, setAbsolutePrice, setTotalPrice, setQuantities, setSelectedCup }=useContext(OrderContext)

    const handleClose = () =>{
        setIsShoppingCartModalOn(false)
        setOrderList({count:0, orders:[]})
        setAbsolutePrice(0)
        setTotalPrice(0)
        setQuantities(Array(sideDishes.length).fill(0))
        setSelectedCup(-1)
    }
    const handleReturn=()=>{
        setIsShoppingCartModalOn(false)
        setIsSideDishesModalOn(true)
    }

    const getSelectedSideDishes = (quantities:number[]) => {
        console.log("AA")
        console.log(quantities)
        return quantities.map((quantity:number, index:number) =>
            quantity > 0 ? `${sideDishes[index].name}(${quantity})` : ""
        ).filter(Boolean).join(", ")
    }

    return (
        <>
            <Modal className='ShoppingCartModal' show={isShoppingCartModalOn}>
                <Modal.Header className='modal-header'>
                        <Button variant="link" onClick={handleReturn} className="d-flex align-items-center me-2">
                            <FaArrowLeft style={{ fontSize: '20px' }} />
                        </Button>
                        <Modal.Title className="modal-title">Carrinho</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Copo</th>
                                <th>Acompanhamentos</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderList.orders.map((order, index:number) => (
                                <tr key={index}>
                                    <td>{order.selectedCup !== -1 && cupPrices[order.selectedCup].size}</td>
                                    <td>{getSelectedSideDishes(order.quantity) || "Nenhum"}</td>
                                    <td>R$ {order.totalPrice.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                    <strong>Total: R${absolutePrice.toFixed(2)}</strong>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ShoppingCartModal
