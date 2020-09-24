import React from 'react';
import FlowerHere from './FlowerShow';

function Flower () {
    const flowers = [{
        id: 1,
        name: "Rose",
        
    }, 
    {
        id: 2,
        name: "Bleeding Heart"
    }, 
    {
        id: 3,
        name: "Water Lily"
    },
    {
        id: 4,
        name: "Cherry Blossom"
    }
]
    const flowerList = flowers.map(flower => <FlowerHere key={flower.id} flower={flower}/>)
    return (
      <div>
          {flowerList}
      </div>
           
      )
}

export default Flower;