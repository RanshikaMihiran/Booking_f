import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
          < img src="/Images/featuredProperties/mirissa.webp" alt="" className="fpImg" />
          <span className="fpName"> Hotel Mirissa</span>
          <span className="fpCity"> Mirissa</span>
          <span className="fpPrice"> Starting from $100</span>
            <div className="fpRating">
            <button> 7.5</button> 
            <span>Excellent</span>  
          </div>                
        </div>
        <div className="fpItem">
          < img src="/Images/featuredProperties/nuwara eliya.webp" alt="" className="fpImg" />
          <span className="fpName"> Hotel Nuwara Eliya</span>
          <span className="fpCity"> Nuwara Eliya</span>
          <span className="fpPrice"> Starting from $175</span>
            <div className="fpRating">
            <button> 7.5</button> 
            <span>Excellent</span>  
          </div>                
        </div>
        <div className="fpItem">
          < img src="/Images/featuredProperties/colombo.webp" alt="" className="fpImg" />
          <span className="fpName"> Hotel Colombo</span>
          <span className="fpCity"> Colombo</span>
          <span className="fpPrice"> Starting from $150</span>
            <div className="fpRating">
            <button> 7.5</button> 
            <span>Excellent</span>  
          </div>                
        </div>
        <div className="fpItem">
          < img src="/Images/featuredProperties/hikkaduwa.webp" alt="" className="fpImg" />
          <span className="fpName"> Hotel Hikkaduwa</span>
          <span className="fpCity"> Hikkaduwa</span>
          <span className="fpPrice"> Starting from $120</span>
            <div className="fpRating">
            <button> 7.5</button> 
            <span>Excellent</span>  
          </div>                
        </div>
      </div>
        
      
      
      
      

      
  )
}

export default FeaturedProperties