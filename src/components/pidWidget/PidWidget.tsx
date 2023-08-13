import styles from "./PidWidget.module.css";

interface PidWidgetProps {
  title: string;
  kp: number;
  ki: number;
  kd: number;
  setKp: (kp: number) => void;
  setKi: (ki: number) => void;
  setKd: (kd: number) => void;
}
export default function PidWidget({
  title,
  kp,
  ki,
  kd,
  setKp,
  setKi,
  setKd,
}: PidWidgetProps) {
  const initialData = {
    kp: kp,
    ki: ki,
    kd: kd,
  };

  return (
    <div className={styles.container}>
      <h3
        style={{
          margin: "0 0 1rem 0",
        }}
      >
        {title}
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className={styles.row}>
          <p>P Gain</p>
          <input
            type="number"
            value={kp}
            onChange={(e) => setKp(parseFloat(e.target.value))}
            min="0"
            max="45"
            datatype={"number"}
            accept={".0-9"}
            step={0.001}
          />
          <p>
            <span
              style={{
                color: "red",
              }}
            >
              Was: {initialData.kp}
            </span>
          </p>
        </div>

        <div className={styles.row}>
          <p>I Gain</p>
          <input
            type="number"
            value={ki}
            onChange={(e) => setKi(parseFloat(e.target.value))}
            min="0"
            max="45"
            datatype={"number"}
            accept={".0-9"}
            step={0.001}
          />
        </div>

        <div className={styles.row}>
          <p>D Gain</p>
          <input
            type="number"
            value={kd}
            onChange={(e) => setKd(parseFloat(e.target.value))}
            min="0"
            max="45"
            datatype={"number"}
            accept={".0-9"}
            step={0.001}
          />
        </div>
      </div>
    </div>
  );
}
