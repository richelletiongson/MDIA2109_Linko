import classNames from 'classnames';
import styles from './container.module.css';

export const Container = ({ text, color, size, border, textStyle, children }) => {
  const containerClasses = classNames(styles.container, {
    [styles[color]]: color,
    [styles[size]]: size,
    [styles.border]: border,
  });

  const textClasses = classNames({
    [styles[textStyle]]: textStyle,
  });

  return (
    <div className={containerClasses}>
      {text && <p className={textClasses}>{text}</p>}
      {children}
    </div>
  );
};


