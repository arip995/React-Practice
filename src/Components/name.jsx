import React, { useState } from "react";

function Name() {
  const [name, setName] = useState({ fName: "", lName: "" });

  return (
    <div>
      <input type="text" value={name.fName} onChange={(e) => setName({...name,fName: e.target.value})}/>
      <input type="text" value={name.lName} onChange={(e) => setName({...name,lName: e.target.value})}/>
      <div className="">
        First name:
        {name.fName}
      </div>
      <div className="">
        Last name:
        {name.lName}
        </div>
    </div>
  );
}

export default Name;
