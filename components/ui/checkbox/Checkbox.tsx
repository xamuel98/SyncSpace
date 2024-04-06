import React, { useState, useEffect } from "react";
import { CheckboxProps } from "./Checkbox.type";
import classNames from 'classnames';

const Checkbox = ({
	value,
	name,
	binary = false,
	invalid = false,
	disabled = false,
	readonly = false,
	required = false,
	tabindex,
	trueValue = true,
	falseValue = false,
	inputId,
	inputClass,
	inputStyle,
	ariaLabelledby,
	ariaLabel,
	onChange,
	onFocus,
	onBlur,
}: CheckboxProps) => {
	const [checked, setChecked] = useState<boolean>(false);

	useEffect(() => {
		if (binary) {
			setChecked(value === trueValue);
		} else {
			// Handle non-binary (array-based) model values if necessary
		}
	}, [value, trueValue, binary]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!disabled && !readonly) {
			const newValue = event.target.checked ? trueValue : falseValue;
			onChange && onChange(newValue);
		}
	};

    const checkboxRootClass = classNames({
		'cm-highlight': checked,
        'cm-disabled': disabled,
        'cm-invalid': invalid,
	});

	return (
		<div
			className={`cm-checkbox cm-component ${checkboxRootClass}`}
			data-cm-highlight={checked}
			data-cm-disabled={disabled}
		>
			<input
				id={inputId}
				type="checkbox"
				className={`cm-checkbox-input ${inputClass || ""}`}
				style={inputStyle}
				value={value}
				name={name}
				checked={checked}
				tabIndex={tabindex}
				disabled={disabled}
				readOnly={readonly}
				required={required}
				aria-labelledby={ariaLabelledby}
				aria-label={ariaLabel}
				aria-invalid={invalid}
				onChange={handleChange}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
			<div className="cm-checkbox-box">
                <span className="icon-[fluent--checkmark-12-regular] text-white"></span>
			</div>
		</div>
	);
};

export default Checkbox;
