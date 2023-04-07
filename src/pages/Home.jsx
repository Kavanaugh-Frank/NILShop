import React from "react";
import { useMediaQuery } from 'react-responsive'
import { Container } from "@mui/system";

import Socials from "../components/Socials";
import Nav from "../components/Nav"

import trophyMessi from "../photos/trophy.webp"
import vertMessi from "../photos/vertMessi.webp"

import style from "../styles/home.module.css"

let image = {
  position : "absolute",
  top : -10,
  left : 0,
  right : 0,
  bottom : 0,
  zIndex : -1,
  width : "100%",
}

const socials = {
  paddingTop : "2rem"
}

let trophy ;

export default function Home(){
    document.body.style = 'background: #2E3B55;';
    //the tests for the view of screen
    //   const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    //   const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    
      // console.log(isTabletOrMobile + "what")
      if(isTabletOrMobile){
        trophy = vertMessi
      }else{
        trophy = trophyMessi
      };

      return(
        <>
          <img style={image} src={trophy}></img>
          <Nav />
            {/* {isPortrait ? <p className={styles.portrait}>portrait</p> : <p className={styles.landscape}>landscape</p>} */}
          <Socials />
            {/* <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p> */}
            <div style = {{display : "flex", justifyContent : "center"}}>
                <Container maxWidth="sm" 
                  className = {`${style.Cont}`}
                >
                  <div className={`${style.CTA}`}>Get the New Gear for the New Season!</div>
                  {/* <div className={`${style.CTA}`} style={socials}>Check Out the Socials</div> */}
                </Container>
            </div>
          </>
      )
      }