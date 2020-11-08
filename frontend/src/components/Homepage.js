import React from 'react';

// libraries
import scrollIntoView from 'scroll-into-view-if-needed';

// components
import FrontUI from './FrontUI';
import Summarize from './Summarize';
import Team from './Team';

/**
 *
 * scroll to the summarize area
 * @param {node} - id of the summarize area
 */
const scrollToSummarize = node => {
    scrollIntoView(node, {
        behavior: 'smooth',
        scrollMode: 'if-needed',
    });
};

const Homepage = () => {
    return (
        <div className='wrapper-hmpg'>
            <FrontUI scrollToSummarize={scrollToSummarize} />
            <Summarize />
            <Team />
        </div>
    );
};

export default Homepage;
