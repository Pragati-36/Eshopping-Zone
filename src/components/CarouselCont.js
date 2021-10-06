import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselCont = ()=>{
    return (
        <Carousel variant='dark' fade={true}>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="http://citywestshoppingcentre.com/app/uploads/2017/04/Woman-Shopping-Banner.jpg"
      alt="First slide"
      style={{height:'700px'}}
    />
    <Carousel.Caption>
      <h5>Welcome</h5>
      <p>Eshopping Zone</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://www.citrusplaza.com/wp-content/uploads/2016/05/main-banner-shopping.png"
      alt="Second slide"
      style={{height:'700px'}}
    />
    <Carousel.Caption>
        <h5>Welcome</h5>
      <p>Eshopping Zone</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/happy-young-couple-holding-shopping-bag_329181-1746.jpg?size=626&ext=jpg"
      alt="Third slide"
      style={{height:'700px'}}
    />
    <Carousel.Caption>
      <h5>Welcome</h5>
      <p>Eshopping Zone</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default CarouselCont