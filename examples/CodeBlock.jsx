import React from 'react';
import Markdown from 'react-markdown';
import Parser from 'react-jsx-parser';
import styled from 'styled-components';
import {
    Provider,
    Container,
    Row as _Row,
    Col as _Col
} from '../src';

const Col = styled(_Col)`
    padding-top: .75rem;
    padding-bottom: .75rem;
    background-color: rgba(86,61,124,.15);
    border: 1px solid rgba(86,61,124,.2);
`;

const Row = styled(_Row)`
    margin-bottom: 1rem;
`;

export default (props) => (
    <div>
        <Parser
            components={{ Provider, Container, Row, Col }}
            jsx={props.code}
        />
        <div style={{ width: '100%' }}>
            <Markdown source={'```jsx\n' + props.code + '\n```'} />
        </div>
    </div>
);
