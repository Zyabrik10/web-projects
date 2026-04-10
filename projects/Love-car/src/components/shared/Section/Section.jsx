import styles from './Section.module.css';

export default function Section({
  children,
  className = '',
  ...props
}) {
  return (
    <section
      className={`${styles['section']} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}