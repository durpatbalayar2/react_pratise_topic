import { useEffect, useState } from "react";

function ClockPrj() {
  const [time, setTime] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Clock Project</h1>

      <h2
        style={{
          color: color, // color state is used
          backgroundColor: "black",
          width: "150px",
          height: "50px",
          borderRadius: "10px",
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        {time}
      </h2>
      <h3> Drop Down</h3>
      <select
        style={{
          width: "150px",
          height: "30px",
          fontWeight: "550",
          backgroundColor: "green",
        }}
        onChange={(event) => setColor(event.target.value)}
      >
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"yellow"}>Yellow</option>
      </select>
    </div>
  );
}
export default ClockPrj;
