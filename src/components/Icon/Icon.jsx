/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as Icons from '../../assets/icons';
import { iconType } from '../../constants/types';

const Icon = ({ icon, ...rest }) => {
    const Svg = Icons[icon];

    return <Svg {...rest} />;
};

Icon.propType = {
    icon: iconType,
};

export default Icon;
