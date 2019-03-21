// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

// Require CSS
require('normalize.css');
require('./index.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            ft_react
          </Heading>
          <Heading size={3} margin="10px 0 0" textColor="tertiary">
            1st Meeting
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Outline
          </Heading>
          <List textColor="tertiary">
            <ListItem>Introductions</ListItem>
            <ListItem>Pre-reqs</ListItem>
            <ListItem>Why React?</ListItem>
            <ListItem>Demo</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="primary" caps>
            Pre-reqs to learning React
          </Heading>
          <List textColor="primary">
            <ListItem>JavaScript</ListItem>
            <ListItem>HTML & CSS</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="secondary">
            What is React?
          </Heading>
          <Text style={{ marginBottom: '50px' }} textColor="tertiary">
            React is a JavaScript library for building user interfaces
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="secondary">
            Why should you learn it?
          </Heading>
          <List textColor="tertiary">
            <ListItem>Reusable & Stateful Components</ListItem>
            <ListItem>MVC</ListItem>
            <ListItem>All JavaScript</ListItem>
            <ListItem>Created & Mantained by FB</ListItem>
            <ListItem>Learn once, write anywhere</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
