import Card from './Card.jsx';
import {robots} from '../robots.js'
import React,{useState} from 'react';
import Scroll from './Scroll.jsx';

function CardList(){
     
    const [search, setSearch] = useState("")
    
    const cardArray = robots.filter((item) => {
        return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
    }).map((item) => {
        return <Card 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            email={item.email}
            />
    })

  return (
    <div>
        <div className="pa2"> 
            <input 
            className="pa3 ba b--green bg-lightest-blue br3" 
            type="search" 
            placeholder="Search Robots..." 
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
            <Scroll>
                {cardArray}
            </Scroll>
      
    </div>
  )
}

export default CardList;