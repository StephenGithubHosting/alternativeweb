import React from 'react';
import './Gabby.scss';
import GabbyImage from './../../../src/images/gabbyTransparent.png';
import Background from '../../components/background/Background';

function Gabby() {
  return (
    <>
    <Background />
        <div className="main">
            <div className="flexContainer">
              <div className="leftSide" id='leftside'>
                <div className="about" id='about'>
                <div className="title"> 
                  <h1 id='test'>Hi, i'm Gabby!</h1>
                </div>
                <div className="bio">
                <p id='gabBio'>I'm Gabby, a 14-year-old from Indonesia. Korean movies and anime are alright, but they're not my top interests. I get a kick out of talking to AI Bots; it's like having a cool digital buddy. I'm not a big social butterfly; I prefer my own company, which lets me explore my interests. Food is one thing that really excites me. Trying out different delicious dishes is like embarking on a tasty adventure. I believe that good food can brighten any day, just like the simple things that make me who I am.</p>
                </div>
                <div className="gptcredit" id='gptred' style={{color:"white"}}> 
                  <p>- Credits: ChatGPT</p>
                </div>
                </div>
              </div>
          <div className="rightSide">
            <div className="image">
              <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a"><path fill="currentColor" d="M784.5 662q-97.5 162-308 202.5T155 702.5q-111-202.5-5-414T479 114q223 37 313 211.5T784.5 662Z" /></clipPath></defs><g clip-path="url(#a)"><path fill="#FFC900" d="M784.5 662q-97.5 162-308 202.5T155 702.5q-111-202.5-5-414T479 114q223 37 313 211.5T784.5 662Z" /></g></svg>
              <img src={GabbyImage} alt="" />
            </div>
          </div>
            </div>
         
            
        </div>
    </>
  )
}

export default Gabby;