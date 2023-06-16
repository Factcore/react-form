import { useState } from "react";
import FormInput from "./FormInput";
import ButtonsWrapper from "./ButtonsWrapper";
import useSend from "../hooks/useSend";
import validate from "../utils/validate";
import styles from "./Form.module.css";
import successImage from "../assets/images/success.png";

const Form = props => {
    const [currentPage, setCurrentPage] = useState(0);
    const [invalidFields, setInvalidFields] = useState([]);
    const [fieldsValueState, setFieldsValue] = useState(props.fields);
    const { dispatch: sendData, status: loadingStatus } = useSend();
    const fieldsLength = props.fields.length;

    const toNextPageHandler = () => {
        let invalidFields = validate(fieldsValueState[currentPage].inputs);
        if (invalidFields.length > 0) setInvalidFields(invalidFields);
        else {
            setCurrentPage(prevState =>
                prevState < fieldsLength - 1 ? prevState + 1 : prevState
            );
            setInvalidFields([]);
        }
    };
    const toPreviousPageHandler = () => {
        setCurrentPage(prevState =>
            prevState !== 0 ? prevState - 1 : prevState
        );
        setInvalidFields([]);
    };

    const submitHandler = event => {
        event.preventDefault();
        let invalidFields = validate(fieldsValueState[currentPage].inputs);
        if (invalidFields.length > 0) setInvalidFields(invalidFields);
        else {
            console.log("Hurray!");
            setInvalidFields([]);
            sendData(fieldsValueState);
        }
    };

    const currentFieldsGroup = fieldsValueState[currentPage].inputs;
    const currentTitle = fieldsValueState[currentPage].title || "";

    const inputChangeHandler = event => {
        setInvalidFields([]);
        setFieldsValue(prevState => {
            let state = { ...prevState };

            switch (event.target.type) {
                case "checkbox": {
                    state[currentPage].inputs = prevState[
                        currentPage
                    ].inputs.map(field => {
                        if (field.id === event.target.id)
                            return { ...field, value: event.target.checked };
                        return field;
                    });
                    break;
                }
                default: {
                    state[currentPage].inputs = prevState[
                        currentPage
                    ].inputs.map(field => {
                        if (field.id === event.target.id)
                            return { ...field, value: event.target.value };
                        return field;
                    });
                }
            }

            prevState[currentPage].inputs.forEach((dpField, dpIndex) => {
                if(dpField.dependent){
                    prevState[currentPage].inputs.forEach((field) => {
                        if(field.id === dpField.dependent){
                            state[currentPage].inputs[dpIndex].disabled = !(!!field.value);
                            state[currentPage].inputs[dpIndex].required = !!field.value;
                            state[currentPage].inputs[dpIndex].value = field.value ? prevState[currentPage].inputs[dpIndex].value : false;
                        }
                    })
                }
            })

            return state;
        });
    };

    const currentFieldsMapped = currentFieldsGroup.map(field => {
        let error;
        invalidFields.forEach(el => {
            if (el.id === field.id) error = el.message;
        });
        return (
            <FormInput
                {...field}
                key={field.id}
                onChange={inputChangeHandler}
                value={field.value || ""}
                error={error}
            />
        );
    });

    const successPage = (
        <div className={styles.successPage}>
            <div className={styles.successPageImg}>
                <img src={successImage} alt="success" />
            </div> 
            Запрос успешно отправлен!
            Наши операторы скоро с вами свяжутся.
        </div>
    );

    return (
        <form className={styles.form}>
            {currentTitle && (
                <div className={styles.title}>
                    <h4>{currentTitle}</h4>
                </div>
            )}
            <div className={styles.inputsWrapper}>
                {loadingStatus === "success"
                    ? successPage
                    : currentFieldsMapped}
            </div>
            {loadingStatus !== "success" && 
            <ButtonsWrapper
                currentPage={currentPage}
                toPreviousPage={toPreviousPageHandler}
                toNextPage={toNextPageHandler}
                onSubmit={submitHandler}
                fieldsLength={fieldsLength}
                isLoading={loadingStatus}
            />
}
        </form>
    );
};

export default Form;
