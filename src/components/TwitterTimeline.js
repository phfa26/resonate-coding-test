import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Timeline = () => {

    return (
        <div className="twitter-timeline-container">
             <TwitterTimelineEmbed
                sourceType="profile"
                screenName="resonateau"
                options={{height: 400}}
            />
        </div>
    )

}

export default Timeline;