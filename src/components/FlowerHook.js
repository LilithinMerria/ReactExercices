import React, {useState} from 'react'; 


const AddFlower = () => {

    const [flowers, setFlower] = useState([]);

    // function to add flowers
    const flowerLike = () => {
        setFlower([... flowers, { 
            id: flowers.length,
            value: flowers.value 
        }]);
    }



    return(
        <div>
           <input type="text" placeholder="Add Flower" value={flowers.value}/>
            <button onClick={flowerLike}>Add A Flower</button>
            <ul>
                {flowers.map(flower =>(<li key={flower.id}>{flower.value}</li>))}
            </ul>
        </div>
    )
}

export default AddFlower;