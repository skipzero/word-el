import { React, useState, useRef } from 'react'
import './App.css'
import Board from './Board';

// Helpful functions
// Array.from({length: 5})
// Math.random(10)

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const words = ['ready', 'aware', 'react', 'plane'];
const winningWord = 'ready';
// console.log('Array', guessArray)

const App = (props) => {

    const wordLength = 5;
    const guesses = 6;

    const [word, setWord] = useState('');
    const [guess, setGuess] = useState(0);
    const [tries, setTries] = useState([]);
    const formInput = useRef(undefined)

    const winArray = winningWord.split('');

    const wordSubmit = (e) => {
        e.preventDefault()
        const currWord = formInput.current.value;
        setWord(currWord)
        console.log('onSub', formInput.current.value)

        if (currWord === winningWord) {
            console.log('WINNER!!')
        }


        console.log(tries, guess, word)
        // if (winningWord === word) {

        // }

        if (guess <= 6) {
            setGuess(guess + 1)
        }
    }

    const boardInput = (e) => {
        const boardWord = e.target.value
        setWord(boardWord);
        console.log(boardWord)
    }

    return (
        <div>
            <div>{props.title}</div>
            <Board boardInput={boardInput} correctWord={winArray} handleSubmit={wordSubmit} inputRef={formInput} guess={word} />
        </div>
    )
}

export default App
