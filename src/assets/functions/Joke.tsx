import { useState } from 'react';
import Jokes from '../data/Jokes.json';

function Joke(){
    const [JokeCount] = useState(1);
    return (
        Jokes.map( joke => {
            if (joke.id == JokeCount){
                return(
                    <div className="test" key=''>
                        {joke.content}
                    </div>
                )
            }
        })
    )
}


export default Joke;