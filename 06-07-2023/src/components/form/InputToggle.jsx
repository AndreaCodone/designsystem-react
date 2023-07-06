import { useState } from "react";

import styles from "./InputToggle.module.scss";

const InputToggle = ({ toggled }) => {
  const [isToggled, setIsToggled] = useState(toggled);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <label className={styles.InputToggle}>
      <input
        className={styles.input}
        type="checkbox"
        defaultChecked={isToggled}
        onClick={() => handleToggle()}
      />
      <span className={styles.toggle} />
    </label>
  );
};

export default InputToggle;
