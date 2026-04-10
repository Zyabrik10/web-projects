import styles from './GridContainer.module.css';

export default function GridContainer({ children, className, ...props }) {
  return (
    <ul className={`${styles['grid']} ${className ?? ''}`} {...props}>
      {children}
    </ul>
  );
}
