import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCalendar, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {
  const [date, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  return (
    <div className="header">
      <div className="headerContainer">

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
        <h1 className="headderTitle">Find your next stay.</h1>
        <p className="headerDescription">Search low prices on hotels, homes and much more...</p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItems">
          <FontAwesomeIcon icon={faBed} className="headerIcon"/>
          <input type="text"
           placeholder ="Where are you going?" 
          className="headerSearchInput"/>
          </div>
          <div className="headerSearchItems">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
          <span className="headerSearchText"> date to date</span>
            
          <DateRange
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
          />
          </div>
          <div className="headerSearchItems">
          <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
          <span className="headerSearchText"> 2 Adults 2 Children 1 room</span>
          </div>
          <div className="headerSearchItems">
          <button className="headerBtn">Search</button>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Header;