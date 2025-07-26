import React from "react";
import Title from '../components/Title';
import Paragraph from "../components/Paragraph";
import Subheader from "../components/Subheader";

import { welcomeText, clickText, handsOnText } from "../text";

export default function App() {
    return (
        <div className="app-container">
            <Title />
            <Paragraph>{welcomeText + "\n\n" + clickText}</Paragraph>
            <Subheader level={1}>Our Projects:</Subheader>
            
            <Subheader level={2}>Hands-On Experience</Subheader>
            <Paragraph>{handsOnText}</Paragraph>

            <Subheader level={2}>OCHacks</Subheader>
            <Paragraph>{handsOnText}</Paragraph>

            <Subheader level={2}>Education</Subheader>
            <Paragraph>{handsOnText}</Paragraph>
        </div>
    )
}