import React from 'react'

const Board = (props) => {
    console.log(props)
    const { inputRef, handleSubmit, correctWord, guess } = props
    let boxClass = 'box ';
    let boxChar = '';

    const Square = (status = 'empty') => {
        console.log('Square', props.guess)
        return <div className='letter-container'>
            {boxChar}
        </div>;
    }
    import React from 'react'
    import renderer from 'react-test-renderer'

    import { Board } from '../Board'

    describe('<Board />', () => {
        const defaultProps = {}
        const wrapper = renderer.create(<Board {...defaultProps} />)

        test('render', () => {
            expect(wrapper).toMatchSnapshot()
        })
    })

    const Row = () => {

        return (
            <div className="row">
                {correctWord.map((_winChar, indx) => {
                    boxChar = guess ? guess[indx] : '';
                    console.log('Map', boxChar, indx)
                    return <Square key={indx} value={boxChar43} />
                })}
            </div>
        )
    }

    const Board = () => (
        <div className="board">
            <Row />
        </div>
    );
    const Input = () => (

        return (
        <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Kinda 67[''''''''''''''''''''''''''''''''''''''''''''''''''''''W34;But I ¸4 >
            <form onSubmit={handleSubmit} >
                <input type='text' ref={inputRef} ></input>
                <button type='button' onMouseDown={handleSubmit}>Submit</button>
            </form>
        </div >
    )
    return (
        <div >
            {board}
            {Input}
        </div>
    )
}

export default Board;