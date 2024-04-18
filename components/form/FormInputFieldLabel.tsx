import { Tooltip } from 'primereact/tooltip';
import React from 'react';
import { FormInputFieldLabelProps } from '@/types/Form';

        
const FormInputFieldLabel = ({ name, label, description, isRequired = false }: FormInputFieldLabelProps) => {
    return (
        <label htmlFor={name} className="flex-start">
            <span>{label}</span>

            { isRequired ? (
                <span className="pl-1 text-red-500">*</span>
            ) : null }

            { description ? (
                <>
                    <Tooltip target=".custom-target-icon" />

                    <i className="custom-target-icon pi pi-question-circle"
                        data-pr-tooltip={description}
                        data-pr-position="top"
                        data-pr-at="right+5 top"
                        data-pr-my="left center-2"
                        style={{ fontSize: '1rem', cursor: 'pointer', color: '#708090' }}>
                    </i>
                </>
            ) : null }
        </label>
    );
};

export default FormInputFieldLabel;