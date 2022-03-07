import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import img1 from "../Images/Stages/stage1.JPG"
import img2 from "../Images/Stages/pb1.JPG"
import img3 from "../Images/Stages/gate1.JPG"
function Services(props) {
    return (
        <div>
            <Navbar />
            {/* Main Container */}
            <div className="container mx-auto lg:grid lg:grid-cols-3">
                {/* 1st Card Start*/}
                <div className="bg-gray-100 h-[430px] mt-7 w-80 mx-auto shadow-lg">
                    <div className="">
                        <img className="h-[200px] w-full" src={ img1 } alt="chobi"/>
                    </div>
                    <div className="">
                        <h1 className="font-vibes text-center text-[30px] mt-3">Wedding Stage</h1>
                        <p className="font-slop text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </p>
                        <button className="mt-3 font-slop py-2 px-4 mx-auto rounded-sm block bg-gray-300 hover:bg-gray-400 text-[14px] hover:text-white">Book An Appointment</button>
                    </div>
                </div>
                {/* 1st Card End */}
                

                   {/* 2nd Card Start*/}
                <div className="bg-gray-100 h-[430px] mt-7 w-80 mx-auto shadow-lg">
                    <div className="">
                        <img className="h-[200px] w-full" src={ img2 } alt="chobi"/>
                    </div>
                    <div className="">
                        <h1 className="font-vibes text-center text-[30px] mt-3">Photo Both</h1>
                        <p className="font-slop text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </p>
                        <button className="mt-3 font-slop py-2 px-4 mx-auto rounded-sm block bg-gray-300 hover:bg-gray-400 text-[14px] hover:text-white">Book An Appointment</button>
                    </div>
                </div>
             {/* 2nd Card End */}

                
                   {/* 3rd Card Start*/}
                <div className="bg-gray-100 h-[430px] mt-7 w-80 mx-auto shadow-lg">
                    <div className="">
                        <img className="h-[200px] w-full" src={ img3 } alt="chobi"/>
                    </div>
                    <div className="">
                        <h1 className="font-vibes text-center text-[30px] mt-3">Entry Gate</h1>
                        <p className="font-slop text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </p>
                        <button className="mt-3 font-slop py-2 px-4 mx-auto rounded-sm block bg-gray-300 hover:bg-gray-400 text-[14px] hover:text-white">Book An Appointment</button>
                    </div>
                </div>
             {/* 3rd Card End */}







             </div>
            
            <Footer />
        </div>
    );
}

export default Services;