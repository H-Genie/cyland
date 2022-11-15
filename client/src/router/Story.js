import React from 'react';
import { Section } from '../styled/Router';
import Visitor from '../Components/RightInterior/visitor/Visitor';
import * as stories from '../Components/RightInterior/contents/storyContents';

const Story = () => {
    document.title = "Story";

    return (
        <Section>
            {
                Object.values(stories).map((story, index) => (
                    <Visitor
                        key={index + 1}
                        no={index + 1}
                        content={story}
                    />
                ))
            }
        </Section>
    )
}

export default Story;