import SaleCard from "../components/cards/saleCard/saleCard";
import Container from "../components/container/container";
import Subtitle from "../components/forms/subtitle/subtitle";
import Nav from "../components/nav/Nav";

import "./App.css";

const App = () => {
  return (
    <div>
      <Nav />

      <Container>
        <Subtitle>
          promoções
        </Subtitle>
        <div className="saleContainer">
          <SaleCard
          title={"League Of Legends"}
          fullPrice={199.90}
          discount={50}
           />
           <SaleCard
                     title={"Dota 2"}
                     fullPrice={199.90}
                     discount={40}
            />
                       <SaleCard
                     title={"Valorant"}
                     fullPrice={199.90}
                     discount={30}
            />
        </div>
      </Container>
    </div>
  );
};

export default App;
