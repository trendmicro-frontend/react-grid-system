/* eslint react/no-children-prop: 0 */
import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import CodeBlock from './CodeBlock';
import equalWidth from './equal-width.md';
import settingOneColumnWidth from './setting-one-column-width.md';
import variableWidthContent from './variable-width-content.md';
import equalWidthMultiRow from './equal-width-multi-row.md';
import allBreakpoints from './all-breakpoints.md';
import stackedToHorizontal from './stacked-to-horizontal.md';
import mixAndMatch from './mix-and-match.md';
import { Provider, Container, Row, Col } from '../src';

class App extends React.Component {
    state = {
        screenClass: ''
    };

    conainter = null;

    render() {
        const name = 'React Grid System';
        const url = 'https://github.com/trendmicro-frontend/react-grid-system';
        const { screenClass } = this.state;

        return (
            <div>
                <Navbar name={name} url={url} />
                <Provider layout="flex">
                    <Container
                        onResize={({ screenClass }) => {
                            this.setState({ screenClass: screenClass });
                        }}
                    >
                        <Row>
                            <Col width={12} md={3} push={{ md: 9 }}>
                            </Col>
                            <Col width={12} md={9} pull={{ md: 3 }}>
                                <h3>[{screenClass}] Equal width</h3>
                                <CodeBlock code={equalWidth} />
                                <h3>[{screenClass}] Setting one column width</h3>
                                <CodeBlock code={settingOneColumnWidth} />
                                <h3>[{screenClass}] Variable width content</h3>
                                <CodeBlock code={variableWidthContent} />
                                <h3>[{screenClass}] Equal-width multi-row</h3>
                                <CodeBlock code={equalWidthMultiRow} />
                                <h3>[{screenClass}] All breakpoints</h3>
                                <CodeBlock code={allBreakpoints} />
                                <h3>[{screenClass}] Stacked to horizontal</h3>
                                <CodeBlock code={stackedToHorizontal} />
                                <h3>[{screenClass}] Mix and match</h3>
                                <CodeBlock code={mixAndMatch} />
                            </Col>
                        </Row>
                    </Container>
                </Provider>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
