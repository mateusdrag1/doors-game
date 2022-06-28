import styles from '../styles/Card.module.css';

interface CardProps {
  bgColor?: string;
  children?: React.ReactNode;
}

export default function Card({ bgColor, children }: CardProps) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: bgColor ?? '#fff',
      }}
    >
      {children}
    </div>
  );
}
