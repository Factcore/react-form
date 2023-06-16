import React from "react";
import styles from "./ButtonsWrapper.module.css";

const ButtonsWrapper = props => {
    return (
        <div className={styles.buttonsWrapper}>
            {props.currentPage !== 0 && (
                <button
                    type="button"
                    onClick={props.toPreviousPage}
                    className={`${styles.button} ${styles.buttonPrevious}`}
                >
                    Назад
                </button>
            )}
            {props.currentPage < props.fieldsLength - 1 && (
                <button
                    type="button"
                    onClick={props.toNextPage}
                    className={`${styles.button} ${styles.buttonNext}`}
                >
                    Далее
                </button>
            )}
            {props.currentPage === props.fieldsLength - 1 && (
                <>
                    <button
                        type="submit"
                        onClick={props.onSubmit}
                        className={`${styles.button} ${styles.buttonSubmit}`}
                        disabled={props.isLoading === 'loading' ? true : false}
                    >
                        {props.isLoading === "loading"
                            ? "Обработка..."
                            : "Отправить"}
                    </button>
                    {props.isLoading === "error" &&
                        <span className={styles.sendingError}>Ошибка при обработке формы, попробуйте ещё раз</span>}
                </>
            )}
        </div>
    );
};
export default ButtonsWrapper;
