# react-grid-system [![build status](https://travis-ci.org/trendmicro-frontend/react-grid-system.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-grid-system) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-grid-system/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-grid-system?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-grid-system.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-grid-system/)

React Grid System component

Demo: https://trendmicro-frontend.github.io/react-grid-system

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-grid-system](https://github.com/trendmicro-frontend/react-grid-system):

  ```
  npm install --save react @trendmicro/react-grid-system
  ```

2. Install [react-grid-system](https://github.com/trendmicro-frontend/react-grid-system)` with <b>@trendmicro</b> scope:

  ```js
  import { Provider, Container, Row, Col } from '@trendmicro/react-grid-system';
  ```

## Usage

```jsx
<Container fluid gutterWidth={20}>
    <Row>
        <Col xs md={8}>col-md-8</Col>
        <Col width={6} md={4}>col-6 col-md-4</Col>
    </Row>
    <Row>
        <Col width={6} md={4}>col-6 col-md-4</Col>
        <Col width={6} md={4}>col-6 col-md-4</Col>
        <Col width={6} md={4}>col-6 col-md-4</Col>
    </Row>
    <Row>
        <Col width={6}>col-6</Col>
        <Col width={6}>col-6</Col>
    </Row>
</Container>
```

## API

### Properties

## License

MIT
