import React from 'react'
import FollowButton from './TwitterFollow'

const Intro = () => {

    return (
        <div className="intro">
            <div className="intro_headings">
                <h1>
                    Welcome to Resonate AU tweeter feed!
                </h1>
                <h2>
                    Don't forget to follow us! 
                </h2>
                <FollowButton />
            </div>
            <div className="intro_about-paulo">
                <p>Thank you for the opportunity to demostrate my Skills! I hope you like it :)</p>
                <p>Regards, Paulo Amaral.</p>
            </div>
        </div>
    )
}

export default Intro;