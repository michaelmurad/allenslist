/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useImperativeHandle, forwardRef, useRef } from 'react';

import styles from '@styles/components/Modal.module.css';

const Modal = (
  { children, onClick }: { children: React.ReactNode; onClick: () => void },
  ref: ((instance: unknown) => void) | React.RefObject<unknown> | null
): React.PropsWithRef<React.ReactElement> => {
  const _content = useRef(null);
  useImperativeHandle(ref, () => ({ _content }));

  return (
    <div className={styles.modal} onClick={onClick}>
      <div
        ref={_content}
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default forwardRef(Modal);
