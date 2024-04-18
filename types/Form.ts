import { ReactNode } from "react";

export type DynamicFormProps = {
    schema?: any;
    /**
	 * @description Control button disable state from other component
	 */
	disableSubmit?: boolean;
    submit?: (values: any) => Promise<void>;
    beforeBtn?: ReactNode;
    afterBtn?: ReactNode;
    enableReinitialize?: boolean;
};

export type FormInputFieldProps = {
    formik: any;
    formItem: FormItem;
};

export type FormItem = {
    id?: string;
    class?: string;
    name: string;
    isRequired: boolean;
    isString: boolean;
    isEmail: boolean;
    isNumber: boolean;
    description?: string | null;
    formType: FormType;
    helperText?: string | null;
    minLength?: number;
    maxLength?: number;
    placeholder?: string;
    label?: string | null;
};
  
export enum FormType {
    InputTextField = "InputTextField",
    PasswordField = "PasswordField",
}

export interface FormInputFieldLabelProps {
    name: string;
    label?: string | null;
    description?: string | null;
    isRequired?: boolean;
    error?: boolean
}