import "./propertyList.css"

function PropertyList() {
  return (
    <div className="pList">
     <div className="pListItem">
        <img src="/Images/property/hotel.jpeg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>23</h2>
         </div>
     </div>
     <div className="pListItem">
        <img src="/Images/property/apartment.jpeg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>10</h2>
         </div>
     </div> 
     <div className="pListItem">
        <img src="/Images/property/resort.jpeg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>15</h2>
         </div>
     </div>
     <div className="pListItem">
        <img src="/Images/property/villas.jpeg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Villas</h1>
            <h2>23</h2>
         </div>
     </div>
     <div className="pListItem">
        <img src="/Images/property/cabins.jpeg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>23</h2>
         </div>
     </div>
    </div>
  );
};

export default PropertyList;