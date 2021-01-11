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
                <p className="legend uppercase font-serif">DA UNA MANO AMIGA A ESTUDIANTES DE INSTITUTOS TECNOLÓGICOS SUPERIORES
                &nbsp;
                <button className="bg-yellow-500 hover:bg-yellow-600 p-2 px-3 uppercase">Quiero donar</button>
                </p>
            </div>
            <div>
                <img src={carousel2} alt="pic2" />
                <p className="legend uppercase font-serif">CON MOTIVO DEL COVID 19 MUCHOS ESTUDIANTES Y SUS FAMILIAS SE VIERON AFECTADOS</p>
            </div>
            <div className="flex">
                <img src={carousel3} alt="pic3" />
                <p className="legend uppercase font-serif px-2">TU APOYO DA ACCESO A CLASES VIRTUALES
                &nbsp;
                <button className="bg-yellow-500 hover:bg-yellow-600 p-2 px-3 uppercase">!Dona Ahora!</button>
                </p>
            </div>
        </Carousel>
    );
}

export default CarouselComponent;

