import React from "react";
import MediaCard from "../components/Card";
import Nav from "../components/Nav"

export default function Player(){
    document.body.style = 'background: white;';
    return (
        <>
            <Nav />
            <MediaCard />
        </>
    )
}