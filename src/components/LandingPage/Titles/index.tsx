import "./style.css"
interface TitleProps{
    icon:string,
    text:string
}

const Title: React.FC<TitleProps> = ({icon, text}) => {
  return (
    <div className="flex">
      <div className="title">
        <div className="text">
            <img src={icon} />
            <h3>{text}</h3>
        </div>
        <div className="yellowBar"/>
      </div>
    </div>
  )
}

export default Title