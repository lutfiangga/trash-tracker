import Button from "../components/button";
import Header from "../components/header"
import Introduction from "../components/intro"

const Home = () => {

return (
    <div className="bg-yellow-400">
    <Header/>
    <Introduction name="Lutfi"/>
    <Introduction name="Ahmad"/>
    <Button name="Test"/>
    </div>
);
}

export default Home