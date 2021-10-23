import React from 'react';

import SquidGame1 from '../images/squid-game-1.jpg';
import SquidGame2 from '../images/squid-game-2.jpg';
import SquidGame3 from '../images/squid-game-3.jpg';
import SquidGame4 from '../images/squid-game-4.jpg';

function Episode(props) {
    return (
        <div>
            <div><h3>{props.episodeNum}</h3></div>
            <div>
                <img src={props.img} width='100px' />
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
}

function EpisodeList() {
    return (
        <div>
            <Episode 
                episodeNum="1"
                title="Red light, Green light"
                img={SquidGame1}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Episode 
                episodeNum="2"
                title="Hell"
                img={SquidGame2}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Episode 
                episodeNum="3"
                title="The Man with the Umbrella"
                img={SquidGame3}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Episode 
                episodeNum="4"
                title="Stick to the Team"
                img={SquidGame4}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
        </div>
    );
}

export default EpisodeList;