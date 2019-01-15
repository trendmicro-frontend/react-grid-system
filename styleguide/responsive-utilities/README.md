### Responsive Utilities

```jsx
<Container layout="flexbox">
    <Row>
        <Col>
            <Hidden xs>
                <Text color="gray">Extra small</Text>
            </Hidden>
            <Visible xs>
                <Text bold color="#c82333">Extra small</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden sm>
                <Text color="gray">Small</Text>
            </Hidden>
            <Visible sm>
                <Text bold color="#c82333">Small</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden md>
                <Text color="gray">Medium</Text>
            </Hidden>
            <Visible md>
                <Text bold color="#c82333">Medium</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden lg>
                <Text color="gray">Large</Text>
            </Hidden>
            <Visible lg>
                <Text bold color="#c82333">Large</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden xl>
                <Text color="gray">Extra large</Text>
            </Hidden>
            <Visible xl>
                <Text bold color="#c82333">Extra large</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden xxl>
                <Text color="gray">Extra extra large</Text>
            </Hidden>
            <Visible xxl>
                <Text bold color="#c82333">Extra extra large</Text>
            </Visible>
        </Col>
    </Row>
</Container>
```

```jsx
<Container layout="flexbox">
    <Row>
        <Col>
            <Hidden xs sm>
                <Text color="gray">Extra small and small</Text>
            </Hidden>
            <Visible xs sm>
                <Text bold color="#c82333">Extra small and small</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden md lg>
                <Text color="gray">Medium and large</Text>
            </Hidden>
            <Visible md lg>
                <Text bold color="#c82333">Medium and large</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden xl xxl>
                <Text color="gray">Extra large and extra extra large</Text>
            </Hidden>
            <Visible xl xxl>
                <Text bold color="#c82333">Extra large and extra extra large</Text>
            </Visible>
        </Col>
    </Row>
</Container>
```
