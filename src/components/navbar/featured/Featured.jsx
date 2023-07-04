import useFetch from "../../../hooks/useFetch"
import "./featured.css"

const Featured = () => {

  const {data,loading,error} = useFetch("/hotels/countByCity?cities=nuwaraeliya,badulla,kurunegala ")
  
  
  return (
    <div className="featured">
    {loading ? (
     "Loading please wait"
    ):(
       <>
       <div className="featuredItem">
        <img src="/Images/featured/colombo.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">  
        <h1>NuwaraEliya</h1>
        <h2>{data[0]} properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="/Images/featured/ella.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
        <h1>Badulla</h1>
        <h2>{data[1]} properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="/Images/featured/kandy.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
        <h1>Kurunegala</h1>
        <h2>{data[2]} properties</h2>
        </div>
    </div> </>)}
    </div>
  );
};

export default Featured ;