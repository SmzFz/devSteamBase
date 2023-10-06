import GameCard from "../components/cards/gameCard/gameCard";
import SaleCard from "../components/cards/saleCard/saleCard";
import Container from "../components/container/container";
import Subtitle from "../components/forms/subtitle/subtitle";
import Nav from "../components/nav/Nav";

import "./App.css";
import { cartState } from "../atoms/cart";
import {useRecoilState} from "recoil";

const App = () => {
  const [cart, setCart] = useRecoilState(cartState);


  const handleAddProduct = (info) => {
    setCart([...cart, info]);

  };
  console.log(cart);
  return (
    <div>
      <Nav />

      <Container>
        <Subtitle>
          Promoções
        </Subtitle>
        <div className="saleContainer">
          <SaleCard
          title={"League Of Legends"}
          fullPrice={199.90}
          discount={50}
          onAdd={() => handleAddProduct({
            name: "League of Legends",
            price: 199.99 - 199.99*0.5,
            img: "League of Legends",
          })
        }
           />
           <SaleCard
                     title={"Dota 2"}
                     fullPrice={199.90}
                     discount={40}
                     onAdd={() => handleAddProduct({
                      name: "Dota 2",
                      price: 199.99 - 199.99*0.4,
                      img: "Dota 2",
                    })
                  }
            />
                       <SaleCard
                     title={"Valorant"}
                     fullPrice={199.90}
                     discount={30}
                     onAdd={() => handleAddProduct({
                      name: "Valorant",
                      price: 199.99 - 199.99*0.3,
                      img: "Valorant",
                    })
                  }
            />
        </div>
            <div className="gameSession"> 
        <Subtitle> Outros Jogos </Subtitle>
        <div className="gameContainer">
          <GameCard
          title={"CSGO"}
          info={"Ação, estratégia, multijogador"}
          price={99.90}
          onAdd={() => handleAddProduct({
            name: "Counter Strike: Global Offensive",
            price: 199.99 - 199.99*0.3,
            img: "CSGO",
          })
        }

          >Counter Strike: Global Offensive</GameCard>
                    <GameCard
          title={"rocket"}
          info={"Ação, esportivo, multijogador"}
          price={99.90}
          onAdd={() => handleAddProduct({
            name: "Rocket League",
            price: 199.99 - 199.99*0.3,
            img: "rocket",
          })
        }

          >Rocket League</GameCard>
                    <GameCard
          title={"assassino"}
          info={"Ação, estratégia, história"}
          price={99.90}
          onAdd={() => handleAddProduct({
            name: "Assasin's Creed",
            price: 199.99 - 199.99*0.3,
            img: "rocket",
          })
        }

          >Assasin's Creed</GameCard>
        </div>

            </div>
       
      </Container>
    </div>
  );
};

export default App;
