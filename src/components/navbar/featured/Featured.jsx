import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
    <div className="featuredItem">
        <img src="/Images/featured/colombo.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">  
        <h1>Colombo</h1>
        <h2>123 properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="/Images/featured/ella.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
        <h1>Ella</h1>
        <h2>123 properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="/Images/featured/kandy.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
        <h1>kandy</h1>
        <h2>123 properties</h2>
        </div>
    </div>
    </div>
  )
}

export default Featured