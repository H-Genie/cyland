import React from 'react';
import styled from 'styled-components';
import { Section } from '../styled/Router';

const Status404 = ({ location }) => {
    const pathname = location.pathname

    return (
        <Center>
            <p>{pathname.substring(1)} 페이지가 존재하지 않습니다</p>
        </Center>
    )
}

export default Status404;

const Center = styled(Section)`
    display : flex;
    justify-content : center;
    align-items : center;
`;