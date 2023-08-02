import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function PersonalInfo() {
  const [data, setData] = useState();
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
      <p>{data}</p>
    </div>
  );
}

export default PersonalInfo;
