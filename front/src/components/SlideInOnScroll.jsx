import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const SlideInOnScroll = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once
    });

    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(80px)',
        position: 'relative',
    });

    return <animated.div ref={ref} style={props} className={"slide_in_on_scroll"}>{children}</animated.div>;
};

export default SlideInOnScroll;
