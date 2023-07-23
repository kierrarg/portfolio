import React from 'react'
import './style.css'

const TextBox = () => {
    return (
        <div className="text-box">
            <div className='contain'>
            <h3>About</h3>
            <div className='text-b-txt'>
                <p>
                I have made this website to showcase my artwork over the years.
                </p>
                <br></br>
                <p>
                Each drawing on average takes 16 hours to complete, I put a lot of love and attention to detail into my work.
                </p>
                <br></br>
                <p>
                I have always been interested in realism, for many years my goal has been to create pieces that were as realistic as possible. My pieces pay great attention to detail and feature layers of different detailings.
                </p>
                <br></br>
                <p>
                You will notice that some of my more recent pieces have begun to stray away from realism as I now challenge myself and my creativity when coming up with drawing ideas.
                </p>
                <br></br>
                <p>
                My primary medium has always been graphite and charcoal, however, in recent years I have began creating digital art and working with colour.
                </p>
            </div>
            </div>

        </div>
    )
}

export default TextBox;