import { useEffect, useState } from "react";
import axios from "axios";
import style from "./App.module.css";

function App() {
  const [arrCurrencies, setArrCurrencies] = useState([]);
  const [activCurrency, setActivCurrency] = useState("Select Occupation");
  const [flag, setFlag] = useState(true);

  async function getData() {
    const response = await axios.get(
      "https://www.nbrb.by/API/ExRates/Currencies"
    );
    setArrCurrencies(response.data);
  }

  function getActivCurrency(e) {
    setActivCurrency(e.target.textContent);
    setFlag(!flag);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div onClick={() => setFlag(!flag)} className={style.wrapper}>
        <p>{activCurrency}</p>
        <div className={style.img}></div>
      </div>

      {flag ? (
        <div className={style.list}>
          {arrCurrencies.map((el) => (
            <p onClick={getActivCurrency}>{el.Cur_Name}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
