<Container layout="floats">
    <Comment>Stack the columns on mobile by making one full-width and the other half-width</Comment>
    <Row>
        <Col xs={12} md={8}>col-xs-12 col-md-8</Col>
        <Col xs={6} md={4}>col-xs-6 col-md-4</Col>
    </Row>
    <Comment>Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop</Comment>
    <Row>
        <Col xs={6} md={4}>col-xs-6 col-md-4</Col>
        <Col xs={6} md={4}>col-xs-6 col-md-4</Col>
        <Col xs={6} md={4}>col-xs-6 col-md-4</Col>
    </Row>
    <Comment>Columns are always 50% wide, on mobile and desktop</Comment>
    <Row>
        <Col xs={6}>col-xs-6</Col>
        <Col xs={6}>col-xs-6</Col>
    </Row>
</Container>
