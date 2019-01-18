### Equal width

```jsx
<Container fluid layout="flexbox">
    <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
    </Row>
    <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
    </Row>
</Container>
```

### Custom columns

```jsx
<Container fluid columns={20} layout="flexbox">
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

### Setting one column width

```jsx
<Container fluid layout="flexbox">
    <Row>
        <Col>1 of 3</Col>
        <Col width={6}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
    </Row>
    <Row>
        <Col>1 of 3</Col>
        <Col width={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
    </Row>
</Container>
```

### Variable width content

```jsx
<Container fluid layout="flexbox">
    <Row style={{ justifyContent: 'center' }}>
        <Col xs lg={2}>1 of 3</Col>
        <Col width={12} md="auto">Variable width content</Col>
        <Col xs lg={2}>3 of 3</Col>
    </Row>
    <Row>
        <Col>1 of 3</Col>
        <Col width={12} md="auto">Variable width content</Col>
        <Col xs lg={2}>3 of 3</Col>
    </Row>
</Container>
```

### Equal-width multi-row

```jsx
<Container fluid layout="flexbox">
    <Row>
        <Col>col</Col>
        <Col>col</Col>
    </Row>
    <Row>
        <Col>col</Col>
        <Col>col</Col>
    </Row>
</Container>
```

### All breakpoints

```jsx
<Container fluid layout="flexbox">
    <Row>
        <Col>col</Col>
        <Col>col</Col>
        <Col>col</Col>
        <Col>col</Col>
    </Row>
    <Row>
        <Col width={8}>col-8</Col>
        <Col width={4}>col-4</Col>
    </Row>
</Container>
```

### Stacked to horizontal

```jsx
<Container fluid layout="flexbox">
    <Row>
        <Col sm={8}>col-sm-8</Col>
        <Col sm={4}>col-sm-4</Col>
    </Row>
    <Row>
        <Col sm>col-sm</Col>
        <Col sm>col-sm</Col>
        <Col sm>col-sm</Col>
    </Row>
</Container>
```

### Mix and match

```jsx
<Container fluid layout="flexbox">
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

### Vertical alignment

```jsx
<Container fluid layout="flexbox">
    <Row
        style={{
            alignItems: 'flex-start',
            minHeight: '10rem',
            backgroundColor: 'rgba(255, 0, 0, .1)'
        }}
    >
        <Col>One of three columns</Col>
        <Col>One of three columns</Col>
        <Col>One of three columns</Col>
    </Row>
    <Row
        style={{
            alignItems: 'center',
            minHeight: '10rem',
            backgroundColor: 'rgba(255, 0, 0, .1)'
        }}
    >
        <Col>One of three columns</Col>
        <Col>One of three columns</Col>
        <Col>One of three columns</Col>
    </Row>
    <Row
        style={{
            alignItems: 'flex-end',
            minHeight: '10rem',
            backgroundColor: 'rgba(255, 0, 0, .1)'
        }}
    >
        <Col>One of three columns</Col>
        <Col>One of three columns</Col>
        <Col>One of three columns</Col>
    </Row>
    <Row
        style={{
            minHeight: '10rem',
            backgroundColor: 'rgba(255, 0, 0, .1)'
        }}
    >
        <Col style={{ alignSelf: 'flex-start' }}>One of three columns</Col>
        <Col style={{ alignSelf: 'center' }}>One of three columns</Col>
        <Col style={{ alignSelf: 'flex-end' }}>One of three columns</Col>
    </Row>
</Container>
```

### Horizontal alignment

```jsx
<Container fluid layout="flexbox">
    <Row style={{ justifyContent: 'flex-start' }}>
        <Col width={4}>One of two columns</Col>
        <Col width={4}>One of two columns</Col>
    </Row>
    <Row style={{ justifyContent: 'center' }}>
        <Col width={4}>One of two columns</Col>
        <Col width={4}>One of two columns</Col>
    </Row>
    <Row style={{ justifyContent: 'flex-end' }}>
        <Col width={4}>One of two columns</Col>
        <Col width={4}>One of two columns</Col>
    </Row>
    <Row style={{ justifyContent: 'space-around' }}>
        <Col width={4}>One of two columns</Col>
        <Col width={4}>One of two columns</Col>
    </Row>
    <Row style={{ justifyContent: 'space-between' }}>
        <Col width={4}>One of two columns</Col>
        <Col width={4}>One of two columns</Col>
    </Row>
</Container>
```

### No gutters

```jsx
<Container fluid layout="flexbox" gutterWidth={0}>
    <Row>
        <Col width={12} sm={6} md={8}>col-12 col-sm-6 col-md-8</Col>
        <Col width={6} md={4}>col-6 col-md-4</Col>
    </Row>
</Container>
```

### Column wrapping

```jsx
<Container fluid layout="flexbox">
    <Row>
        <Col width={9}>col-9</Col>
        <Col width={4}>col-4</Col>
        <Col width={6}>col-6</Col>
    </Row>
</Container>
```

### Column breaks

```jsx
<Container fluid layout="flexbox">
    <Row>
        <Col width={6} sm={3}>col-6 col-sm-3</Col>
        <Col width={6} sm={3}>col-6 col-sm-3</Col>
        {/* Force next columns to break to new line */}
        <div style={{ width: '100%' }} />
        <Col width={6} sm={3}>col-6 col-sm-3</Col>
        <Col width={6} sm={3}>col-6 col-sm-3</Col>
    </Row>
</Container>
```

### Offsetting columns

```jsx
<Container fluid layout="flexbox">
    <Row>
        <Col md={4}>col-md-4</Col>
        <Col md={4} offset={{ md: 4 }}>col-md-4 col-offset-md-4</Col>
    </Row>
    <Row>
        <Col md={3} offset={{ md: 3 }}>col-md-3 col-offset-md-3</Col>
        <Col md={3} offset={{ md: 3 }}>col-md-3 col-offset-md-3</Col>
    </Row>
    <Row>
        <Col md={6} offset={{ md: 3 }}>col-md-6 col-offset-md-3</Col>
    </Row>
    <Row>
        <Col sm={5} md={6}>col-sm-5 col-md-6</Col>
        <Col sm={5} md={6} offset={{ sm: 2, md: 0 }}>col-sm-5 col-offset-sm-2 col-md-6 col-offset-md-0</Col>
    </Row>
    <Row>
        <Col sm={6} md={5} lg={6}>col-sm-6 col-md-5 col-lg-6</Col>
        <Col sm={6} md={5} lg={6} offset={{ md: 2, lg: 0 }}>col-sm-6 col-md-5 col-offset-md-2 col-lg-6 col-offset-lg-0</Col>
    </Row>
</Container>
```

### Auto margin

```jsx
<Container fluid layout="flexbox">
    <Row>
        <Col md={4}>col-md-4</Col>
        <Col md={4} style={{ marginLeft: 'auto' }}>col-md-4 ml-auto</Col>
    </Row>
    <Row>
        <Col width="auto" style={{ marginRight: 'auto' }}>col-auto mr-auto</Col>
        <Col width="auto">col-auto</Col>
    </Row>
</Container>
```

### Nesting

```jsx
<Container fluid layout="floats">
    <Row>
        <Col sm={9}>
            Level 1: col-sm-9
            <Row>
                <Col width={8} sm={6}>
                    Level 2: col-8 col-sm-6
                </Col>
                <Col width={4} sm={6}>
                    Level 2: col-8 col-sm-6
                </Col>
            </Row>
        </Col>
    </Row>
</Container>
```
