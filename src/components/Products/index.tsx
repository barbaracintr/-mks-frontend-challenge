import "./styles";
import { useGetPokemonByNameQuery } from "../../store/reducers/products";
import { Product } from "../Product";
import { BoxProductList, List } from "./styles"

export const Products: React.FC = () => {

  const { data } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <>
      <BoxProductList>
        <List>
          {data?.products.map((product: any) =>
            <Product
              key={product.id}
              productProps={product}
            />
          )}
        </List>
      </BoxProductList>
    </>
  );
};