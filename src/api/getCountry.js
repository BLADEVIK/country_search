export  function getCountry( country ) {
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

export  function getCountryAll() {
  return fetch(`https://restcountries.com/v3.1/all`).then(
    (res) => {
      if (res.status === 404) {
        return console.log("Нет такой страны");
      } else {
        return res.json();
      }
    }
  );
}