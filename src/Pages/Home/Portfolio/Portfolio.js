import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import bannar1 from '../../../images/bannar1.jpg';
import bannar2 from '../../../images/bannar2.jpg';
import bannar3 from '../../../images/bannar3.jpg';

const Portfolio = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div id='portfolio'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={bannar1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3> Alone man</h3>
                        <p>neture of  river.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={bannar2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3> Good morning </h3>
                        <p>Sun rise in the morning.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  w-100 "
                        src={bannar3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3> beautiful bird</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Portfolio;