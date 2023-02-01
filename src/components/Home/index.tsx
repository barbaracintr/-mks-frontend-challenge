import { Products } from "../Products";
import { Container } from "./styles";
import { useGetPokemonByNameQuery } from "../../store/reducers/products";
import { Footer } from "../Footer";
import { Shimmer } from "../Shimmer";
import { Header } from "../Header";

export const Home: React.FC = () => {
  const { data, isError, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <>
      {isError ? (
        <div>
          There was an error
        </div>
      ) : isLoading ? (
        <Shimmer />
      ) : data ?
        <Container>
          <Header />
          <Products />
          <Footer />
        </Container>
        : null
      }
    </>
  )
};