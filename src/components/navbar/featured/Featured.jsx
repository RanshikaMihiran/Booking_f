import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
    <div className="featuredItem">
        <img src="/Images/colombo.jpg" alt="" className="featuredImg" />
        <h1>Colombo</h1>
        <h2>123 properties</h2>
    </div>
    <div className="featuredItem">
        <img src="/Images/ella.jpg" alt="" className="featuredImg" />
        <h1>Ella</h1>
        <h2>123 properties</h2>
    </div>
    <div className="featuredItem">
        <img src="/Images/kandy.jpg" alt="" className="featuredImg" />
        <h1>kandy</h1>
        <h2>123 properties</h2>
    </div>
    </div>
  )
}

export default Featured