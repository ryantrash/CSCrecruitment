import React from 'react';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Subheader from '../components/Subheader';
import Navbar from '../components/Navbar';
import QrCode from '../components/QrCode';

export default function OCHacks() {
    
    return (
        <>
        <Navbar />
        <div className="container">
            <Title />
            <Paragraph>{ocHacksDescText}</Paragraph>
        </div>
        </>
    )
}