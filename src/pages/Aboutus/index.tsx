import React from 'react';

function AboutUs() {
  return (
    <div>
       <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col d-flex flex-column justify-content-center">
                    <h1 className='fw-bold'>About Us</h1>
                    <p className="fw-normal">Welcome to our eCommerce store! We are passionate about providing high-quality products and exceptional customer service to our valued customers. <br></br> Our goal is to offer a seamless online shopping experience with a wide range of products, competitive prices, and reliable delivery.</p>
                    <p className="fw-normal">Our team is dedicated to ensuring that every customer has a positive experience while shopping with us. Whether you're looking for electronics, fashion items,<br></br> home goods, or any other product category, we strive to meet your needs and exceed your expectations.</p>
                    <p className="fw-semibold">Thank you for choosing us for your shopping needs. We appreciate your trust and support, and we look forward to serving you!</p>
                    <img src="https://png.pngtree.com/png-clipart/20210709/ourmid/pngtree-thank-you-for-your-order-hand-lettering-message-png-image_3560875.jpg" style={{height:'300px',width:'800px'}}/>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default AboutUs;
