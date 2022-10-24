import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ActiveRoute = ({ to, children, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            to={to}
            {...props}
            className={`cursor-pointer duration-300 font-semibold text-lg ${match ? 'text-accent border-b-[2px] pb-1 px-1 border-accent' : 'hover:text-accent'}`}
        >
            {children}
        </Link>
    );
};

export default ActiveRoute;