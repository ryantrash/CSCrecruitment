import React from "react";
import Paragraph from "../components/Paragraph";
import Subheader from "../components/Subheader";
import Page from "../components/Page";

import { welcomeText, clickText, handsOnText, ocHacksText, educationText } from "../text";

export default function Home() {
    return (
        <Page>
            {welcomeText}
            {clickText} 
            <div className="row tall-row">
                <Subheader level={1}>Our Projects:</Subheader>
                <hr />
            </div>
           
            <Subheader level={2} link='/handsOn'>Hands-On Experience</Subheader>
            {handsOnText}

            <Subheader level={2} link='/ocHacks'>OCHacks</Subheader>
            {ocHacksText}

            <Subheader level={2} link='/education'>Education</Subheader>
            {educationText}
        </Page>
    )
}