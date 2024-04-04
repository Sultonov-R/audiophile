import './index.css';

function HeaderB(props) {

    const {title} = props

  return (
    <div className='headerB_page'>
  <h1>{title}</h1>
    </div>
  )
}

export default HeaderB