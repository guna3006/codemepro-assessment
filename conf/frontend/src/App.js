import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import download from 'downloadjs';
import ProductsList from './functions/ProductList';
import CourierCharge from './functions/CourierChargeMenu';
import OrderSummary from './functions/OrderSummary';
import LinkedInIcon from './resourse/linkedin.svg';
import pdfIcon from './resourse/pdf.svg';
import xlsIcon from './resourse/xls.svg';


const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [courierCharge, setCourierCharge] = useState([]);
  const [isProductListExpanded, setProductListExpanded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data));
    axios.get('http://localhost:3000/courierCharge')
      .then(response => setCourierCharge(response.data));
  }, []);

  const handleProductSelection = (product, isChecked) => {
    if (isChecked) {
      setSelectedProducts([...selectedProducts, product]);
    } else {
      setSelectedProducts(selectedProducts.filter(p => p !== product));
    }
  };

  const toggleProductList = () => {
    setProductListExpanded(!isProductListExpanded);
  };

  const downloadPdf1 = () => {
    const pdfPath = '/non_Outsystem_test.pdf';
    axios({
      url: pdfPath,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      download(response.data, 'non_Outsystem_test.pdf', 'application/pdf');
    });
  };

  const downloadPdf2 = () => {
    const pdfPath = '/Outsystem_test.pdf';
    axios({
      url: pdfPath,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      download(response.data, 'Outsystem_test.pdf', 'application/pdf');
    });
  };

  const downloadXls = () => {
    const pdfPath = '/Test_info.xls';
    axios({
      url: pdfPath,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      download(response.data, 'Test_info.xls', 'application/xls');
    });
  };

  return (
    <div className="app">
      <header>
        <h1><img src="/codemepro.jpeg" alt="logo" className="logo"/></h1>
      </header>

      <main>
        <section className="hero">
          <h2>Assessment</h2>
          <p>The main emphasis is on utilizing low-code platforms, with a particular focus on OutSystems, to expedite the development of applications.
          <br/>Nevertheless, CodeMe Pro is also involved in traditional pro-code development when it becomes essential to meet specific requirements or tackle challenges.
          <br/>Below are both tests; kindly choose the one that aligns most closely with your expertise and interests. Once a test is selected, please host it and send the source file.</p>
          <div className="top-right-buttons">
          <button onClick={downloadPdf1}><img src={pdfIcon} alt="pdf" className="pdf-icon" /><br/>Outsystem_test.pdf </button>
          <button onClick={downloadPdf2}><img src={pdfIcon} alt="pdf" className="pdf-icon" /><br/>non_Outsystem_test.pdf </button>
          <button onClick={downloadXls}><img src={xlsIcon} alt="xls" className="xls-icon" /><br/>Test_info.xls</button>
  </div>
        </section>
        <section className="features">
        <div className="feature">
            <h3 onClick={toggleProductList} style={{ cursor: 'pointer' }}>
              Product List
              <i className={`fas ${isProductListExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ marginLeft: '5px' }}></i>
              <div className="courier"><CourierCharge courierCharge={courierCharge} /></div>
            </h3>
            {isProductListExpanded && <ProductsList products={products} onSelectProduct={handleProductSelection} />}
            <OrderSummary selectedProducts={selectedProducts} />
          </div>

        </section>
      </main>
      <footer>
        <p>&copy; 2024 | Gunasegarran Magadevan</p>
        <a href="https://www.linkedin.com/in/gunasegarran" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="linkedin-icon" />
    </a>
      </footer>
    </div>
  );
};

export default App;
