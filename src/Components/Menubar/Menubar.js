import React from 'react';
function Menubar(props) {
    window.addEventListener('DOMContentLoaded', () => {
        const menuBtn = document.querySelector('#menu-btn')
        const dropdown = document.querySelector('#dropdown')

        menuBtn.addEventListener('click', () => { 
          dropdown.classList.toggle('hidden')
          dropdown.classList.toggle('flex')
        })
    })
    return (
        <div>
       <button className="bg-blue-400 p-5 block m-5 rounded-lg" id="menu-btn">Menu</button>
       
            <div className=" text-center flex-col w-32 hidden" id="dropdown">
                <a href="#" className="hover: bg-blue-800 p-5 mt-2 " >Home</a>
                <a href="#" className="hover: bg-blue-800 p-5 mt-2 " >Service</a>
                <a href="#" className="hover: bg-blue-800 p-5 mt-2 " >Contact</a>
                <a href="#" className="hover: bg-blue-800 p-5 mt-2 " >Address</a>
            </div>
        </div>
    );
}

export default Menubar;