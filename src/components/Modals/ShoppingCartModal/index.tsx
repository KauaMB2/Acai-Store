import React, { useContext, useState } from 'react'
import { Modal, Button, Table } from 'react-bootstrap'
import { cupPrices } from './../../../jsons'
import { ModalsContext } from '../../../context/Modals'

const ShoppingCartModal: React.FC = () => {
    const [cart, setCart] = useState<{ cupSize: string; sideDishes: Array<{ name: string; price: number }> }[]>([])
    const { isShoppingCartModalOn, setIsShoppingCartModalOn }=useContext(ModalsContext)
    const [selectedCupSize, setSelectedCupSize] = useState<string | null>(null)
    const [selectedSideDishes, setSelectedSideDishes] = useState<{ name: string; price: number }[]>([])

    const handleClose = () =>{
        setIsShoppingCartModalOn(false)
    }
    const addToCart = () => {
        if (selectedCupSize) {
            const cup = cupPrices.find(c => c.size === selectedCupSize);
            if (cup) {
                setCart([...cart, { cupSize: selectedCupSize, sideDishes: selectedSideDishes }]);
                resetSelection();
            }
        }
    }

    const resetSelection = () => {
        setSelectedCupSize(null)
        setSelectedSideDishes([])
    }

    const totalValue = () => {
        const cupTotal = cart.reduce((total, item) => {
            const cup = cupPrices.find(c => c.size === item.cupSize);
            return total + (cup ? cup.price : 0) + item.sideDishes.reduce((sum, dish) => sum + dish.price, 0);
        }, 0)
        return cupTotal.toFixed(2)
    }

    return (
        <>
            <Modal show={isShoppingCartModalOn} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Carrinho</Modal.Title>
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
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.cupSize}</td>
                                    <td>{item.sideDishes.map(d => d.name).join(', ')}</td>
                                    <td>${(cupPrices.find(c => c.size === item.cupSize)?.price || 0) + item.sideDishes.reduce((sum, dish) => sum + dish.price, 0).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <h5>Total: ${totalValue()}</h5>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addToCart}>
                        Add to Cart
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ShoppingCartModal
