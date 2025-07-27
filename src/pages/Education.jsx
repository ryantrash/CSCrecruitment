import Page from "../components/Page";
import Paragraph from '../components/Paragraph';
import Subheader from '../components/Subheader';
import { educationDescriptionText } from "../text";

export default function Education() {
    return (
        <Page>
            <Paragraph>{educationDescriptionText}</Paragraph>
            <ul>
                <li><a href="https://leetcode.com/">Leetcode Daily</a></li>
                <li>Tutorials</li>
                <li>Seminars (Coming soon!)</li>
            </ul>
        </Page>
    )
}