import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import GitHubCorner from 'react-github-corner';
import { ScreenClass } from '../../src';
import Wrapper from './Wrapper';
import pkg from '../../package.json';

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

const TextBlock = styled.div`
    padding: 16px;
    border-bottom: 1px #e8e8e8 solid;
    color: #333;
    margin: 0;
    font-size: 18px;
    font-weight: normal;
`;

const StyleGuideRenderer = ({
    title,
    toc,
    children,
}) => (
    <Root>
        <GitHubCorner href={pkg.homepage} />
        <Wrapper>
            <Main id="example">
                {children}
            </Main>
            <Sidebar>
                <TextBlock>
                    {title}
                </TextBlock>
                <TextBlock>
                    <ScreenClass>
                        {screenClass => `Screen class: ${screenClass}`}
                    </ScreenClass>
                </TextBlock>
                <div>{toc}</div>
            </Sidebar>
        </Wrapper>
    </Root>
);

StyleGuideRenderer.propTypes = {
    title: PropTypes.string,
    toc: PropTypes.node,
};

export default StyleGuideRenderer;
