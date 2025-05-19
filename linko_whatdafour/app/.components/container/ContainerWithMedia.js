'use client';
import classNames from 'classnames';
import styles from './containers.module.css';
import { Container } from './container.js';

export const ContainerWithMedia = ({
  color,
  size,
  border,
  imageSrc,
  imageAlt = '',
  textBlocks = [], 
  button = null, 
}) => {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container color={color} size={size} border={border}>
        {imageSrc && (
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
        )}

        <div className={styles.textGroup}>
          {textBlocks.map((block, index) => (
            <p key={index} className={styles[block.styleKey]}>
              {block.text}
            </p>
          ))}
        </div>

        {button && <div className={styles.buttonWrapper}>{button}</div>}
      </Container>
    </div>
  );
};