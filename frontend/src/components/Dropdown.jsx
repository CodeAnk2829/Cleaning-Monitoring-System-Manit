import { useState, useEffect } from "react";

export default function Dropdown({ children, id, name }) {
  const [admins, setAdmins] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:8000/building-details").then(async (res) => {
      const json = await res.json();
      setAdmins(json);
    });
  }, [admins]);

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
