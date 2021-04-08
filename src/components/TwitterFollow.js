import React from 'react'
import {TwitterFollowButton} from 'react-twitter-embed';

const Timeline = () => {

    return (
        <div class="twitter-follow-button-container">
            <TwitterFollowButton
                screenName={'resonateau'}
            />
        </div>
    )

}

export default Timeline;