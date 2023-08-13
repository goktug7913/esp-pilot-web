"use client";
import { usePidList } from "@/api/queries";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PidWidget from "@/components/pidWidget/PidWidget";
export default function Pid() {
  const { data } = usePidList();

  const [maxAngle, setMaxAngle] = useState(0);
  const [pitchkp, setPitchKp] = useState(0);
  const [pitchki, setPitchKi] = useState(0);
  const [pitchkd, setPitchKd] = useState(0);
  const [rollkp, setRollKp] = useState(0);
  const [rollki, setRollKi] = useState(0);
  const [rollkd, setRollKd] = useState(0);
  const [yawkp, setYawKp] = useState(0);
  const [yawki, setYawKi] = useState(0);
  const [yawkd, setYawKd] = useState(0);

  useEffect(() => {
    if (!data) return;
    setMaxAngle(data.maxAngle);
    setPitchKp(data.pitchKp);
    setPitchKi(data.pitchKi);
    setPitchKd(data.pitchKd);
    setRollKp(data.rollKp);
    setRollKi(data.rollKi);
    setRollKd(data.rollKd);
    setYawKp(data.yawKp);
    setYawKi(data.yawKi);
    setYawKd(data.yawKd);
  }, [data]);

  return (
    <main>
      <div
        style={{
          display: "grid",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <PidWidget
            title="Pitch"
            kp={pitchkp}
            ki={pitchki}
            kd={pitchkd}
            setKp={setPitchKp}
            setKi={setPitchKi}
            setKd={setPitchKd}
          />
          <PidWidget
            title="Roll"
            kp={rollkp}
            ki={rollki}
            kd={rollkd}
            setKp={setRollKp}
            setKi={setRollKi}
            setKd={setRollKd}
          />
          <PidWidget
            title="Yaw"
            kp={yawkp}
            ki={yawki}
            kd={yawkd}
            setKp={setYawKp}
            setKi={setYawKi}
            setKd={setYawKd}
          />
        </div>

        <div
          style={{
            border: "1px solid black",
            borderRadius: "0.5rem",
            display: "flex",
            padding: "1rem",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <h3>Max angle</h3>
          <p style={{ width: "4.5rem", textAlign: "center" }}>{maxAngle} Deg</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input
              type="number"
              value={maxAngle}
              onChange={(e) => setMaxAngle(parseFloat(e.target.value))}
              min="0"
              max="45"
              datatype={"number"}
              accept={".0-9"}
              step={0.1}
            />
            <input
              type="range"
              min="0"
              max="45"
              value={maxAngle}
              step={0.1}
              datatype={"number"}
              onChange={(e) => setMaxAngle(parseFloat(e.target.value))}
            />
          </div>
          <div
            style={{
              width: "6rem",
              height: "6rem",
              aspectRatio: "1/1",
              backgroundColor: "gray",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              style={{
                width: "5rem",
                height: "0.5rem",
                backgroundColor: "black",
              }}
              animate={{
                rotateZ: `${maxAngle}deg`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <button
          onClick={() => {}}
          style={{
            width: "100%",
            height: "3rem",
            borderRadius: "0.5rem",
            border: "none",
            backgroundColor: "blue",
            color: "white",
            background: "green",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Save
        </button>
      </div>
    </main>
  );
}
