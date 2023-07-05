import styles from "./InputForm.module.scss";

const InputForm = {};

return (
  <label className={styles.InputForm}>
    <input
      className={styles.input}
      type="form"
      defaultChecked={isClicked}
      onClick={() => onClick()}
    />

    <span className={styles.form} />
  </label>
);

export default InputForm;
