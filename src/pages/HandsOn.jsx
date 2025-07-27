import React from 'react';
import Page from '../components/Page';
import Paragraph from '../components/Paragraph';
import Subheader from '../components/Subheader';
import QrCode from '../components/QrCode';

import { handsOnDescriptionText, cacText, mcText } from '../text';

export default function HandsOn() {
    return (
        <Page>
            <div className="container">

                <Paragraph>{handsOnDescriptionText}</Paragraph>

                <div className="row tall-row">
                    <Subheader level={1}>Our Projects:</Subheader>
                    <hr />
                </div>

                <Subheader level={2}>Congressional App Challenge</Subheader>
                <Paragraph>{cacText}</Paragraph>
                <div className="row">
                    <div className="col-md-4">
                        <QrCode link="https://www.youtube.com/watch?v=wAhAs-vHo-Q&t=1s" size={200} />
                        {/*TODO: ADD IMAGES*/}
                    </div>
                </div>

                <Subheader level={2}>Mill City Hacks</Subheader>
                <Paragraph>{mcText}</Paragraph>
                <div className="row">
                    <div className="col-md-4">
                        <QrCode link="https://www.youtube.com/watch?v=bfpUj3BB3JU" size={200} />
                        {/*TODO: ADD IMAGES*/}
                    </div>
                </div>


            </div>
        </Page>
    );
}