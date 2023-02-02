import { Products } from "../Products";
import { Container } from "./styles";
import { useGetQuery } from "../../store/reducers/products";
import { Footer } from "../Footer";
import { Shimmer } from "../Shimmer";
import { Header } from "../Header";
import { Typography } from "@mui/material";

export const Home: React.FC = () => {

  const { data, isError, isLoading } = useGetQuery("products");

  return (
    <>
      {isError ? (
        <Typography>
          There was an error...
        </Typography>
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
  );
};