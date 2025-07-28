
import { useState } from "react";

const Task = () => {
  const [gender, setGender] = useState("");
  const [city,setCity]= useState("delhi");

  return (
    <div>
      <h2> handling Checkbox</h2>
      <input
        type="radio"
        onChange={(event) => {
          setGender(event.target.value);
        }}
        name="gender"
        id="male"
        value={"male"}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={(event) => {
          setGender(event.target.value);
        }}
        name="gender"
        id="female"
        value={"gender"}
      />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender:{gender}</h2>
      // For city Dropdown
      <h2>Select city:{city}</h2>
      <select onChange={(event)=>{setCity(event.target.value)}} defaultValue={'delhi'}>
        <option value="pune">Pune</option>
        <option value="delhi">Delhi</option>
        <option value="bangalore">Bangalore</option>
        <option value="mumbai">Mumbai</option>
      </select>
    </div>
  );
};

export default Task;
