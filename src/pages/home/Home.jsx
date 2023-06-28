import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/navbar/featured/Featured";
import FeaturedProperties from "../../components/navbar/featuredProperties/FeaturedProperties";



import Header from "../../components/navbar/header/Header";
import PropertyList from "../../components/navbar/propertyList/PropertyList";
import "./home.css"

const Home = () => {
  return (
    <div> 

      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle"> Browse by property type </h1>
        <PropertyList/>
        <h1 className="homeTitle"> Homes guests love </h1>
        <FeaturedProperties/>
      </div>
    </div>
  );
};

export default Home