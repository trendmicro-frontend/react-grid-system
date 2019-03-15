### Custom columns

```jsx
<Container fluid columns={20} layout="floats">
    <Row>
        <Col sm={5} md={4} xl={2}>col</Col>
        <Col sm={5} md={4} xl={2}>col</Col>
        <Col sm={5} md={4} xl={2}>col</Col>
        <Col sm={5} md={4} xl={2}>col</Col>
        <Col sm={5} md={4} xl={2}>col</Col>
        <Col sm={5} md={4} xl={2}>col</Col>
        <Col sm={5} md={4} xl={2}>col</Col>
    </Row>
</Container>
```

### Stacked to horizontal

```jsx
<Container fluid layout="floats">
    <Row>
        <Col md={1}>col-md-1</Col>
        <Col md={1}>col-md-1</Col>
        <Col md={1}>col-md-1</Col>
        <Col md={1}>col-md-1</Col>
        <Col md={1}>col-md-1</Col>
        <Col md={1}>col-md-1</Col>
        <Col md={1}>col-md-1</Col>
        <Col md={1}>col-md-1</Col>
        <Col md={1}>col-md-1</Col>
        <Col md={1}>col-md-1</Col>
        <Col md={1}>col-md-1</Col>
        <Col md={1}>col-md-1</Col>
    </Row>
    <Row>
        <Col md={8}>col-md-8</Col>
        <Col md={4}>col-md-4</Col>
    </Row>
    <Row>
        <Col md={4}>col-md-4</Col>
        <Col md={4}>col-md-4</Col>
        <Col md={4}>col-md-4</Col>
    </Row>
    <Row>
        <Col md={6}>col-md-6</Col>
        <Col md={6}>col-md-6</Col>
    </Row>
</Container>
```

### Mobile and desktop

```jsx
<Container fluid layout="floats">
    <Row>
        <div>
            Stack the columns on mobile by making one full-width and the other half-width
        </div>
        <Col xs={12} md={8}>col-xs-12 col-md-8</Col>
        <Col xs={6} md={4}>col-xs-6 col-md-4</Col>
    </Row>
    <Row>
        <div>
            Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop
        </div>
        <Col xs={6} md={4}>col-xs-6 col-md-4</Col>
        <Col xs={6} md={4}>col-xs-6 col-md-4</Col>
        <Col xs={6} md={4}>col-xs-6 col-md-4</Col>
    </Row>
    <Row>
        <div>
            Columns are always 50% wide, on mobile and desktop
        </div>
        <Col xs={6}>col-xs-6</Col>
        <Col xs={6}>col-xs-6</Col>
    </Row>
</Container>
```

### Mobile, tablet, desktops

```jsx
<Container fluid layout="floats">
    <Row>
        <Col xs={12} sm={6} md={8}>col-xs-12 col-sm-6 col-md-8</Col>
        <Col xs={6} sm={6} md={4}>col-xs-6 col-sm-6 col-md-4</Col>
    </Row>
    <Row>
        <Col xs={6} sm={4} md={4}>col-xs-6 col-sm-4 col-md-4</Col>
        <Col xs={6} sm={4} md={4}>col-xs-6 col-sm-4 col-md-4</Col>
        <Col xs={6} sm={4} md={4}>col-xs-6 col-sm-4 col-md-4</Col>
    </Row>
</Container>
```

### Responsive column resets

```jsx
<Container fluid layout="floats">
    <Row>
        <Col sm={5} md={6}>col-sm-5 col-md-6</Col>
        <Col sm={5} md={6} offset={{ sm: 2, md: 0 }}>col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0</Col>
    </Row>
    <Row>
        <Col sm={6} md={5} lg={6}>col-sm-6 col-md-5 col-lg-6</Col>
        <Col sm={6} md={5} lg={6} offset={{ md: 2, lg: 0 }}>col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0</Col>
    </Row>
</Container>
```

### Offsetting columns

```jsx
<Container fluid layout="floats">
    <Row>
        <Col md={4}>col-md-4</Col>
        <Col md={4} offset={{ md: 4 }}>col-md-4 col-md-offset-4</Col>
    </Row>
    <Row>
        <Col md={3} offset={{ md: 3 }}>col-md-3 col-md-offset-3</Col>
        <Col md={3} offset={{ md: 3 }}>col-md-3 col-md-offset-3</Col>
    </Row>
    <Row>
        <Col md={6} offset={{ md: 3 }}>col-md-6 col-md-offset-3</Col>
    </Row>
</Container>
```

### Nesting columns

```jsx
<Container fluid layout="floats">
    <Row>
        <Col md={9}>
            Level 1: col-md-9
            <Row>
                <Col md={6}>
                    Level 2: col-md-6
                </Col>
                <Col md={6}>
                    Level 2: col-md-6
                </Col>
            </Row>
        </Col>
    </Row>
</Container>
```

### Column ordering

```jsx
<Container fluid layout="floats">
    <Row>
        <Col md={9} push={{ md: 3 }}>col-md-9 col-md-push-3</Col>
        <Col md={3} pull={{ md: 9 }}>col-md-3 col-md-pull-9</Col>
    </Row>
</Container>
```
