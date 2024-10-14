import './style.css'
import acaisImg from "./../../assets/acais.png"
import locationImg from "./../../assets/icons/location.svg"
import Map from "./Map"
import { useContext } from 'react'
import { LandingPageContext } from '../../context/LandingPage'

const Disclosure=()=>{
  const { currentDay } = useContext(LandingPageContext)
  return (
    <div id='disclosure'>
        <div className="container">
            <div className="gridRow1">
                <div className='slogan'>
                    <div className='message1'>
                      <p>{currentDay}</p>
                      <span id='span'>é um ótimo dia para tomar açaí!</span>
                    </div>
                    <div className='message2'>
                      <p>Já pediu o seu?</p>
                      <button>Faça seu pedido</button>
                    </div>
                </div>
                <div className='acaiImage'>
                    <img src={acaisImg}/>
                </div>
            </div>
            <div className="gridRow2">
              <div className='message1'>
                <p>Entrega em toda a cidade!</p>
              </div>
              <div className='message2'>
                <img src={locationImg}/>
                <div className='locationText'>
                  <h4>Av. Dr. Delfim Moreira, 199 - Centro</h4>
                  <h4>Santa Rita do Sapucaí - MG</h4>
                </div>
              </div>
            </div>
        </div>
        <Map/>
    </div>
  )
}

export default Disclosure