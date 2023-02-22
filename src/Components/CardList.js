import React from 'react';
import Card from './Card'


const CardList = ({ robots }) => {
    if (true) {
        throw new Error('Noooooooo');

    }
    const cardComponent = robots.map((_user, i)  =>{
        return  <Card 
        key={i}
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}
        />
    });
    return (
        <>
            <div>
                {cardComponent}
            </div>
        </>
    )
}

export default CardList;