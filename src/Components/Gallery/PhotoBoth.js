import React from 'react';
import img1 from "../Images/Stages/pb1.JPG"
import img2 from "../Images/Stages/pb2.JPG"
import img3 from "../Images/Stages/pb3.JPG"
import img4 from "../Images/Stages/pb4.JPG"
import img5 from "../Images/Stages/pb5.JPG"

function PhotoBoth(props) {
    const data = [
        {
            id: 1,
            images: img1
        },
        {
            id: 2,
            images: img2
        },
        {
            id: 3,
            images: img3
        },
        {
            id: 4,
            images: img4
        },
        ,
        {
            id: 5,
            images: img5
        }
    ]
    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 ">
             {
                data.map((item,index) => (
                    <div className="mt-8 w-[500px]" key={ index }>
                        
                       <img className="lg:w-[400px] lg:h-[300px] mx-3" src={ item.images} alt="chobi" />
             </div>
          ))
            }
        </div>
    );
}

export default PhotoBoth;