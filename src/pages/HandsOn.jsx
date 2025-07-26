import React from 'react';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Subheader from '../components/Subheader';
import Navbar from '../components/Navbar';
import QrCode from '../components/QrCode';

import { handsOnDescriptionText, cacText, mcText } from '../text';

export default function HandsOn() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Title />

                <Paragraph>{handsOnDescriptionText}</Paragraph>

                <div className="row tall-row">
                    <Subheader level={1}>Our Projects:</Subheader>
                    <hr />
                </div>

                <Subheader level={2}>Congressional App Challenge</Subheader>
                <Paragraph>{cacText}</Paragraph>
                <div class="row">
                    <div class="col-md-4">
                        <QrCode link="https://www.youtube.com/watch?v=wAhAs-vHo-Q&t=1s" size={200} />
                        {/*TODO: ADD IMAGES*/}
                    </div>
                </div>

                <Subheader level={2}>Mill City Hacks</Subheader>
                <Paragraph>{mcText}</Paragraph>
                <div class="row">
                    <div class="col-md-4">
                        <QrCode link="https://www.youtube.com/watch?v=bfpUj3BB3JU" size={200} />
                        {/*TODO: ADD IMAGES*/}
                    </div>
                </div>


            </div>
        </>
    );
}