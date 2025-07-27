import Paragraph from '../components/Paragraph';
import Subheader from '../components/Subheader';
import Page from '../components/Page';

import bigGroupImg from '../images/big-group.png';
import gameGroupImg from '../images/game-group.png';
import roomImg from '../images/room.png';
import soloImg from '../images/solo.png';
import twoGroupImg from '../images/two-group.png';
import boardImg from '../images/board.png';

import { ocHacksDescriptionText } from '../text';

export default function OCHacks() {
    return (
        <Page>
            <Paragraph>{ocHacksDescriptionText}</Paragraph>
            <div className="row tall-row">
                <Subheader level={1}>Gallery</Subheader>
                <hr />
            </div>

            <div className="row">
                <div className="col-md-4">
                    <img src={roomImg} alt="A room coding"/>
                </div>
                <div className="col-md-4">
                    <img src={bigGroupImg} alt="A large group coding"/>
                </div>
                <div className="col-md-4">
                    <img src={gameGroupImg} alt="A group of 3 coding"/>
                </div>
            </div>
             <div className="row">
                <div className="col-md-4">
                    <img src={soloImg} alt="One person coding"/>
                </div>
                <div className="col-md-4">
                    <img src={twoGroupImg} alt="A group of two coding"/>
                </div>
                <div className="col-md-4">
                    <img src={boardImg} alt="A whiteboard with text about OCHacks"/>
                </div>
            </div>
        </Page>
    )
}