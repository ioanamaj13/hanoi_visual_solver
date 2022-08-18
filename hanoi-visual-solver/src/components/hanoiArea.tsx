import { DiscItem } from "./disc";
import styles from "../styles/styles.module.css";
import { useEffect } from "react";

export const HanoiArea = (props: {
  discs: number;
  message?: string;
  logStack: string[];
}) => {
  useEffect(() => {
    console.log("props.logStack", props.logStack);
  }, [props.logStack]);
  return (
    <div className={styles.hanoiContainer}>
      {props.message && props.message.length ? (
        <span> {props.message} </span>
      ) : (
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
              {/* {Array.from({ length: props.discs }, (_, idx) => (
                <DiscItem key={idx} disc={idx + 1} />
              ))} */}
            </div>
          </div>
          <div className={styles.hanoiPegContainer}>
            <div className={styles.hanoiPeg}>
              {/* {Array.from({ length: props.discs }, (_, idx) => (
                <DiscItem key={idx} disc={idx + 1} />
              ))} */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
