<Container layout="floats">
    <Row>
        <Col sm={5} md={6}>col-sm-5 col-md-6</Col>
        <Col sm={5} md={6} offset={{ sm: 2, md: 0 }}>col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0</Col>
    </Row>
    <Row>
        <Col sm={6} md={5} lg={6}>col-sm-6 col-md-5 col-lg-6</Col>
        <Col sm={6} md={5} lg={6} offset={{ md: 2, lg: 0 }}>col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0</Col>
    </Row>
</Container>
