import React from "react";
import styles from "./FormInput.module.css";

const todayDate = new Date();
const formattedMinDate = todayDate.toISOString().slice(0, 16);

const FormInput = props => {
    const isCheckBox = props.type === "checkbox";
    const className = `
        ${styles.inputWrapper} 
         ${props.id}-wrapper
         ${isCheckBox && styles.checkboxWrapper}
         ${props.error ? styles.error : ""}
         ${props.disabled ? styles.disabled : ""}
         `;
 
    let inputOutput;
    const commonProps = {
        type : props.type,
        name : props.id,
        id : props.id,
        onChange : props.onChange,
        required : props.required,
        value : props.value,
        disabled : props.disabled
    };
    if (props.type === "select") {
        inputOutput = (
            <>
                {props.name}:
                <select
                    {...commonProps}
                >
                    <option value=''>
                        Выберите вариант:
                    </option>
                    {props.options &&
                        props.options.map(el => {
                            return (
                                <option key={el.value} value={el.value}>
                                    {el.name}
                                </option>
                            );
                        })}
                </select>
            </>
        );
    } else if (props.type === "textarea") {
        inputOutput = (
            <>
                {props.name}:
                <textarea
                    {...commonProps}
                />
            </>
        );
    } else {
        inputOutput = (
            <>
                {props.name}:
                <input
                    {...commonProps}
                    checked={props.value}
                    {...(props.type === "number" && {min: "0"})}
                    {...(props.type === "datetime-local" && {min: formattedMinDate})}
                />
                {isCheckBox && <span className={styles.checkbox}></span>}
            </>
        );
    }

    return (
        <div className={className}>
            <label htmlFor={props.id}>
                {inputOutput}
                {props.error && <span className={styles.errorMessage}>{props.error}</span>}
            </label>
        </div>
    );
};

export default FormInput;
