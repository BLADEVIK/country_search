import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import CountryConteiner from "./components/CountryConteiner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountryItem } from "./components/CountryItem";

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<CountryConteiner />} path="/" />
            <Route element={<CountryItem />} path="/:nameCountry" />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
