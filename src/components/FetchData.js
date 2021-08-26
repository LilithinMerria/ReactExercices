import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = () => {
    const [posts, setPost] = useState({});
    const [id, setId] = useState(1);
    const [buttonFetch, setButtonFetch] = useState(1);

    const handleButton = () => {
        setButtonFetch(id);
    }

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${buttonFetch}`)
        .then(res => {
            console.log(res);
            setPost(res.data);

        }).catch(err => {
            console.log(err)
        })
    }, [buttonFetch])

    return (
        <div>
            <input type="number" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick ={handleButton}>Fetch Data</button>
            {posts.title}
        {/*    <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
                </ul>*/}
        </div>
    )
}

export default FetchData; 