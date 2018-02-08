<Container layout="flexbox">
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
