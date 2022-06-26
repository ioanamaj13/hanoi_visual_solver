import styles from "../styles/styles.module.css";

export const DiscItem = (props: { disc: number }) => {
  const width = `${props.disc * 20}px`;
  const color = `hsl(${props.disc * 40}, 100%, 50%)`;
  return (
    <div
      className={styles.disc}
      style={{
        width: `${width}`,
        background: `${color}`,
      }}
    >
      {/* {props.disc} */}
    </div>
  );
};
