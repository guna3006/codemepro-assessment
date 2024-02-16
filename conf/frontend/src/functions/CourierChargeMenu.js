import React, { useState } from 'react';
import '../App.css';

const CourierCharge = ({ courierCharge }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button class="round-button" onClick={openModal}><i className="fas fa-dollar-sign" ></i></button>

      {showModal && (
        <div className="modal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="modal-content" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', position: 'relative' }}>
            <span className="close" onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '20px', cursor: 'pointer' }}>&times;</span>
            <h2>Courier Charges</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {courierCharge.map(charge => (
                <p key={`${charge.Min}-${charge.Max}`}>
                  ${charge.Charge} for {charge.Min}g to {charge.Max}g
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourierCharge;
