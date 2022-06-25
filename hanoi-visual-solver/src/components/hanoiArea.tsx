import { DiscItem } from "./disc";
import styles from "../styles/styles.module.css";

export const HanoiArea = (props: { discs: number }) => {
  return (
    <div className={styles.hanoiContainer}>
      {props.discs >= 3 && props.discs < 10 ? (
        <>
          <div className={styles.hanoiPegContainer}>
            <div className={styles.hanoiPeg}>
              {Array.from({ length: props.discs }, (_, idx) => (
                <DiscItem key={idx} disc={idx + 1} />
              ))}
            </div>
          </div>
          <div className={styles.hanoiPegContainer}>
            <div className={styles.hanoiPeg}>
              {Array.from({ length: props.discs }, (_, idx) => (
                <DiscItem key={idx} disc={idx + 1} />
              ))}
            </div>
          </div>
          <div className={styles.hanoiPegContainer}>
            <div className={styles.hanoiPeg}>
              {Array.from({ length: props.discs }, (_, idx) => (
                <DiscItem key={idx} disc={idx + 1} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <span> Discs number must be between 3 and 9 </span>
      )}
    </div>
  );
};
