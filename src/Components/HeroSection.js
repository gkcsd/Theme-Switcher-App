import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";
import ThemeToggler from "./ThemeToggler";
import Header from "./Header";


const HeroSection = () => {

    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return (
        <body style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center",
            height: "100%",
            width: "100%",
        }}>
            <h1>Context API Theme Toggler</h1>
            <p>You Know What It Is My First Turn To Play With ReactJs & Its Not Looking Good <br/>But After More Practice I will Build Great & Beautiful Applications</p>
            <button style={{
                backgroundColor: "#26ae60",
                padding: "10px 100px",
                fontSize: "20px",
                color: "#FFF",
                border: `${currentTheme.border}`,
            }}
            >{<ThemeToggler/>}</button>
            <Header />
        </body>
    );
};
export default HeroSection;