import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/navbar/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocation } from "@fortawesome/free-solid-svg-icons"


const Hotel = () => {
  const photos = [
    {
      src : "/Images/Hotel 1/1.jpg"
    },
    {
      src : "/Images/Hotel 1/2.jpg"
    },
    {
      src : "/Images/Hotel 1/3.jpg"
    },
    {
      src : "/Images/Hotel 1/4.jpg"
    },
    {
      src : "/Images/Hotel 1/5.jpg"
    },
    {
      src : "/Images/Hotel 1/6.jpg"
    },
    {
      src : "/Images/Hotel 1/7.jpg"
    },
    {
      src : "/Images/Hotel 1/8.jpg"
    },
    {
      src : "/Images/Hotel 1/9.jpg"
    },
    {
      src : "/Images/Hotel 1/10.jpg"
    },
    {
      src : "/Images/Hotel 1/11.jpg"
    },
    {
      src : "/Images/Hotel 1/12.jpg"
    },
  ];


  return (
    <div>
      <Navbar/>
      <Header type = "list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle"> Kingsford Residences</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation}/>
            <span>1/10, SCENIC VIEW ROAD, Misty Hills, Katumana , 22200 </span>
          </div>
          <span className="hotelDistance">
            Excellent location -500m from Nuwara Eliya
          </span>
          <span className="hotelPriceHighlight">
          Kingsford Residences has been welcoming Booking.com guests since 11 Apr 2017.
          </span>
          <div className="hotelImages">
            {photos.map(photo=>(
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}

          </div>

          <div className="hoteDetails">
            <div className="hotelDetailTexts">
              <h1 className="hotelTitle"> Kingsford Residences</h1>
              <p className="hotelDesc">
                  Located on top of a beautiful hill, only 2.5 km away from Gregory Lake. Kingsford Residences offers comfortable accommodation with beautiful mountain views.
                  All nicely decorated apartments in Kingsford Residences includes two Bedrooms, two Bathrooms with free toiletries , Fully equipped Kitchen fitted with full size Fridge, Microwave, Toaster, Kettle, Cookware, Cutlery etc., Dining suite and Seating area with 108cm LED Television with satellite channels .
                  Each apartment also equipped with Washing machine, Ironing facilities, Heating and Hot water.
                  Free Wi-Fi, onsite parking and drive accommodation available at Kingsford Residences.
                  Hakgala Botanical Garden is 3 km from Kingsford Residences.
                  </p>
            </div>
            <div className="hotelDetailPrice">
              <h1> Perfect for a 9-night stay!</h1>
              <span> Located in the real heart of nuwaraeliya, this property has an Excellent
                location score of 9.8!
              </span>
              <h2> <b>$120</b> (9 nights)
              </h2>
              <button> Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel