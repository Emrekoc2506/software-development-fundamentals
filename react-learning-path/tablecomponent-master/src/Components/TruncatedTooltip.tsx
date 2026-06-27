import React from 'react';
import { Tooltip } from 'antd';

interface TruncatedTooltipProps {
    text: string;
    maxLength: number;
    style?: React.CSSProperties;
}

export const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
        return `${text.slice(0, maxLength)}........`;
    }
    return text;
};

const TruncatedTooltip: React.FC<TruncatedTooltipProps> = ({ text, maxLength, style }) => {
    const truncatedText = truncateText(text, maxLength);

    return (
        <Tooltip title={text} overlayStyle={{ maxWidth: '300px' }}>
            <span style={{ ...style }}>{truncatedText}</span>
        </Tooltip>
    );
};

export default TruncatedTooltip;
