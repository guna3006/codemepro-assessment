import React from 'react';

const OrderReceipt = ({ orderReceipt }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <p><strong>Total Packages:</strong> {orderReceipt.totalPackage}</p>
      <p><strong>Total Package Weight:</strong> {orderReceipt.totalPackageWeight} grams</p>
      <p><strong>Total Package Charge:</strong> ${orderReceipt.totalPackageCharge}</p>
      <br/>

      {orderReceipt.packages.map((pkg, index) => (
        <div key={index}>
          <h3>{`Package ${index + 1}`}</h3>
          <p>Package Weight: {pkg.packageWeight} grams</p>
          <p>Package Charge: ${pkg.packageCharge}</p>

          {pkg.details.map((item, itemIndex) => (
            <div key={itemIndex}>
              <p>{`Item ${itemIndex + 1}: ${item.Name}, Price: $${item.Price}, Weight: ${item.Weight} grams`}</p>
            </div>
          ))}
        <br/>
        </div>
        
      ))}
    </div>
  );
};

export default OrderReceipt;
