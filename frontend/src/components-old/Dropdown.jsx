import { useState, useEffect } from "react";

export default function Dropdown({ children, id, name }) {
  console.log("dropdown render");
  // minimize the number of re-render as this component is rendering three times
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/building/building-details").then(async (res) => {
      const json = await res.json();
      setAdmins(json);
    });
  }, []);

  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <select id={id} name={name}>
        {admins.map((admin, index) => (
          <option key={index} value={admin.id}>
            {admin.name}
          </option>
        ))}
      </select>
    </div>
  );
}
