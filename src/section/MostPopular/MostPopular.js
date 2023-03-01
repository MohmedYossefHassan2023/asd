import './MostPopular.css'

import { Card,SectionHeader,SectionWrapper } from '../../components/index'
import MostPopularData from "../../components/Data/MostPopularData copy"


const MostPopular = () => {

    
  const cards=MostPopularData.map(card=>{
return<Card key={card.id} images={card.images} title={card.title} catagory={card.catagory} rate={card.rate} download={card.download}/> 
  })
  

  return ( 
    <>
       <SectionWrapper> 
          <SectionHeader>most popular</SectionHeader> 
          <div className='most-popular-items'>  
         {cards}
          </div>
          </SectionWrapper> 
    </>
  )
}

export default MostPopular