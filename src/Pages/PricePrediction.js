import { useEffect } from "react";

function PricePredictionPage() {
  useEffect(() => {
    window.open(
      "https://cryptomind-predictor.streamlit.app/",
      "_blank"
    );
  }, []);
  return useEffect;
}

export default PricePredictionPage;
