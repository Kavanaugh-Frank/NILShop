import React from "react";
import { useMediaQuery } from 'react-responsive';

import instagram from "../photos/insta.jpg"
import twitter from "../photos/twitter.jpg"

export default function Socials(){

    const styles = {
        position : "fixed",
        right : 10,
        top : 400,
        backgroundColor : "black",
        padding: "1rem",
        borderRadius : "5px",
        opacity : ".7"
    }

    const buttonTwitter = {
        // display : "block",
        height : "2.5rem",
        width : "2.5rem",
        borderRadius : ".1rem"
    }
    const buttonInstagram = {
        // display : "block",
        height : "2.5rem",
        width : "2.5rem",
        marginRight : "1rem",
        borderRadius : ".1rem"
    }


    const stylesMobile = {
        position : "absolute",
        right : 0,
        left : 0,
        top : 300,
        width : "50%",
        backgroundColor: "#2E3B55",
        // backgroundColor : "black",
        padding: "1rem 0 1rem 0",
        borderRadius : "5px",
        opacity : "1",

        margin:"0 auto",

        display:"flex",
        justifyContent:"space-around",
    }
    const buttonTwitterMobile = {
        // display : "block",
        height : "2.5rem",
        width : "2.5rem",
        borderRadius : ".1rem"
    }
    const buttonInstagramMobile = {
        // display : "block",
        height : "2.5rem",
        width : "2.5rem",
        // marginRight : "6rem",
        borderRadius : ".1rem"
    }

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    console.log(isTabletOrMobile + "this")
    if(!isTabletOrMobile){
        return(
            <>
                <div style={styles}>
                    <a href="https://www.instagram.com/ohiofb/" target="_blank"><img src={instagram} style={buttonInstagram} ></img></a>
                    <a href="https://twitter.com/ohiobobcats" target="_blank"><img src={twitter} style={buttonTwitter} ></img></a>
                    {/* <button style={button}>Instagram</button>
                    <button style={button}>Twitter</button> */}
                </div>
            </>
        )
    }else{
        return(
            <div>
                <div style={stylesMobile}>
                    <a href="https://www.instagram.com/ohiofb/" target="_blank"><img src={instagram} style={buttonInstagramMobile} ></img></a>
                    <a href="https://twitter.com/ohiobobcats" target="_blank"><img src={twitter} style={buttonTwitterMobile} ></img></a>
                    {/* <button style={button}>Instagram</button>
                    <button style={button}>Twitter</button> */}
                </div>
            </div>
        )
    }

}