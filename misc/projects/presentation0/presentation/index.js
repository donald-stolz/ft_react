// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Heading, List, ListItem, Notes, Slide, Text } from 'spectacle';

// BlockQuote,
// Cite,
// Image,
// Quote,

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// const images = {
//   formidagon: require('../assets/formidable-logo.svg'),
//   goodWork: require('../assets/good-work.gif')
// };

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
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={4} textColor="primary">
            Why should you learn it?
          </Heading>
          <List textColor="tertiary">
            <ListItem>Reusable & Stateful Components</ListItem>
            <ListItem>Created & Mantained by FB</ListItem>
            <ListItem>Performance</ListItem>
            <ListItem>All JavaScript</ListItem>
            <ListItem>Learn once, write anywhere</ListItem>
            <Notes>
              <ol>
                <li>
                  Components maintain their own property and state. Makes it
                  easy to create reusable components
                </li>
                <li>Used on Instagram, Netflix, New York Times</li>
                <li>React updates and renders just the right components</li>
                <li>Blank</li>
                <li>Can be used for Mobile Apps and VR</li>
              </ol>
            </Notes>
          </List>
        </Slide>
      </Deck>
    );
  }
}
