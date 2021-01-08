import React from "react";
import { Carousel } from "react-responsive-carousel";

import carousel1 from "../assets/images/img1.jpg";
import carousel2 from "../assets/images/img2.jpg";
import carousel3 from "../assets/images/img3.jpg";

function CarouselComponent() {
    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            autoPlay
            infiniteLoop={true}
            swipeable
            transitionTime={3000}
            interval={6000}
        >
            <div className="flex justify-center items-center">
                <img src={carousel1} alt="pic1" />
                <p className="legend uppercase font-serif">Equipamos el futuro hoy</p>
            </div>
            <div>
                <img src={carousel2} alt="pic2" />
                <p className="legend uppercase font-serif">Dona tu Computador que no usas</p>
            </div>
            <div>
                <img src={carousel3} alt="pic3" />
                <p className="legend uppercase font-serif"> Extendiende tu mano para ayudar</p>
            </div>
        </Carousel>
    );
}

export default CarouselComponent;

