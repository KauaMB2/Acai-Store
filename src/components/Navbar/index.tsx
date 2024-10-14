import './style.css'
import Logo1 from "./../../assets/Logo1.png"
import facebookIcon from "./../../assets/icons/facebook.svg"
import deliveryIcon from "./../../assets/icons/delivery.svg"
import ifoodIcon from "./../../assets/icons/ifood.svg"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logoDiv'>
            <img src={Logo1}/>
        </div>
        <div className='networksIcons'>
            <img src={facebookIcon}/>
            <img src={deliveryIcon}/>
            <img src={ifoodIcon}/>
        </div>
    </nav>
  )
}

export default Navbar