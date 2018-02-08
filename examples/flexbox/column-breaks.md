<Container layout="flexbox">
    <Row>
        <Col width={6} sm={3}>col-6 col-sm-3</Col>
        <Col width={6} sm={3}>col-6 col-sm-3</Col>
        {/* Force next columns to break to new line */}
        <div style={{ width: '100%' }} />
        <Col width={6} sm={3}>col-6 col-sm-3</Col>
        <Col width={6} sm={3}>col-6 col-sm-3</Col>
    </Row>
</Container>
