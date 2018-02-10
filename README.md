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
      Container, Row, Col,
      Visible, Hidden
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
      Container, Row, Col,
      Visible, Hidden
} from '@trendmicro/react-grid-system';
```

Then, import components like below:
```jsx
import {
      Provider as GridSystemProvider,
      Container, Row, Col,
      Visible, Hidden
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

### Visible

```jsx
<Visible xs>
    Visible on extra small
</Visible>
<Visible sm>
    Visible on small
</Visible>
<Visible md>
    Visible on medium
</Visible>
<Visible lg>
    Visible on large
</Visible>
<Visible xl>
    Visible on extra large
</Visible>
<Visible xxl>
    Visible on double extra large
</Visible>
```

### Hidden

```jsx
<Hidden xs sm>
    Hidden on extra small and small
</Hidden>
<Hidden md lg>
    Hidden on medium and large
</Hidden>
```

## API

### Properties

#### Provider

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
breakpoints | Number[] | [576, 768, 992, 1200, 0] | The breakpoints (minimum width) of devices in screen class `sm`, `md`, `lg`, `xl`, and `xxl`.
containerWidths | Number[] | [540, 720, 960, 1140, 0] | The container widths in pixels of devices in screen class `sm`, `md`, `lg`, `xl`, and `xxl`.
columns | Number | 12 | The number of columns.
gutterWidth | Number | 30 | The horizontal padding (called gutter) between two columns. A gutter width of 30 means 15px on each side of a column.
layout | One of:<br>'floats'<br>'flexbox' | 'floats' | The grid system layout.

#### Container

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
fluid | Boolean | false | True makes the container full-width, false fixed-width.
xs | Boolean | false | True makes container fluid only in `xs`, not present means fluid everywhere.
sm | Boolean | false | True makes container fluid only in `sm`, not present means fluid everywhere.
md | Boolean | false | True makes container fluid only in `md`, not present means fluid everywhere.
lg | Boolean | false | True makes container fluid only in `lg`, not present means fluid everywhere.
xl | Boolean | false | True makes container fluid only in `xl`, not present means fluid everywhere.
xxl | Boolean | false | True makes container fluid only in `xxl`, not present means fluid everywhere.
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
width | Number or 'auto' | | The width of the column for all screen classes.<br>Note: 'auto' is only supported with the flexbox layout.
xs | Number, Boolean or 'auto' | | The width of the column for screen class `xs`.<br>Note: 'auto' and _true_ are only supported with the flexbox layout.
sm | Number, Boolean or 'auto' | | The width of the column for screen class `sm`.<br>Note: 'auto' and _true_ are only supported with the flexbox layout.
md | Number, Boolean or 'auto' | | The width of the column for screen class `md`.<br>Note: 'auto' and _true_ are only supported with the flexbox layout.
lg | Number, Boolean or 'auto' | | The width of the column for screen class `lg`.<br>Note: 'auto' and _true_ are only supported with the flexbox layout.
xl | Number, Boolean or 'auto' | | The width of the column for screen class `xl`.<br>Note: 'auto' and _true_ are only supported with the flexbox layout.
xxl | Number, Boolean or 'auto' | | The width of the column for screen class `xxl`.<br>Note: 'auto' and _true_ are only supported with the flexbox layout.
offset | { xs, sm, md, lg, xl, xxl } | | The offset of this column for all screen classes.
pull | { xs, sm, md, lg, xl, xxl } | | The amount this column is pulled to the left for all screen classes.
push | { xs, sm, md, lg, xl, xxl } | | The amount this column is pushed to the right for all screen classes.

#### Visible

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
xs | Boolean | false | Visible on extra small devices.
sm | Boolean | false | Visible on small devices. 
md | Boolean | false | Visible on medimum devices.
lg | Boolean | false | Visible on large devices.
xl | Boolean | false | Visible on extra large devices.
xxl | Boolean | false | Visible on double extra large devices.
onResize | Function({ screenClass }) | | A callback fired when the resize event occurs.

#### Hidden

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
xs | Boolean | false | Hidden on extra small devices.
sm | Boolean | false | Hidden on small devices. 
md | Boolean | false | Hidden on medimum devices.
lg | Boolean | false | Hidden on large devices.
xl | Boolean | false | Hidden on extra large devices.
xxl | Boolean | false | Hidden on double extra large devices.
onResize | Function({ screenClass }) | | A callback fired when the resize event occurs.

## License

MIT
