import React from 'react';
import img1 from '../Images/bride_1.jpg';
import img2 from '../Images/bride_2.jpg';
import img3 from '../Images/bride_3.jpg';
import img4 from '../Images/bride_4.jpg';
function Body(props) {
    return (
        <div>
            <h1 className="text-center text-4xl font-vibes mt-40">Happy Couple</h1>
            <p className="text-center  mx-auto sm:w-80 mt-10 font-vibes text-2xl ">Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat</p>
            
            <div className="flex flex-col">
            
            {/* Mid Content */}
            <div className="lg:grid lg:grid-cols-2 lg:mt-34  h-56 mx-auto mt-10 grid">
              {/* left content */}
                <div className="lg:w-full h-[400px]">
                    <img src={img1} />
                    
                </div>
                {/* right content */}
                <div className="lg:w-full lg:mt-36 bg-gray-50 h-[300px] shadow-lg">
                    <h2 className="text-4xl text-center font-vibes mt-10">Rani Shaheba</h2>
                <p className="font-slop text-sm text-center mt-5 w-80 mx-auto">A collection of textile samples lay spread out on the table Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine And housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright </p>
                </div>
            
            </div>

                {/* 2nd Content */}

            <div className="mt-[500px] first-letter:lg:grid lg:grid-cols-2  h-56 mx-auto  grid">
              {/* left content */}
                <div className="lg:w-full  h-[430px]">
                    <img src={img2} />
                    
                </div>
                {/* right content */}
                <div className="lg:w-full lg:mt-36 bg-gray-50 h-[300px] shadow-lg">
                    <h2 className="text-4xl text-center font-vibes mt-10">Faruha Haque</h2>
                <p className="font-slop text-sm text-center mt-5 w-80 mx-auto">A collection of textile samples lay spread out on the table Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine And housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright </p>
                </div>
            
            </div>
     
                

                {/* 3rd Content */}
            <div className="mt-[500px] first-letter:lg:grid lg:grid-cols-2  h-56 mx-auto grid">
              {/* left content */}
                <div className="lg:w-full  h-[430px]">
                    <img src={img3} />
                    
                </div>
                {/* right content */}
                <div className="lg:w-full lg:mt-36 bg-gray-50 h-[300px] shadow-lg">
                    <h2 className="text-4xl text-center font-vibes mt-10">Taiyaba Tabassum</h2>
                <p className="font-slop text-sm text-center mt-5 w-80 mx-auto">A collection of textile samples lay spread out on the table Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine And housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright </p>
                </div>
            
            </div>

           {/* 4th Content*/}
             <div className="mt-[500px] first-letter:lg:grid lg:grid-cols-2  h-56 mx-auto  grid">
              {/* left content */}
                <div className="lg:w-full  h-[430px]">
                    <img src={img4} />
                    
                </div>
                {/* right content */}
                <div className="lg:w-full lg:mt-36 bg-gray-50 h-[300px] shadow-lg">
                    <h2 className="text-4xl text-center font-vibes mt-10">Nazia Zahan</h2>
                <p className="font-slop text-sm text-center mt-5 w-80 mx-auto">A collection of textile samples lay spread out on the table Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine And housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright </p>
                </div>
            
            </div>
        
                </div>
        </div>
        
    );
}

export default Body;