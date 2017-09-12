// Import React
import React, { Component } from "react"

// import Intro from './slides/intro'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")
require("spectacle/lib/themes/default/index.css")

const theme = createTheme({
  primary: "#dddddd",
  secondary: "#fe9f97",
  tertiary: "#0095a3",
  quartenary: "#fbae17",
  text: "#0f0a01"
}, {
  primary: "Roboto",
  secondary: "Helvetica"
})

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {/* Intro */}
        <Slide transition={["fade"]} bgColor="primary">
          <BlockQuote>
            <Quote textColor="text">
              If you're not embarassed by your first product release, you've
              released too late
            </Quote>
            <Cite textColor="secondary">Reid Hoffman</Cite>
          </BlockQuote>
        </Slide>
        {/* Tight feedback loop */}
        <Slide transition={["fade"]} bgColor="primary">
          <BlockQuote>
            <Quote textColor="text">
              I didn't know it would be us
            </Quote>
            <Cite textColor="secondary">Mark Zuckerberg</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} caps>release &#x2192; observe &#x2192; react</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Your assumptions about what people want are never exactly right
          </Heading>
          <List textColor="text">
            <ListItem>
              Create a tight feedback loop with real customers, using a real product
            </ListItem>
            <ListItem>
              You have to discern what users say and actually do. Selectively
              ignore users.
            </ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        {/* Speed */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Don't fear imperfections. They won't make or break your company.
            <i> Speed</i> will make or break your company.
          </Heading>
          <List textColor="text">
            <ListItem>Move fast and break things</ListItem>
            <ListItem>Move fast with stable infrastructure</ListItem>
            <ListItem>What are you willing to give up?</ListItem>
            <ListItem>
              "Is this going to destroy the company? If not, let them test it."
            </ListItem>
          </List>
        </Slide>
        {/* Outro */}
        <Slide transition={["fade"]} bgColor="primary">
          <BlockQuote>
            <Quote textColor="text">
              The most innovative products should be a perpetual cause of
              embarassment. Embarassment - Not permission to cut corners, or act recklessly, or
              proceed without a clear plan.
            </Quote>
            <Cite textColor="tertiary">Reid Hoffman</Cite>
          </BlockQuote>
        </Slide>
        {/* Discussion */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>Discussion</Heading>
          <List textColor="text">
            <ListItem>How can we improve our feedback loop?</ListItem>
            <ListItem>Move fast and break things or infrastructure?</ListItem>
            <ListItem>Thoughts?</ListItem>
          </List>
        </Slide>
      </Deck>
    )
  }
}
