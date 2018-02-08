# react-grid-system [![build status](https://travis-ci.org/trendmicro-frontend/react-grid-system.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-grid-system) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-grid-system/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-grid-system?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-grid-system.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-grid-system/)

React Grid System component

Demo: https://trendmicro-frontend.github.io/react-grid-system

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-grid-system](https://github.com/trendmicro-frontend/react-grid-system):

  ```
  npm install --save react @trendmicro/react-grid-system
  ```

2. At this point you can import `@trendmicro/react-grid-system` and its styles in your application as follows:

  ```js
  import {
      Provider as GridSystemProvider,
      Container,
      Row,
      Col
  } from '@trendmicro/react-grid-system';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-grid-system/dist/react-grid-system.css';
  ```

## Recommended Setup

Create a common components directory including the GridSystem component, as shown below:
```
components/
  GridSystem/
    index.js
```

**components/GridSystem/index.js**
```jsx
import '@trendmicro/react-grid-system/dist/react-grid-system.css';
export {
    Provider,
    Container,
    Row,
    Col
} from '@trendmicro/react-grid-system';
```

Then, import components like below:
```jsx
import {
    Provider as GridSystemProvider,
    Container,
    Row,
    Col
} from './components/GridSystem';
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

### Provider

You can wrap `<Container />`, `<Row />`, and `<Col />` in `<Provider />` to pass grid system config through context.

```jsx
<Provider
    breakpoints={[576, 768, 992, 1200]}
    containerWidths={[540, 720, 960, 1140]}
    columns={12}
    gutterWidth={20}
    layout="flexbox"
>
    <Container>
        <Row>
            <Col>col</Col>
            <Col>col</Col>
            <Col>col</Col>
        </Row>
    </Container>
    <Container>
        <Row>
            <Col>col</Col>
            <Col>col</Col>
        </Row>
    </Container>
</Provider>
```

## API

### Properties

#### Provider

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
breakpoints | Number[] | [576, 768, 992, 1200, 0] | The breakpoints (minimum width) of devices in screen class sm, md, lg, xl, and xxl.
containerWidths | Number[] | [540, 720, 960, 1140, 0] | The container widths in pixels of devices in screen class sm, md, lg, xl, and xxl.
columns | Number | 12 | The number of columns.
gutterWidth | Number | 30 | The horizontal padding (called gutter) between two columns. A gutter width of 30 means 15px on each side of a column.
layout | One of:<br>'floats'<br>'flexbox' | 'floats' | The grid system layout.

#### Container

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
fluid | Boolean | false | True makes the container full-width, false fixed-width.
xs | Boolean | false | True makes container fluid only in xs, not present means fluid everywhere.
sm | Boolean | false | True makes container fluid only in sm, not present means fluid everywhere.
md | Boolean | false | True makes container fluid only in md, not present means fluid everywhere.
lg | Boolean | false | True makes container fluid only in lg, not present means fluid everywhere.
xl | Boolean | false | True makes container fluid only in xl, not present means fluid everywhere.
xxl | Boolean | false | True makes container fluid only in xxl, not present means fluid everywhere.
columns | Number | 12 | The number of columns.
gutterWidth | Number | 30 | The horizontal padding (called gutter) between two columns. A gutter width of 30 means 15px on each side of a column.
layout | One of:<br>'floats'<br>'flexbox' | 'floats' | The grid system layout.
onResize | Function({ screenClass }) | | A callback fired when the resize event occurs.

#### Row

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
columns | Number | 12 | The number of columns.
gutterWidth | Number | 30 | The horizontal padding (called gutter) between two columns. A gutter width of 30 means 15px on each side of a column.
layout | One of:<br>'floats'<br>'flexbox' | 'floats' | The grid system layout.

#### Col

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
width | Number or 'auto' | | The width of the column for all screen classes.
xs | Boolean, Number or 'auto' | | The width of the column for screen class `xs`.
sm | Boolean, Number or 'auto' | | The width of the column for screen class `sm`.
md | Boolean, Number or 'auto' | | The width of the column for screen class `md`.
lg | Boolean, Number or 'auto' | | The width of the column for screen class `lg`.
xl | Boolean, Number or 'auto' | | The width of the column for screen class `xl`.
xxl | Boolean, Number or 'auto' | | The width of the column for screen class `xxl`.
offset | { xs, sm, md, lg, xl, xxl } | | The offset of this column for all screen classes.
pull | { xs, sm, md, lg, xl, xxl } | | The amount this column is pulled to the left for all screen classes.
push | { xs, sm, md, lg, xl, xxl } | | The amount this column is pushed to the right for all screen classes.

## License

MIT
