import styles from "../styles/styles.module.css";

export const DiscItem = (props: { disc: number }) => {
  return <div className={styles.disc}> {props.disc} </div>;
};
