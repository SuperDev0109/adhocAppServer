import Header from '../components/layouts/header/header';
import Footer from '../components/layouts/footer/footer';
import Select from '../components/sections/select/select';
import ShowRestaurant from '../components/sections/showrestaurant/showrestaurant';
import './screen.scss';
const Home = () =>{
    return(
        <div className="container-fluid screen container-fluid p-0">
            <Header></Header>
            <Select></Select>
            <ShowRestaurant></ShowRestaurant>
            <Footer></Footer>
        </div>
    );
};
export default Home;