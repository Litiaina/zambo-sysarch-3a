import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import banner from "../assets/img/banner-bg.png";

const Dashboard = () => {
    const backgroundImage = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <Container className="about-section-wrapper">
            <Row>
                <Col xs={6} className="d-flex flex-column justify-content-center text-center">
                    <h1 style={{paddingTop: 300 }}>About</h1>
                    <p>
                        Welcome to Litiaina, a captivating world of dark fantasy horror.
                    </p>
                    <p>
                        Litiaina is not just a game—it is an immersive experience that delves into the depths of fear and intrigue.
                        Step into a realm where shadows hold secrets and nightmares come to life.
                    </p>
                    <p>
                        As the creator and visionary behind Litiaina, my passion for dark fantasy and horror drives me to craft a
                        world that will leave players both enthralled and terrified. Drawing upon years of experience and a deep
                        understanding of the genre, I have meticulously woven a rich tapestry of lore, characters, and environments
                        that will immerse you in an unforgettable journey.
                    </p>
                    <p>
                        Through Litiaina, I invite you to explore a world that challenges your perceptions and pushes the boundaries of imagination.
                        Engage with complex characters, each with their own compelling stories, and witness their evolution as they confront the horrors
                        that lurk in the shadows.
                    </p>
                    <p>
                        With a focus on atmospheric storytelling, gameplay mechanics, and attention to detail, Litiaina promises to deliver an experience
                        that is as visually stunning as it is emotionally resonant. Every aspect, from the haunting visuals to the haunting melodies,
                        is carefully crafted to transport you to a realm where nightmares come alive.
                    </p>
                    <p>
                        Collaboration and feedback are essential to the evolution of Litiaina. I believe in fostering a community that shares
                        a passion for dark fantasy and horror. Your input and engagement will shape the future of Litiaina, as we strive to create
                        an experience that surpasses expectations and leaves a lasting impression.
                    </p>
                    <p>
                        Thank you for joining me on this journey into the heart of darkness. Together, let us explore the twisted landscapes and unravel the mysteries that lie within Litiaina, where fear is both our adversary and our guide. Welcome to a world where nightmares become reality.
                    </p>
                    <a href="/" style={{ paddingBottom: 45 }}>Learn More</a>
                </Col>
                <Col xs={6} className="about-img-wrapper" style={backgroundImage}>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;