// src/components/FeaturedArticles.js
import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';
import './FeaturedArticles.css';

const articles = Array.from({ length: 3 }).map(() => ({
  title: faker.lorem.words(),
  description: faker.lorem.sentence(),
  author: faker.person.fullName(),
  rating: (Math.random() * 5).toFixed(1),
  image: `https://picsum.photos/200/150?random=${faker.datatype.uuid()}`,
}));

const FeaturedArticles = () => {
  return (
    <div className="featured-section">
      <h2>Featured Articles</h2>
      <Card.Group itemsPerRow={3}>
        {articles.map((article, index) => (
          <Card key={index}>
            <Image src={article.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{article.title}</Card.Header>
              <Card.Meta>
                <span className="date">{article.description}</span>
              </Card.Meta>
              <Card.Description>
                <strong>{article.author}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="star" />
              {article.rating} {article.author}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Button className="see-all-articles">See all articles</Button>
    </div>
  );
};

export default FeaturedArticles;
