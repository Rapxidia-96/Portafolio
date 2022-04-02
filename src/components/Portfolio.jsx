import React from 'react';
import '@styles/Portfolio.scss';
import proyect from '@images/1.jpg';

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <div className="portfolio__container">
                <h2>Portafolio</h2>
                <article className="portfolio__project">
                <div class="portfolio__project--details">
                    <div>
                        <h3 class="portfolio__project--title">
                            <a href="" target="blank">Invie</a>
                        </h3>
                        <p class="portfolio__project--course">Platzi</p>
                    </div>
                    pura mamadas
                    
                    <ul>
                        <li class="portfolio__project--item">HTML</li>
                        <li class="portfolio__project--item">CSS</li>
                        <li class="portfolio__project--item">JavaScript</li>
                    </ul>
                    <p class="portfolio__project--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, cumque! Aliquam nam, non eos quaerat consectetur reicihil temporibus perspiciatis</p>
                </div>
                    <figure className="portfolio__project--image-container">
                        <img className='portfolio__project--image' src={proyect} alt="" />
                    </figure>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;

