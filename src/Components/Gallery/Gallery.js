import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Stage from './Stage';
import PhotoBoth from './PhotoBoth';
import { useState } from 'react';
import EntryGate from './EntryGate';
import DiningTable from './DiningTable';
function Gallery(props) {
  
        const [value, setValue] = useState("stage")
     
            return (
                <div>
                    <Navbar />

                    <div className="container mx-auto text-center">
                        <button className="inline-block hover:bg-gray-300 bg-gray-200 px-4 py-2 m-2 rounded-lg mt-6" onClick={() => setValue("stage")}>Stages</button>
                        <button className="inline-block hover:bg-gray-300 bg-gray-200 px-4 py-2 m-2 rounded-lg mt-6" onClick={() => setValue("photoboth")}>Photo Both</button>
                        <button className="inline-block hover:bg-gray-300 bg-gray-200 px-4 py-2 m-2 rounded-lg mt-6" onClick={() => setValue("gate")}>Entry Gate</button>
                        <button className="inline-block hover:bg-gray-300 bg-gray-200 px-4 py-2 m-2 rounded-lg mt-6" onClick={() => setValue("table")}>Dining Table</button>
                    </div>
                    <div className="">
                        { value === "stage" && <Stage />} 
                        { value === "photoboth" && <PhotoBoth />} 
                        { value === "gate" && <EntryGate />} 
                        { value === "table" && <DiningTable/>} 
                    </div>
           
                    <Footer />
                </div>
            );
        }
    
export default Gallery;