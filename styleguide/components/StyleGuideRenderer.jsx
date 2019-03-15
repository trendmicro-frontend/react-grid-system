import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap-buttons';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import GitHubCorner from 'react-github-corner';
import styled from 'styled-components';
import { ScreenClass } from '../../src';
import pkg from '../../package.json';
import store, { initialState } from './store';

const Root = styled.div`
    min-height: 100vh;
    background-color: #fff;
    padding-left: 240px;
`;

const Main = styled.main`
    padding: 16px 32px;
    margin: 0 auto;
    display: block;
`;

const Sidebar = styled.div`
    background-color: #f5f5f5;
    border: #e8e8e8 solid;
    border-width: 0 1px 0 0;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 240px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
`;

const Space = styled.span`
    display: inline-block;
    width: ${props => props.width}px;
`;

const TextBlock = styled.div`
    padding: 16px;
    border-bottom: 1px #e8e8e8 solid;
    color: #333;
    margin: 0;
    font-size: 18px;
    font-weight: normal;
`;

const handleChangeGutterWidth = (gutterWidth) => () => {
    store.dispatch({ type: 'SET_GUTTER_WIDTH', payload: gutterWidth });
};

const StyleGuideRenderer = ({
    title,
    toc,
    children,
}) => {
    const [gutterWidth, setGutterWidth] = useState(initialState.gutterWidth);

    useEffect(() => {
        const handleStateChange = () => {
            const { gutterWidth } = store.getState();
            setGutterWidth(gutterWidth);
        };

        const unsubscribe = store.subscribe(handleStateChange);

        return () => {
            unsubscribe(handleStateChange);
        };
    }, []); // Only run on mount and unmount

    return (
        <Root>
            <GitHubCorner href={pkg.homepage} />
            <Sidebar>
                <TextBlock>
                    {title}
                </TextBlock>
                <TextBlock>
                    <ScreenClass>
                        {screenClass => `Screen class: ${screenClass}`}
                    </ScreenClass>
                </TextBlock>
                <TextBlock>
                    Gutter width
                    <Space width={8} />
                    <ButtonGroup btnSize="sm">
                        <Button
                            btnStyle={gutterWidth === 0 ? 'dark' : 'default'}
                            onClick={handleChangeGutterWidth(0)}
                            style={{ minWidth: 32 }}
                        >
                            0
                        </Button>
                        <Button
                            btnStyle={gutterWidth === 24 ? 'dark' : 'default'}
                            onClick={handleChangeGutterWidth(24)}
                            style={{ minWidth: 32 }}
                        >
                            24
                        </Button>
                        <Button
                            btnStyle={gutterWidth === 48 ? 'dark' : 'default'}
                            onClick={handleChangeGutterWidth(48)}
                            style={{ minWidth: 32 }}
                        >
                            48
                        </Button>
                    </ButtonGroup>
                </TextBlock>
                <div>{toc}</div>
            </Sidebar>
            <Main id="example">
                {children}
            </Main>
        </Root>
    );
};

StyleGuideRenderer.propTypes = {
    title: PropTypes.string,
    toc: PropTypes.node,
};

export default StyleGuideRenderer;
