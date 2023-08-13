import styles from "./Select.module.css";
import { useState } from "react";
import { KeyValue } from "@/types/types";

interface SelectProps {
  options: KeyValue[];
  initialValue?: string;
  onSelect?: (option: string) => void;
}

export default function Select({
  options,
  onSelect,
  initialValue,
}: SelectProps) {
  const [selected, setSelected] = useState<string>(initialValue || "");
  const [open, setOpen] = useState<boolean>(false);

  const onSelect_ = (option: string) => {
    onSelect && onSelect(option);
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className={styles.select}>
      <select
        className={styles.select}
        value={selected}
        onChange={(e) => onSelect_(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name} - {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}
