import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Grid from "../components/Grid";

const Data = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails") || "null")
  );

  useEffect(() => {
    if (!userDetails) {
      alert("Enter the required data first!");
      navigate("/");
    }
  }, [navigate, userDetails]);

  return (
    <div className="flex flex-col items-center  h-[90vh]">
      <Grid />
    </div>
  );
};

export default Data;