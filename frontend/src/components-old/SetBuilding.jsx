import { useEffect } from "react";
import Dropdown from "./Dropdown.jsx";

export default function SetBuilding() {
  console.log("setBuilding render");

  function addBuilding(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Extract block names
    const blockNames = Array.from(formData.keys()).filter(
      (key) => key.startsWith("Block") && formData.get(key)
    );

    // Extract floor names
    const floorNames = Array.from(formData.keys()).filter(
      (key) => key.startsWith("Floor") && formData.get(key)
    );

    const data = {
      building: formData.get("buildingName"),
      blocks: blockNames,
      floors: floorNames,
      controller: formData.get("controller"),
    };

    // Todo: Replace the 'fetch' syntax by 'axios'
      fetch("http://localhost:8000/api/v1/building/set-building", {
        method: e.target.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(async (res) => {
          if (res.ok) {
            const json = await res.json();
            console.log("hello");
            console.log(json);
          } else {
            console.error("Error:", res.status);
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
  }

  return (
    <div className="flex justify-center">
      <form method="post" onSubmit={addBuilding}>
        <div className="m-5">
          <input
            className="bg-slate-200 p-2 px-4 pr-20 border border-sky-500 focus:outline-none hover:border-sky-800"
            type="text"
            name="buildingName"
            id="building-name"
            placeholder="Building Name"
          />
        </div>
        <div className="flex justify-around m-5">
          <label htmlFor="block-a">Block-A</label>
          <input type="checkbox" name="Block-A" id="block-a" />
          <label htmlFor="block-b">Block-B</label>
          <input type="checkbox" name="Block-B" id="block-b" />
          <label htmlFor="block-c">Block-C</label>
          <input type="checkbox" name="Block-C" id="block-c" />
          <label htmlFor="block-d">Block-D</label>
          <input type="checkbox" name="Block-D" id="block-d" />
        </div>

        <div className="flex justify-around m-5">
          <label htmlFor="floor-0">Floor-0</label>
          <input type="checkbox" name="Floor-0" id="floor-0" />
          <label htmlFor="floor-1">Floor-1</label>
          <input type="checkbox" name="Floor-1" id="floor-1" />
          <label htmlFor="floor-2">Floor-2</label>
          <input type="checkbox" name="Floor-2" id="floor-2" />
          <label htmlFor="floor-3">Floor-4</label>
          <input type="checkbox" name="Floor-3" id="floor-3" />
        </div>

        <div className="flex align-self-center">
          <Dropdown id="controller" name="controller">
            Controller:{" "}
          </Dropdown>
        </div>

        <div className="flex justify-center">
          <button className="m-5 rounded bg-blue-500 p-2" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
