import { useEffect, useState } from "react";
import { getCountry } from "../api/getCountry";
import { useParams } from "react-router-dom";
import { Spinner, Container, Text } from "@chakra-ui/react";
import "./CountryItem.css";

export const CountryItem = () => {
  const { nameCountry } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    getCountry(nameCountry).then((res) => {
      setData(res[0]);
      setIsLoading(false);
      console.log(res);
    });
  }, [nameCountry]);
  return (
    <>
      {isLoading && <Spinner w={20} h={20} />}

      <Container centerContent maxW="md" color="black">
        <img
          className="flagSize"
          src={data && data.flags.svg}
          alt={!data ?  "" : "Country image flag"}
        />
        <Text fontSize="25px" color="purple">
          <h4>Страна: {data && data.name.common}</h4>
          <h4>Континент: {data && data.continents[0]}</h4>
          <h4>Регион: {data && data.region}</h4>
          <h4> Столица: {data && data.capital}</h4>
        </Text>
      </Container>
    </>
  );
};
