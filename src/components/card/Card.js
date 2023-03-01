import './Card.css'



const Card = (props) => {
  return (
    <div className='most-popular-item'>
            <div className='card-wrapper' >
            <img className='most-popular-item-images'src={props.images} />
            <div className='most-popular-item-content'>
            <h4 className='most-popular-item-title'>{props.title} <br/>
            <span>{props.catagry}</span> </h4>
            <ul>
            <li> <span>{props.download}</span></li>
            <li> <span>{props.rate}</span></li>
            </ul>
           
           </div> 
            </div> 
           
            </div>
  )
}

export default Card