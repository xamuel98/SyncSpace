import { FormikHelpers, FormikValues, useFormik } from "formik";
import { DynamicFormProps } from "@/types/Form";
import FormInputField from "./FormInputField";

const DynamicForm = ({
    schema,
    disableSubmit = false,
    submit,
    beforeBtn,
    afterBtn,
    enableReinitialize = false,
}: DynamicFormProps) => {

    // Handle form submission
    const submitForm = (
        values: FormikValues,
        helpers: FormikHelpers<typeof values>
    ) => {
        if (submit) {
            Promise.all([submit(values)])
                .then(() => {})
                .catch((e) => {
                    console.debug(e);
                })
                .finally(() => {
                    helpers.setSubmitting(false);
                });
        }
    };

    const formik = useFormik({
        validateOnBlur: true,
        validateOnChange: true,
        initialValues: schema.values,
        validationSchema: schema.validation,
        enableReinitialize, // Reset the form values when the route changes
        onSubmit: (values, helpers) => submitForm(values, helpers),
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="w-full flex flex-col gap-y-4">
                <div className={schema.class}>
                    {Array.isArray(schema.fields)
                        ? schema.fields.map((formItem: any) => (
                            <div className={`ss-form-group ${formItem.class}`} key={formItem.name}>
                                <FormInputField formItem={formItem} formik={formik} />
                            </div>
                            ))
                        : null
                    }
                </div>

                {beforeBtn && <div className="">{beforeBtn}</div>}
            </div>

            {/* Button */}
            <div className="mt-10 flex flex-col justify-center items-center gap-y-4 w-full">
                <button
                    type="submit"
                    className={`w-full bg-dark-950 p-3 font-medium text-base/7 text-white rounded-xl hover:bg-[#3d3d3d] transition-colors duration-300 ease-in-out ${schema.buttonClass}`}
                    disabled={
                        disableSubmit ||
                        !formik.isValid ||
                        formik.isSubmitting ||
                        (Object.keys(formik.touched).length === 0 &&
                            formik.touched.constructor === Object)
                    }
                >
                    {
                        !formik.isSubmitting
                            ? schema.buttonLabel
                            : (
                                <i className="pi pi-spin pi-spinner text-lg"></i>
                            )
                    }
                </button>

                {/* Util Link */}
                {afterBtn && <div className="">{afterBtn}</div>}
            </div>
        </form>
    )
}

export default DynamicForm