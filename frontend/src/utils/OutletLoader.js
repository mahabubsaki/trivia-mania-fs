import React from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import { colors } from './Constants';

const OutletLoader = () => {
    return (
        <div className={`h-screen w-screen flex justify-center items-center`}>
            <div>
                <BounceLoader loading={true} color={colors.primary} size={100} />
            </div>
        </div>
    );
};

export default OutletLoader;