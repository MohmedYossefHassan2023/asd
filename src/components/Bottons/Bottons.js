import './Bottons.css'

const PraimaryBotton = (props) => {
  return (
    <div className='button Praimary-btn'>
      <a href='/#'>{props.children}</a>
    </div>
  )
}
const SecondaryBottons = () => {
    return (
      <div>SecondaryBottons</div>
    )
  }

export default PraimaryBotton
export {SecondaryBottons}