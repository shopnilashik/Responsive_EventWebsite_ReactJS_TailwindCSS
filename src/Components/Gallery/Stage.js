import React from 'react';
import img1 from "../Images/Stages/stage1.JPG"
import img2 from "../Images/Stages/stage2.JPG"
import img3 from "../Images/Stages/stage3.JPG"
import img4 from "../Images/Stages/stage4.JPG"
import img5 from "../Images/Stages/stage5.JPG"
import img6 from "../Images/Stages/stage6.JPG"
import img7 from "../Images/Stages/stage7.JPG"
import img8 from "../Images/Stages/stage8.JPG"
import img9 from "../Images/Stages/stage9.JPG"
import img10 from "../Images/Stages/stage10.JPG"
import img11 from "../Images/Stages/stage11.JPG"
import img12 from "../Images/Stages/stage12.JPG"
import img13 from "../Images/Stages/stage13.JPG"
import img14 from "../Images/Stages/stage14.JPG"
import img15 from "../Images/Stages/stage15.JPG"
import img16 from "../Images/Stages/stage16.JPG"
function Stage(props) {
    const data = [
        {  
            id:1,
            images: img1
        },
         {  
            id:2,
            images: img2
        },
          {  
            id:3,
            images: img3
        },
           {  
            id:4,
            images: img4
        },
           ,
           {  
            id:5,
            images: img5
        },
           ,
           {  
            id:6,
            images: img6
        },
           ,
           {  
            id:7,
            images: img7
           },
           ,
           {  
            id:8,
            images: img8
        },
           ,
           {  
            id:9,
            images: img9
           },
           ,
           {  
            id:10,
            images: img10
           },
           ,
           {  
            id:11,
            images: img11
           },
           ,
           {  
            id:12,
            images: img12
           },
           ,
           {  
            id:13,
            images: img13
        },
            {  
            id:14,
            images: img14
            }
            ,
            {  
            id:15,
            images: img15
            }
            ,
            {  
            id:16,
            images: img16
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

export default Stage;