import './Hero.css'
import {PraimaryBotton} from'../../components/index'

const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subTitle'>wellcom to cybrog</h6>
            <h4 className='hero-Title'> <em>browser</em>  our popular games here</h4>
        </div>

        <PraimaryBotton>Browser now</PraimaryBotton>
        <div className='main-button'> </div>
        
    </div>
  )
}

export default Hero