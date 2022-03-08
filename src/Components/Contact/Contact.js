import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import img1 from '../Images/flower.webp';
function Contact(props) {
    return (
        <div>
            <Navbar />
            <div className="bg-blue-400 h-[300px] lg:h-[400px]">
             <p className=" font-vibes text-center lg:text-[80px] text-[40px] align-middle p-28 text-white mt-12">Contact</p>
            </div>
            <div className="">
                <img className="w-full" src={img1} alt="chobi" />
                <h1 className=" -mt-16 font-poppins font-thin text-center text-[30px]" >Give Us A Feedback</h1>
                <p className="font-slop text-center">Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat</p>
            </div>

            <div className="border-2 h-80 mt-5"></div>
            <Footer />
        </div>
    );
}

export default Contact;