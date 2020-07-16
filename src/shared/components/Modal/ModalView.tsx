import React from 'react';

import style from './index.module.css';
import { ModalViewProps } from './model';

export const ModalView: React.FC<ModalViewProps> = (props) => {
  return (
    <div className={style.modalWindow}>
      <div className={style.content}>
        {props.children}
      </div>
    </div>
  )
}
