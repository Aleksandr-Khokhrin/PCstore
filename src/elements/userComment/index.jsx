
import StarBar from '../starBar/indes';


import img from './img.svg'
import './style.css'


const Comment = (props) => {
    return(
        <div className='commentProductBox'>
            <div className='commentHeader'>
                <div className='commentImg'>
                    <img src={img} alt="" />
                </div>
                <div className='commentAutorBox'>
                    <p className='commentAutor'>{props.autor}</p>
                    <StarBar active={false} sum={props.sum}/>
                    <div className='commentText high'>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
            <div className='commentText low'>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Comment;