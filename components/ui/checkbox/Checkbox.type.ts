import React from 'react';

export interface CheckboxProps {
    value?: any;
    name?: string;
    binary?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    tabindex?: number;
    trueValue?: any;
    falseValue?: any;
    inputId?: string;
    inputClass?: string;
    inputStyle?: React.CSSProperties;
    ariaLabelledby?: string;
    ariaLabel?: string;
    onChange?: (value: any) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}