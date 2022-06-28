import styles from '../styles/NumberInput.module.css';

interface NumberInputProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export default function NumberInput({
  text,
  value,
  onChange,
}: NumberInputProps) {
  const handleDecrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value >= 1) {
      onChange(value + 1);
    }
  };

  return (
    <div className={styles.numberInput}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={handleDecrement}>
          -
        </button>
        <button className={styles.btn} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
}
