import solution from './../libs/words'
import Cell from './Cell';

export const Row = () => {

    const cells = Array.from(Array(solution.length))

    return (
        <div className='row-empty'>
            {cells.map((cell, i) => {
                <Cell key={i} />
            })}
        </div>
    )

}