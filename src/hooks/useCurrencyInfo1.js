import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!currency) return; // Avoid making unnecessary requests if currency is not provided

    const fetchCurrencyData = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const json = await res.json();
        setData(json[currency]);
        console.log(json); // Log the fetched data here
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchCurrencyData(); // Call the async function
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
