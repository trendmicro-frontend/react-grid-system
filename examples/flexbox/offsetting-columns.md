<Container layout="flexbox">
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
