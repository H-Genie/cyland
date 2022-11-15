import React from 'react';
import styled from 'styled-components';
import RightInterior from './RightInterior/RightInterior';

const RightExterior = () => {
    return (
        <Exterior>
            <RightInterior />
            <a href='https://nomadcoders.co/community/thread/577' target='_blank' rel='noreferrer'>
                <Badge src='/images/badge.png' />
            </a>
        </Exterior>
    )
}

export default RightExterior;

const Exterior = styled.div`
    width : calc(100% - 40px);
    height : 90%;
    background-color : white;
    border-radius : 20px;
    display: flex;
    align-items: center;
    
    position: relative;
`;

const Badge = styled.img`
    position: absolute;
    top: -36px;
    right: -26px;
    width: 150px;
`;