import React, {useState, useEffect} from "react";

const PleasureFunction = ({login}) => {
    const [pleasure, setPleasure] = useState("You are a virgin and innocent");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (!login) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData)
            .then(() => setLoading(false))
            .then(setError)
    }, [login]);

    if (loading) return <div>loading ...</div>;
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (!data) return null;

    

        return(
            <div>
                <h2>{data.login}</h2>
                <img src={data.avatar_url}/>
                <h3>{pleasure}</h3>
                <h3>Pick your pleasure pill</h3>
                <button onClick={() => setPleasure("You lost your virginity")}>Lust</button>
                <button onClick={() => setPleasure("You are going deep inside the lusty world")}>HyperLust</button>
                <button onClick={() => setPleasure("You are a slut now")}>MegaLust</button>
                <button onClick={() => setPleasure("You regain your virginity")}>calm</button>
            </div>
        )
};

export default PleasureFunction;
