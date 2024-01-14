import './style.css'

import arrow from '../../Header/img/footer/arrow-right.svg'
// import imgBG from '../../MainPage/windowNine/img.jpg'
const CommentBox = (props) => {
    return (
        <div className='commentBox' style={{backgroundImage: `url(${props.img})`, height: props.height, flexBasis: props.flexBasis}}>
            <h5 className='commentBoxTitle'>{props.title}</h5>
            <div className='commentBoxBody'>
                <p>{props.text}</p>
                <img src={arrow} alt="" />
            </div>
        </div>
    )
}

export default CommentBox