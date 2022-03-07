import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import img1 from "../Images/Stages/stage1.JPG"
function Services(props) {
    return (
        <div>
            <Navbar />
            {/* Main Container */}
            <div className="container mx-auto ">
                {/* 1st Card */}
                <div className="bg-gray-100 h-[480px] mt-7 w-80 mx-auto shadow-lg">
                    <div className="">
                        <img src={ img1 } alt="chobi"/>
                    </div>
                    <div className="">
                        <h1 className="font-vibes text-center text-[30px] mt-3">Wedding Stage</h1>
                        <p className="font-slop text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </p>
                        <button className="font-slop py-2 px-4 mx-auto rounded-lg block bg-rose-400 hover:bg-rose-500 text-[14px]">Book An Appointment</button>
                    </div>
                </div>
 







             </div>
            
            <Footer />
        </div>
    );
}

export default Services;