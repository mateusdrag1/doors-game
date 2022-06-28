import styles from '../styles/Door.module.css';
import DoorModel from '../model/door';
import Gift from './Gift';

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door({ value, onChange }: DoorProps) {
  const toggleSelect = () => onChange(value.toggleSelected());
  const handleOpen = (e: any) => {
    e.stopPropagation();
    onChange(value.open());
  };

  const renderDoors = () => {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{value.number}</div>
        <div className={styles.doorHandler} onClick={handleOpen}></div>
      </div>
    );
  };

  return (
    <div className={styles.area} onClick={toggleSelect}>
      <div
        className={`${styles.struct} ${
          value.isSelected && !value.isOpen && styles.selected
        }`}
      >
        {!value.isOpen ? renderDoors() : value.hasGift ? <Gift /> : false}
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}
