import { useEffect, useState } from "react";

import "./CountryConteiner.css";
import { getCountryAll } from "../api/getCountry";
import { Link } from "react-router-dom";
import { List, ListItem, Spinner } from "@chakra-ui/react";

export default function CountryConteiner() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getCountryAll().then((res) => {
      setData(res);
      setIsLoading(false);
      console.log(res);
    });
  }, []);

  return (
    <>
      {isLoading && <Spinner w={20} h={20} />}
      <h1>Список стран:</h1>
      {!isLoading && (
        <List className="listConteiner">
          {data.map((el) => (
            <ListItem key={el.area + el.population}>
              <Link to={`/` + el.name.common}>{el.name.common}</Link>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
