import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';

function Home(props) {
    return (
        <div>
            
            <Navbar />
            <Banner />
            <Body />
            
            <Footer />
        </div>
    );
}

export default Home;