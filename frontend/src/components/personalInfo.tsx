import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function PersonalInfo() {
  const [data, setData] = useState({
    name: "",
    birth_date: "",
    skills: "",
  });

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/data");
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="me">
      <img src="src/assets/cvkuva2.jpg" alt="" />
      <p>{data.name}</p>
      <p>{data.birth_date}</p>
      <p>{data.skills}</p>
    </div>
  );
}

export default PersonalInfo;
