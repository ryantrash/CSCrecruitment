import React from "react";
import Title from '../components/Title';
import Paragraph from "../components/Paragraph";
import Subheader from "../components/Subheader";
import Navbar from "../components/Navbar";

import { welcomeText, clickText, handsOnText } from "../text";

export default function Home() {
    return (
        <>
        <Navbar />
        <div className="container">
            <div className="jumbotron">
            <Title />
            </div>
            <Paragraph>{welcomeText + "\n\n" + clickText}</Paragraph>
             <div className="row tall-row">
            <Subheader level={1}>Our Projects:</Subheader>
            <hr />
            </div>
           
            {/*TODO: ADD BUTTON / ROUTER FUNCTIONALITY + CREATE PAGES*/}
            {/*TODO: ADD IMAGES?*/}
            <Subheader level={2}>Hands-On Experience</Subheader>
            <Paragraph>{handsOnText}</Paragraph>
            {/*TODO: ADD UNIQUE TEXT*/}
            <Subheader level={2}>OCHacks</Subheader>
            <Paragraph>{handsOnText}</Paragraph>

            <Subheader level={2}>Education</Subheader>
            <Paragraph>{handsOnText}</Paragraph>
        </div>
        </>
    )
}