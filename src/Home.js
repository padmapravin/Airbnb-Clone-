import React, { useState } from 'react';
import './Home.css';
import { Card } from '@material-ui/core';
import Cardd from './cardd';

function Home() {
    // State variables for search criteria
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    // Your card data
    

    const cardData = [
        {
            src: "https://media.nomadicmatt.com/2018/apartment.jpg",
            title: "Adhiyaman Palace",
            description: "A comfortable stay like the where you fell comfortable",
            price: "₹5500/night",
            date: "2023-11-20",
            location: "Bangalore"
        },
        {
            src: "https://media.nomadicmatt.com/2018/apartment.jpg",
            title: "Radisson",
            description: "Make your day a fabulous one with our fabulous hotel",
            price: "₹6500/night",
            date: "2023-11-30",
            location: "Salem"
        },
        {
            src: "https://media.nomadicmatt.com/2018/apartment.jpg",
            title: "Vijaya Hotel",
            description: "Superhost with great amenities and a fabulous shopping complex nearby",
            price: "₹9500/night",
            date: "2023-11-30",
            location: "Bangalore"
        },
        {
            src: "https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",
            title: "chenny's Gateway",
            description: "Hotel with high facility like free wifi and great comfotness",
            price: "₹4500/night",
            date: "2023-11-25",
            location: "Chennai"
        },
        {
            src: "https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",
            title: "Hotel Marina",
            description: "Beautiful sight of the marina beach",
            price: "₹8500/night",
            date: "2023-12-07",
            location: "Chennai"
        },
        {
            src: "https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",
            title: "Grand estancia",
            description: "Superhost with great amenities and a fabulous shopping complex nearby",
            price: "₹11500/night",
            date: "2023-12-13",
            location: "Coimbatore"
        },
        {
            src: "https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",
            title: "Residency Tower",
            description: "Clean hotel with great ambiance",
            price: "₹7500/night",
            date: "2023-11-27",
            location: "Coimbatore"
        },
        {
            src: "https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",
            title: "Holiday Residency",
            description: "A place to relax peacefully",
            price: "₹6500/night",
            date: "2023-11-30",
            location: "Coimbatore"
        },
        {
            src: "https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",
            title: "Hotel Rammus",
            description: "Hotel where you can feel your home",
            price: "₹8500/night",
            date: "2023-11-12",
            location: "Coimbatore"
        },
        // Add more card data as needed
    ];

    // State variable for filtered results
    const [filteredResults, setFilteredResults] = useState(cardData);

    const applyFilters = () => {
        // Filter card data based on user input
        const filteredCards = cardData.filter((card) => {
            const locationMatch = !location || card.location.toLowerCase().includes(location.toLowerCase());
            const dateMatch =  !date || card.date === date; // You may need to modify this based on your specific requirements
            const priceMatch = !minPrice || !maxPrice || (parseInt(card.price.slice(1)) >= minPrice && parseInt(card.price.slice(1)) <= maxPrice);

            return locationMatch && dateMatch && priceMatch;
        });
        

        // Update state with filtered results or all cards if no filters are specified
        setFilteredResults(filteredCards.length > 0 ? filteredCards : cardData);
      
    };

    return (
        <div className='home'>
            {/* Search Form */}
            <form style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '20px', flex: '1' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '16px' }}>
                        Location:
                    </label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                

                <div style={{ marginRight: '20px', flex: '1' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '16px' }}>
                        Date:
                    </label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>

                <div style={{ marginRight: '20px', flex: '1' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '16px' }}>
                        Price Range:
                    </label>
                    <div style={{ display: 'flex' }}>
                        <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} style={{ flex: '1', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '5px' }} />
                        <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} style={{ flex: '1', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                </div>

                <button type="button" onClick={applyFilters} style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007BFF', color: '#fff', cursor: 'pointer' }}>
                    Apply Filters
                </button>
            </form>


            {/* Display Filtered Listings */}
            <div className='container'>
                {filteredResults.length === 0 ? (
                    <p>No matching listings found.</p>
                ) : (
                    filteredResults.map((card, index) => (
                        <Card className='card__box' key={index}>
                            <Cardd
                                src={card.src}
                                title={card.title}
                                description={card.description}
                                price={card.price}
                                date={card.date}
                                location={card.location}
                              
                            />
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}

export default Home;
