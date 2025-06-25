import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <section>

        <div className="custom-container">

            <div className="home">

                <div className="desc">

                    <h1 className="mainheading">HAMZA ELAHI</h1>
                    <p className="pixel">I am a Front End Developer and here you can check out my work :3 <span>Thank you for checking out my portfolio!</span></p>

                </div>

                <img className='img-fluid' src="/assets/profile.jpeg" alt="me" />

            </div>

        </div>

    </section>
  )
}

export default Home