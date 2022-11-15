import React from 'react';
import styled from 'styled-components';
import CommentContainer from '../Components/RightInterior/Home/CommentContainer';

const Home = () => {
    document.title = "H-Genie.com";

    return (
        <>
            <Img src="./images/miniroom.jpg" alt="miniroom" />
            <CommentContainer />
        </>
    )
}

export default Home;

const Img = styled.img`
    width : 100%;
    height : 346px;
    margin-bottom : 10px;
`;