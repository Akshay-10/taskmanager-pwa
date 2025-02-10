import React from 'react';
import { useThemeContext } from "../../../../shared/themes/ThemeContext"

const TextArea = ({children, textType,textStyle,lightThemeColor='black',darkThemeColor='white', props}) => {
    const {theme} = useThemeContext()
    const textColor = theme === 'light' ? lightThemeColor : darkThemeColor
    return (
        <span {...props} style={{
            color: textColor
        }} className={`${textStyle}`}>{children}</span>
    )
}