import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import Modal from 'react-modal';
import generatePDF from './pdfGenerator';
import OrderReceipt from './OrderReceipt';
import cartIcon from '../resourse/cart.svg';
import pdfIcon from '../resourse/pdf2.svg';

const OrderSummary = ({ selectedProducts }) => {
  const [orderReceipt, setOrderReceipt] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlaceOrder = () => {
    axios.post('http://localhost:3000/orderPackage', selectedProducts)
      .then(response => {
        console.log('Order placed successfully:', response.data);
        setOrderReceipt(response.data);
        setIsModalOpen(true);
      })
      .catch(error => console.error('Error placing order:', error));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handlePlaceOrder}><img src={cartIcon} alt="cart" className="cart-icon" /></button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
      <span className="close" onClick={closeModal}>&times;</span>
        <OrderReceipt orderReceipt={orderReceipt} />
        <button onClick={() => generatePDF(orderReceipt)}><img src={pdfIcon} alt="pdf" className="pdf-icon2" /></button>
      </Modal>
    </div>
  );
};

export default OrderSummary;
