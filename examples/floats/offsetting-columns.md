<Container layout="floats">
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
