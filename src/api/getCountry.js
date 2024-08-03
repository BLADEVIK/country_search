export default function GetCountry({ country }) {
  return fetch(`https://restcountries.com/v3.1/name/${country}`).then(
    (res) => {
      if (res.status === 404) {
        return console.log("Нет такой страны");
      } else {
        return res.json();
      }
    }
  );
}
