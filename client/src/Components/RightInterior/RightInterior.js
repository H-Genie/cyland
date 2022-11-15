import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navigator from './Navigator';
import Home from '../../router/Home';
import Resume from '../../router/Resume';
import Portfolio from '../../router/Portfolio';
import Story from '../../router/Story';
import Status404 from '../../router/Status404';
import { setPathname } from '../../modules/selectColor';

const RightInterior = () => {
    setPathname();

    return (
        <Interior>
            <h5>ⓦelcømё て♡ GЁЙIЭĿÅПÐ ~~♬</h5>
            <Navigator />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/story" component={Story} />
                <Route render={Status404} />
            </Switch>
        </Interior>
    )
}

export default RightInterior;

const Interior = styled.div`
    width: calc(100% - 40px);
    height: 90%;
    border: 2px solid #85c8f2;
    border-radius: 20px;
    margin-left: 10px;
    padding: 20px 30px 0 35px;
    color : rgb(108, 108, 108);

    & > h5 {
        font-family : 'SCDream6';
        letter-spacing : -1px;
        margin-bottom : 20px;
    }
`;