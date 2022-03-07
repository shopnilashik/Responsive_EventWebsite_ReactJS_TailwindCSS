import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../Images/1.jpeg';
import img2 from '../Images/2.jpeg';
import img3 from '../Images/3.jpeg';
import img4 from '../Images/4.jpeg';
import img5 from '../Images/5.jpeg';
import img6 from '../Images/6.jpeg';
import flower from '../Images/Flower.jpg';
import './slider.css';


function Banner(props) {

    return (
      <div>
        <Slider className="ml-10 mr-10 ">
          <div >
           <p className="absolute text-yellow-200  text-2xl mt-32 mt-32 ml-10 font-vibes lg:text-6xl lg:ml-64 lg:mt-[600px]" >Book Your Dream Wedding Reality </p>
            <img src={img1} alt="chobi" />
            
          </div>
          <div >
             <p className="absolute text-yellow-800 text-2xl mt-32 ml-10 font-vibes lg:text-6xl lg:ml-64 lg:mt-[600px]" >Book Your Dream Wedding Reality </p>
            <img src={img2} alt="chobi" />
          </div>
          <div >
             <p className="absolute text-gray-200 text-2xl mt-32 ml-10 font-vibes lg:text-6xl lg:ml-64 lg:mt-[600px]" >Book Your Dream Wedding Reality </p>
            <img src={img3} alt="chobi" />
          </div>
          <div >
             <p className="absolute text-yellow-800 text-2xl mt-32 ml-10 font-vibes lg:text-6xl lg:ml-64 lg:mt-[600px]" >Book Your Dream Wedding Reality </p>
            <img src={img4} alt="chobi" />
          </div>
          <div >
             <p className="absolute text-yellow-800 text-2xl mt-32 ml-10 font-vibes lg:text-6xl lg:ml-64 lg:mt-[600px]" >Book Your Dream Wedding Reality </p>
            <img src={img5} alt="chobi" />
          </div>
          <div >
             <p className="absolute text-grey-800 text-2xl mt-32 ml-10 font-vibes lg:text-6xl lg:ml-64 lg:mt-[600px]" >Book Your Dream Wedding Reality </p>
            <img src={img6} alt="chobi" />
          </div>
        </Slider>

        <div className="flex lg:flex-col justify-center items-center ">
          <h1 className="absolute flex text-gray-700 -mt-8  text-2xl font-vibes lg:text-6xl "  >Book Your Dream Wedding Reality </h1>
          <div className="">
          <button class="absolute bg-rose-400 hover:bg-rose-500 text-[12px] text-white  ml-40 p-1.5 rounded lg:font-bold lg:-ml-16 lg:mt-[550px] ">
             BOOK A BEAUTIFULDAY
          </button>
          </div>
          <img src={flower} alt="chobi" />
          </div>
      </div>
    );
  }



export default Banner;