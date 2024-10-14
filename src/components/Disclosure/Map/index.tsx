import "./style.css"

const Map = () => {
  return (
    <div className="mapDiv container">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.7470944032552!2d-45.706605599999996!3d-22.2496725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cba251a4e6bbc9%3A0xca393c55858f552f!2sAv.%20Dr.%20Delfim%20Moreira%2C%20199%20-%20Centro%2C%20Santa%20Rita%20do%20Sapuca%C3%AD%20-%20MG%2C%2037540-000!5e0!3m2!1spt-BR!2sbr!4v1728827925810!5m2!1spt-BR!2sbr" 
            className="map"
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  )
}

export default Map