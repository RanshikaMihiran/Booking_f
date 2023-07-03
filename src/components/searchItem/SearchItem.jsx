import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="serachItem">
      <img src="/Images/SerachItem/hotel1.webp" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Pahanya Inn</h1>
        <span className="siDistance">500m from Center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitles"> Studio Apartment with Air Conditioning</span>
        <span className="siFeatures"> Entire Studio | bathroom | 21m2 full bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className=" ">You can cansel later, So lock in this grwat price today</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsText">
          <span className="siPrice">$100</span>
          <span className="siTaxOp">Include taxtes and fees</span>
          <button className="siCheckButton"> See availability</button>
        </div>
      </div>

      
    </div>
    
  )
}

export default SearchItem