import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import FormInputFieldLabel from './FormInputFieldLabel';
import { FormInputFieldProps } from '@/types/Form';
import { cn } from '@/lib/utils';

const FormInputField = ({formik, formItem}: FormInputFieldProps) => {
    const { formType: type, class: blockClass, ...extras } = formItem;

    if(type === 'InputTextField') {
        return (
            <>
                <FormInputFieldLabel 
                    name={formItem.name}
                    label={formItem.label}
                    isRequired={formItem.isRequired}
                    description={formItem.description}
                />

                <InputText
                    id={formItem.name}
                    type={formItem.name}
                    className={cn('ss-form-input', {
                        "p-invalid": !!(
                        formik.touched[formItem.name] && formik.errors[formItem.name]
                        ),
                    })}
                    value={formik.values[formItem.name] || ""} // default value inside your input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...extras}
                />

                {formik.touched[formItem.name] && formik.errors[formItem.name] && (
                    <small className="error-message">
                        {formik.errors[formItem.name]}
                    </small>
                )}
            </>
        )
    }

    if(type === 'PasswordField') {
        return (
            <>
                <FormInputFieldLabel 
                    name={formItem.name}
                    label={formItem.label}
                    isRequired={formItem.isRequired}
                    description={formItem.description}
                />

                <Password
                    id={formItem.name}
                    type={formItem.name}
                    className={cn({
                        "p-invalid": !!(
                        formik.touched[formItem.name] && formik.errors[formItem.name]
                        ),
                    })}
                    value={formik.values[formItem.name] || ""}
                    onChange={(e) => {
                        formik.setFieldValue(formItem.name, e.target.value);
                    }}
                    onBlur={formik.handleBlur}
                    hideIcon={cn("icon-[fluent--eye-off-24-regular]", "custom-password-icon text-dark-950 w-6 h-6 cursor-pointer")}
                    showIcon={cn("icon-[fluent--eye-24-regular]", "custom-password-icon text-dark-950 w-6 h-6 cursor-pointer")}
                    {...extras}
                />

                {formik.touched[formItem.name] && formik.errors[formItem.name] && (
                    <small className="error-message">
                        {formik.errors[formItem.name]}
                    </small>
                )}
            </>
        )
    }
}

export default FormInputField