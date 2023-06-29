import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCalendar, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  // open the Calender
  const [openDate,setOpenDate] = useState(false)
  
  const [date, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

 // adult children room check
  const [destination,setDestination] = useState("");
  const [openOptions,setOpenOptions] = useState(false);
  const [options,setOptions] = useState({
    adults : 1,
    children : 0,
    room : 1,

  });

  const navigate = useNavigate ()

  // edit adult children & room increment and decrement
  const  handleOption =(name , operation) =>{
    setOptions(prev=>{
      return{
      ...prev,
      [name]: operation ==="i" ? options[name] +1 : options[name] -1,
    };
  });
  };

  const handleSearch =()=>{
    navigate("/hotels",{state:{destination,date,options}} )
  }

  return (
    <div className="header">
      <div className={type ==="list" ? "headerContainer listMode" :"headerContainer"}>

        <div className="headerList">
        <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar} />
        <span>Car rentals</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed}/>
        <span>Attraction</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport taxis</span>
        </div>
      
      </div>
        { type !== "list" &&
        <> 
        <h1 className="headderTitle">Find your next stay.</h1>
        <p className="headerDescription">Search low prices on hotels, homes and much more...</p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItems">
          <FontAwesomeIcon icon={faBed} className="headerIcon"/>
          <input type="text"
           placeholder ="Where are you going?" 
          className="headerSearchInput"
          onChange={e=>setDestination(e.target.value)}
          />
          </div>
          <div className="headerSearchItems">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
          <span onClick ={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyy"
          )} to ${format(date[0].endDate,"MM/dd/yyy")}`} </span>
          
          
          
          {openDate &&<DateRange
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />}
          
          </div>
          <div className="headerSearchItems">
          <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
          <span  onClick={()=>setOpenOptions(!openOptions)}className="headerSearchText">{`${options.adults} adult ·  ${options.children} children · ${options.room} room`}</span>
            { openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                <button
                disabled={options.adults <= 1}
                className="optionCounterButton" onClick={()=>handleOption("adults" , "d")}>-</button>
                <span className="optionCounterNumber">{options.adults}</span>
                <button className="optionCounterButton" onClick={()=>handleOption("adults" , "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                <button 
                disabled={options.children <= 0}
                className="optionCounterButton" onClick={()=>handleOption("children" , "d")}>-</button>
                <span className="optionCounterNumber">{options.children}</span>
                <button className="optionCounterButton"onClick={()=>handleOption("children" , "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                <button 
                disabled ={options.room <=1}className="optionCounterButton" onClick={()=>handleOption("room" , "d")}>-</button>
                <span className="optionCounterNumber">{options.room}</span>
                <button className="optionCounterButton"onClick={()=>handleOption("room" , "i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItems">
          <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div> </>}
        </div>
    </div>
  );
};

export default Header;