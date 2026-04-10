import styles from './Button.module.css';

export default function Button({
  link = false,
  onClick = () => {},
  href = '',
  className = '',
  children,
  ...props
}) {
  if (link) {
    return (
      <a {...props} className={`${styles['button']} ${className}`} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button {...props} className={`${styles['button']} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
