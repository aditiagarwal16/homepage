// src/components/FeaturedTutorials.js
import React from 'react';
import { Card, Image, Icon, Button, Label } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';
import './FeaturedTutorials.css';

// Free tutorials
const tutorials = Array.from({ length: 3 }).map(() => ({
  title: faker.lorem.words(),
  description: faker.lorem.sentence(),
  author: faker.person.fullName(),
  rating: (Math.random() * 5).toFixed(1),
  image: `https://picsum.photos/200/150?random=${faker.datatype.uuid()}`,
}));

// Premium tutorials for premium users
const premiumTutorials = Array.from({ length: 2 }).map(() => ({
  title: `Premium ${faker.lorem.words()}`,
  description: `Premium: ${faker.lorem.sentence()}`,
  author: faker.person.fullName(),
  rating: (Math.random() * 5).toFixed(1),
  image: `https://picsum.photos/200/150?random=${faker.datatype.uuid()}`,
}));

const FeaturedTutorials = ({ isPremium }) => {
  return (
    <div className="featured-section">
      <h2>Featured Tutorials</h2>
      <Card.Group itemsPerRow={3}>
        {tutorials.map((tutorial, index) => (
          <Card key={index}>
            <Image src={tutorial.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{tutorial.title}</Card.Header>
              <Card.Meta>
                <span className="date">{tutorial.description}</span>
              </Card.Meta>
              <Card.Description>
                <strong>{tutorial.author}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="star" />
              {tutorial.rating} {tutorial.author}
            </Card.Content>
          </Card>
        ))}

        {/* Conditionally render premium tutorials */}
        {isPremium && premiumTutorials.map((tutorial, index) => (
          <Card key={index} color="blue"> {/* Highlight premium tutorials */}
            <Label color="blue" ribbon>
              Premium
            </Label>
            <Image src={tutorial.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{tutorial.title}</Card.Header>
              <Card.Meta>
                <span className="date">{tutorial.description}</span>
              </Card.Meta>
              <Card.Description>
                <strong>{tutorial.author}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="star" />
              {tutorial.rating} {tutorial.author}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      <Button className="see-all-tutorials">See all tutorials</Button>
    </div>
  );
};

export default FeaturedTutorials;
