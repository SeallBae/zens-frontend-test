import {useCookies} from 'react-cookie';
import { useEffect, useState } from 'react';

import '../styles/Body.css';
import Jokes from '../data/Jokes.json';

function Body(){
    const [cookies, setCookie] = useCookies(['FunnyJoke', 'NotFunnyJoke', 'Joke']);
    
    const [jokecontent, setJokeContent] = useState('');

    const [FunnyCount, setFunnyCount] = useState(1);
    const [NotFunnyCount, setNotFunnyCount] = useState(1);
    
    useEffect(() => {
        //set initial value for Joke's cookie
        if(!cookies.Joke){
            setCookie('Joke', 1);
        }
      }, [setCookie]);

    useEffect (() => {
        //update joke when the button click (index changes)
        if (Jokes && Jokes.length > 0 && cookies.Joke <= Jokes.length){
            setJokeContent(Jokes[cookies.Joke-1].content);
        }else if (cookies.Joke > Jokes.length ){
            setJokeContent("That's all the jokes for today! Come back another day!"); //Set jokes to "see you again"
            console.log(cookies.Joke);
        }
    }, [cookies.Joke]) //Trigger when index changes

    const FunnyHandle = () => {
        if(cookies.Joke <= Jokes.length){
            //increase joke count
            const jokeCount = cookies.Joke + 1;
            setCookie('Joke', jokeCount);
            //funny count
            const newCount = FunnyCount + 1;
            setFunnyCount(newCount);
            setCookie ('FunnyJoke', FunnyCount);
        }
    }
    const notFunnyHandle = () => {
        //increase joke count
        if(cookies.Joke < Jokes.length){
            const jokeCount = cookies.Joke + 1;
            setCookie('Joke', jokeCount);
            //not funny count
            const newCount = NotFunnyCount + 1;
            setNotFunnyCount(newCount);
            setCookie ('NotFunnyJoke', NotFunnyCount);
        }    
    }
    return (
        <div className='BodyField'>
            <p className='joke'>{jokecontent}</p>
            <hr className='line'></hr>
            <div className='btn-container'>
                <button onClick={FunnyHandle}>This is Funny!</button>
                <button onClick={notFunnyHandle}>This is not funny.</button>
            </div>
        </div>
    )
}
export default Body;