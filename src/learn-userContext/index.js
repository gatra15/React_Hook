import React, { useState, useContext } from "react";
import "./index.css";
import { RootContext } from "../App.js";
const themes = {
  light: {
    id: 1,
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    id: 2,
    foreground: "#ffffff",
    background: "#222222",
  },
};

const identitasKelompok = [
  {
    Nama: "Naufal Reyhan",
    NIM: "21120119130055",
    Praktikum: "RPLBK 2022",
  }
]
const ThemeContext = React.createContext(themes.light);
export default function Index() {
  const [theme, setTheme] = useState(themes.dark);
  const changeTheme = () => {
    if (theme.id === themes.light.id) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <div>
      <RootContext.Consumer>
        {(value) => {
          value.isiData(identitasKelompok);
        }}
      </RootContext.Consumer>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div
          className="Main"
          style={{ background: theme.background, color: theme.foreground }}
        >
          <p className="Text">Theme by useContext</p>
          <p>KELOMPOK18</p>
          <ThemedButton />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}
function ThemedButton() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button
      className="Button"
      style={{ background: theme.background, color: theme.foreground }}
      onClick={changeTheme}
    >
      i am styled by theme context!
    </button>
  );
}

