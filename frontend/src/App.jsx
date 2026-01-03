import { useEffect, useState } from "react";
import { API } from "./services/api";
import BiodataForm from "./components/BiodataForm";
import BiodataList from "./components/BiodataList";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await API.get("/biodata");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <BiodataForm onSuccess={fetchData} />
      <BiodataList data={data} />
    </div>
  );
}

export default App;
