import { Fragment } from 'react';
import styled from 'styled-components';
import { Provider, Container, Row, Col, Visible, Hidden } from '../src';
import Text from './Text';

global.Fragment = Fragment;
global.Text = Text;

global.Row = styled(Row)`
    margin-bottom: 1rem;
`;

global.Col = styled(Col)`
    padding-top: .75rem;
    padding-bottom: .75rem;
    background-color: rgba(86, 61, 124, .15);
    border: 1px solid rgba(86, 61, 124, .2);
`;

global.Provider = Provider;
global.Container = Container;
global.Visible = Visible;
global.Hidden = Hidden;
