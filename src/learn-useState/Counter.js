import React, { useState } from "react";

const InputData = () => {
  const [result, setResult] = useState("");

  const updateResult = (event) => {
    setResult(event.target.value);
  };

  return (
    <div className="Main">
      <div>
        <h1>Kelompok 18</h1>
        <h3>{result}</h3>
        <form>
          <input
            type="text"
            value={result}
            onChange={updateResult}
            placeholder="Ketik Sesuatu Disini"
          />
        </form>
      </div>
    </div>
  );
};

export default InputData;