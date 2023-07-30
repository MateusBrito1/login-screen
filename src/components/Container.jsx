import styles from "./Container.module.css";
import { Form } from "./Form";

export function Container() {
  return (
    <div className={styles.Container}>
      <h2>Login</h2>
      <div className={styles.form}>
        <Form />
      </div>
      
    </div>
  );
}
