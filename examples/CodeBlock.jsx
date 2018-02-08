import PropTypes from 'prop-types';
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

const Comment = (props) => null;

const Row = styled(_Row)`
    margin-bottom: 1rem;
`;

const Col = styled(_Col)`
    padding-top: .75rem;
    padding-bottom: .75rem;
    background-color: rgba(86,61,124,.15);
    border: 1px solid rgba(86,61,124,.2);
`;

const Code = ({ code, ...props }) => (
    <div {...props}>
        <Parser
            components={{ Comment, Provider, Container, Row, Col }}
            jsx={code}
        />
        <div style={{ width: '100%' }}>
            <Markdown source={'```jsx\n' + code + '\n```'} />
        </div>
    </div>
);

Code.propTypes = {
    code: PropTypes.string
};

export default Code;
