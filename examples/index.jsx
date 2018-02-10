/* eslint react/no-children-prop: 0 */
import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import CodeBlock from './CodeBlock';
import floatsCustomColumns from './floats/custom-columns.md';
import floatsStackedToHorizontal from './floats/stacked-to-horizontal.md';
import floatsMobileDesktop from './floats/mobile-desktop.md';
import floatsMobileTabletDesktops from './floats/mobile-tablet-desktops.md';
import floatsResponsiveColumnResets from './floats/responsive-column-resets.md';
import floatsOffsettingColumns from './floats/offsetting-columns.md';
import floatsNestingColumns from './floats/nesting-columns.md';
import floatsColumnOrdering from './floats/column-ordering.md';
import flexboxEqualWidth from './flexbox/equal-width.md';
import flexboxCustomColumns from './flexbox/custom-columns.md';
import flexboxSettingOneColumnWidth from './flexbox/setting-one-column-width.md';
import flexboxVariableWidthContent from './flexbox/variable-width-content.md';
import flexboxEqualWidthMultiRow from './flexbox/equal-width-multi-row.md';
import flexboxAllBreakpoints from './flexbox/all-breakpoints.md';
import flexboxStackedToHorizontal from './flexbox/stacked-to-horizontal.md';
import flexboxMixMatch from './flexbox/mix-match.md';
import flexboxVerticalAlignment from './flexbox/vertical-alignment.md';
import flexboxHorizontalAlignment from './flexbox/horizontal-alignment.md';
import flexboxNoGutters from './flexbox/no-gutters.md';
import flexboxColumnWrapping from './flexbox/column-wrapping.md';
import flexboxColumnBreaks from './flexbox/column-breaks.md';
import flexboxOffsettingColumns from './flexbox/offsetting-columns.md';
import flexboxAutoMargin from './flexbox/auto-margin.md';
import flexboxNesting from './flexbox/nesting.md';
import visible from './visible.md';
import hidden from './hidden.md';
import { Provider, Container, Row, Col } from '../src';

const LayoutHeading = styled.h2`
    border-bottom: 1px solid #ccc;
    padding-bottom: 8px;
    margin-bottom: 8px;
`;

const Example = styled.div`
    margin-bottom: 16px;
`;

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
                <Provider>
                    <Container
                        fluid
                        onResize={({ screenClass }) => {
                            this.setState({ screenClass: screenClass });
                        }}
                    >
                        <Row>
                            <Col width={12} md={3} push={{ md: 9 }}>
                            </Col>
                            <Col width={12} md={9} pull={{ md: 3 }}>
                                <LayoutHeading>Floats</LayoutHeading>
                                <Example>
                                    <h3>Example: Custom columns</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={floatsCustomColumns} />
                                </Example>
                                <Example>
                                    <h3>Example: Stacked to horizontal</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={floatsStackedToHorizontal} />
                                </Example>
                                <Example>
                                    <h3>Example: Mobile and desktop</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={floatsMobileDesktop} />
                                </Example>
                                <Example>
                                    <h3>Example: Mobile, tablet, desktops</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={floatsMobileTabletDesktops} />
                                </Example>
                                <Example>
                                    <h3>Example: Responsive column resets</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={floatsResponsiveColumnResets} />
                                </Example>
                                <Example>
                                    <h3>Example: Offsetting columns</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={floatsOffsettingColumns} />
                                </Example>
                                <Example>
                                    <h3>Example: Nesting columns</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={floatsNestingColumns} />
                                </Example>
                                <Example>
                                    <h3>Example: Column ordering</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={floatsColumnOrdering} />
                                </Example>
                                <LayoutHeading>Flexbox</LayoutHeading>
                                <Example>
                                    <h3>Example: Equal width</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxEqualWidth} />
                                </Example>
                                <Example>
                                    <h3>Example: Custom columns</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxCustomColumns} />
                                </Example>
                                <Example>
                                    <h3>Example: Setting one column width</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxSettingOneColumnWidth} />
                                </Example>
                                <Example>
                                    <h3>Example: Variable width content</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxVariableWidthContent} />
                                </Example>
                                <Example>
                                    <h3>Example: Equal-width multi-row</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxEqualWidthMultiRow} />
                                </Example>
                                <Example>
                                    <h3>Example: All breakpoints</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxAllBreakpoints} />
                                </Example>
                                <Example>
                                    <h3>Example: Stacked to horizontal</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxStackedToHorizontal} />
                                </Example>
                                <Example>
                                    <h3>Example: Mix and match</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxMixMatch} />
                                </Example>
                                <Example>
                                    <h3>Example: Vertical alignment</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxVerticalAlignment} />
                                </Example>
                                <Example>
                                    <h3>Example: Horizontal alignment</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxHorizontalAlignment} />
                                </Example>
                                <Example>
                                    <h3>Example: No gutters</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxNoGutters} />
                                </Example>
                                <Example>
                                    <h3>Example: Column wrapping</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxColumnWrapping} />
                                </Example>
                                <Example>
                                    <h3>Example: Column breaks</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxColumnBreaks} />
                                </Example>
                                <Example>
                                    <h3>Example: Offsetting columns</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxOffsettingColumns} />
                                </Example>
                                <Example>
                                    <h3>Example: Auto margin</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxAutoMargin} />
                                </Example>
                                <Example>
                                    <h3>Example: Nesting</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={flexboxNesting} />
                                </Example>
                                <LayoutHeading>Responsive Utilities</LayoutHeading>
                                <Example>
                                    <h3>Example: Visible</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={visible} />
                                </Example>
                                <Example>
                                    <h3>Example: Hidden</h3>
                                    <div>screenClass={screenClass}</div>
                                    <CodeBlock code={hidden} />
                                </Example>
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
