import React from 'react';
import { CarouselItemViewProps } from '../model';
import style from './index.module.css';

export const CarouselItemView: React.FC<CarouselItemViewProps> = (props) => {
    return (
        <div className={style.carouselBlock} style={props.item.id === props.carouselIndex ? {} : { width: "0%" }}>
            <div className={style.description}>
                <div className={style.controllers}>
                    controllers
                </div>
                <p className={style.title}>
                    {props.item.id}
                    {props.item.title}
                </p>
                <p className={style.titleDetails}>
                    {props.item.titleDetails}
                </p>
            </div>
            <div className={style.imageBlock}>
                <p>ЧОЙ БАРОИ АКСХО</p>
            </div>
        </div>
    )
}
