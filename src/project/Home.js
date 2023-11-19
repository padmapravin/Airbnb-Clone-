import React from 'react';
import './Home.css';
import { Card } from '@material-ui/core';
import Cardd from './cardd';
// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
           

            <div className='home__section'>
            <Cardd
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="₹5500/night"
            />
            <Cardd
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="₹5500/night"
            />
            <Cardd
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="₹5500/night"
            />
            
            </div>
            <div className='home__section'>
            <Cardd
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="₹6000/night"
            />
            <Cardd
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Radisson"
                description="Enjoy the amazing sights of Salem with this stunning penthouse"
                price="₹7000/night"
            />
            <Cardd
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="₹5500/night"
            />
           
           
            </div>
            <div className='home__section'>
            <Cardd
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="₹6000/night"
            />
            <Cardd
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Radisson"
                description="Enjoy the amazing sights of Salem with this stunning penthouse"
                price="₹7000/night"
            />

            <Cardd
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Radisson"
                description="Enjoy the amazing sights of Salem with this stunning penthouse"
                price="₹7000/night"
            />
            
            
           
            </div>
        </div>
    )
}

export default Home
