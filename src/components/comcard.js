import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PodcastCard = ({ imgSrc, title, date, description, tagColor }) => {
  return (
    <Card bg={tagColor} text="white" className="mb-4">
      <Card.Img variant="top" src={imgSrc} alt="Image Title" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <small className="text-muted">{date}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default function MyCards () {
  return (
    <div>
      <section className="dark">
        <Container className="py-4">
          <h1 className="h1 text-center" id="pageHeaderTitle">My Cards Dark</h1>
          <Row>
            <Col lg={3} md={6}>
              <PodcastCard
                imgSrc="profimg.jpg"
                title="Podcast Title"
                date="Mon, May 25th 2020"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                tagColor="blue"
              />
            </Col>
            {/* Add the remaining cards in a similar way */}
          </Row>
        </Container>
      </section>

      {/* Repeat the same structure for the "My Cards Light" section */}
    </div>
  );
};


