import { useEffect } from "react";

function PricePredictionPage() {
  useEffect(() => {
    window.location.replace(
      "https://shubham7204-final-year-cpp-project-crypto-main-mcgwdf.streamlit.app/"
    );
  });
  return () => useEffect;
}
export default PricePredictionPage;
