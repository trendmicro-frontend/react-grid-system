### Rendering content based on the screen class

```jsx
<Container fluid layout="flexbox">
    <ScreenClass>
        {screenClass => (
            <Row>
                <Col>
                    <Text
                        bold={screenClass === 'xs'}
                        color={screenClass === 'xs' ? '#222' : '#888'}
                    >
                        Extra small
                    </Text>
                </Col>
                <Col>
                    <Text
                        bold={screenClass === 'sm'}
                        color={screenClass === 'sm' ? '#222' : '#888'}
                    >
                        Small
                    </Text>
                </Col>
                <Col>
                    <Text
                        bold={screenClass === 'md'}
                        color={screenClass === 'md' ? '#222' : '#888'}
                    >
                        Medium
                    </Text>
                </Col>
                <Col>
                    <Text
                        bold={screenClass === 'lg'}
                        color={screenClass === 'lg' ? '#222' : '#888'}
                    >
                        Large
                    </Text>
                </Col>
                <Col>
                    <Text
                        bold={screenClass === 'xl'}
                        color={screenClass === 'xl' ? '#222' : '#888'}
                    >
                        Extra large
                    </Text>
                </Col>
                <Col>
                    <Text
                        bold={screenClass === 'xxl'}
                        color={screenClass === 'xxl' ? '#222' : '#888'}
                    >
                        Extra extra large
                    </Text>
                </Col>
            </Row>
        )}
    </ScreenClass>
</Container>
```

### Showing or hiding content

```jsx
<Container fluid layout="flexbox">
    <Row>
        <Col>
            <Hidden xs>
                <Text color="gray">Extra small</Text>
            </Hidden>
            <Visible xs>
                <Text bold color="#222">Extra small</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden sm>
                <Text color="gray">Small</Text>
            </Hidden>
            <Visible sm>
                <Text bold color="#222">Small</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden md>
                <Text color="gray">Medium</Text>
            </Hidden>
            <Visible md>
                <Text bold color="#222">Medium</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden lg>
                <Text color="gray">Large</Text>
            </Hidden>
            <Visible lg>
                <Text bold color="#222">Large</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden xl>
                <Text color="gray">Extra large</Text>
            </Hidden>
            <Visible xl>
                <Text bold color="#222">Extra large</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden xxl>
                <Text color="gray">Extra extra large</Text>
            </Hidden>
            <Visible xxl>
                <Text bold color="#222">Extra extra large</Text>
            </Visible>
        </Col>
    </Row>
</Container>
```

```jsx
<Container fluid layout="flexbox">
    <Row>
        <Col>
            <Hidden xs sm>
                <Text color="gray">Extra small and small</Text>
            </Hidden>
            <Visible xs sm>
                <Text bold color="#222">Extra small and small</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden md lg>
                <Text color="gray">Medium and large</Text>
            </Hidden>
            <Visible md lg>
                <Text bold color="#222">Medium and large</Text>
            </Visible>
        </Col>
        <Col>
            <Hidden xl xxl>
                <Text color="gray">Extra large and extra extra large</Text>
            </Hidden>
            <Visible xl xxl>
                <Text bold color="#222">Extra large and extra extra large</Text>
            </Visible>
        </Col>
    </Row>
</Container>
```
