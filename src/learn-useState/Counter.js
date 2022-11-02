import React, { useState } from "react";
import { RootContext } from "../App.js";

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
      <div>
        <RootContext.Consumer>
          {(value) => {
            return (
              <div
                
              >
                <h1>Tugas Use Context</h1>
                {value.data.length === 0 ? (
                  <p></p>
                ) : (
                  value.data.map((data, i) => {
                    return (
                      <p key={i}>
                        {"Nama: " + data.Nama +
                          ", NIM : " +
                          data.NIM +", Praktikum: "
                          + data.Praktikum
                        }
                      </p>
                    );
                  })
                )}
              </div>
            );
          }}
        </RootContext.Consumer>
      </div>
    </div>
  );
};

export default InputData;