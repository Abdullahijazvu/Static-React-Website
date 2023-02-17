import React from 'react';
import vg from '../assets/2.webp';
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';

const Home = () => {
  return (
    <>
    <div className='home'>
        <main>
            <h1>TechStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
        <div className='home2'>
            <img src={vg} alt="Graphics" />
        
        <div>
        <p>
        To address all issues including breaking changes, run
        </p>
        </div>
    </div>
    <div className='home3' id='about'>
        <div>
        <h1>Who are you?</h1>
        <p>To address all issues including breaking changes, run.To address all issues including breaking changes, run.To address all issues including breaking changes, run</p>
        </div>
    </div>
    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay: "0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay: "0.3s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay: "0.3s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay: "0.3s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home