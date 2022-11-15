import React from 'react';
import styled from 'styled-components';
import RightExterior from './RightExterior';

const CylandRight = () => {
    return (
        <Right>
            <RightExterior />
        </Right>
    )
}

export default CylandRight;

const Right = styled.div`
    width : 70%;
    height : 100%;
    background-color : #85c8f2;
    border-radius : 20px;
    display : flex;
    align-items : center;
`;