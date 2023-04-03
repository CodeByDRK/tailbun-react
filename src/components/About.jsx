import React from 'react';
import aboutimage from '../img/about-img.png';

export default function About() {
  return (
    <section className="content-page">
        <div className="about-container">
            <div className="about-content">
                <div>
                    <h3>About Tailbun</h3>
                    <div className="underline"></div> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo aliqua. Ut enim sscing elit, sed do eiusmo aliqua. Ut enim sscing elit, sed do eiusmo aliqua. Ut enim s  eiusmo aliqua. Ut enim sscing elit, sed do eiusmo aliqua. Ut enim seiusmo aliqua. Ut enim sscing elit, sed do eiusmo aliqua. Ut enim s</p>
                </div>
                <div>
                    <h3>Specialties</h3>
                    <div className="underline"></div>    
                    <div className="specialties">
                        <p>Burgers</p>
                        <p>Sauces</p>
                        <p>Cocktails</p>
                        <p>Mocktails</p>
                        <p>Othertails</p>
                        <p>Dragontails</p>
                    </div>
                </div>
            </div>
            <div className="about-image">
            <img src={aboutimage} alt="" />
        </div>
        </div>
    </section>
  )
}
