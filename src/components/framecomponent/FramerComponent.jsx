import React from 'react'
import './FramerComponent.css'
import person1 from '../../assets/img2 1.png'
import person2 from '../../assets/img3.png'
import person3 from '../../assets/img4.png'
import person4 from '../../assets/img5.png'

const FramerComponent = () => {
    return (
        <section className="frame-parent-inner">
          <div className="frame-group">
            <div className="img2-1-parent">
              <img
                className="img2-1-icon"
                loading="eager"
                alt=""
                src={person1}
              />
              <div className="trashify-is-a-game-changer-it-wrapper">
                <h3 className="trashify-is-a">
                  “Trashify is a game-changer! It’s like Pokémon Go for recycling. I
                  love how it gamifies responsible waste management by encouraging
                  users to find and recycle materials at local locations. Plus, the
                  mapping feature makes it easy to locate nearby recycling centers.
                  Kudos to the team behind Trashify!”
                </h3>
              </div>
              <div className="img4-wrapper">
                <img
                  className="img4-icon"
                  loading="eager"
                  alt=""
                  src={person2}
                />
              </div>
              <div className="trashify-has-become-my-go-to-a-wrapper">
                <h3 className="trashify-has-become">
                  “Trashify has become my go-to app for responsible waste disposal.
                  The interactive map feature is intuitive, and I appreciate the
                  detailed information about accepted materials at each location.
                  The leaderboard adds a friendly competition among users, making
                  recycling feel rewarding. Highly recommend!”
                </h3>
              </div>
            </div>
            <div className="frame-container">
              <div className="trashify-is-more-than-just-an-wrapper">
                <h3 className="trashify-is-more">
                  “Trashify is more than just an app; it’s a movement. I’ve
                  discovered so many local recycling centers through it, and the
                  gamified challenges keep me engaged. It’s heartwarming to see a
                  community-driven initiative promoting sustainable practices. Five
                  stars!”
                </h3>
              </div>
              <div className="designer-rectangle1">
                <img
                  className="img3-icon"
                  loading="eager"
                  alt=""
                  src={person3}
                />
              </div>
              <div className="finally-an-app-that-makes-rec-wrapper">
                <h3 className="finally-an-app">
                  “Finally, an app that makes recycling fun! Trashify not only helps
                  me find recycling spots near me but also educates me on what
                  materials are accepted. The gamification aspect keeps me motivated
                  to participate regularly. It’s a win-win for the environment and
                  my competitive spirit!”
                </h3>
              </div>
              <img
                className="img5-icon"
                loading="eager"
                alt=""
                src={person4}
              />
            </div>
          </div>
        </section>
  )
}

export default FramerComponent