import React from 'react';
import { CarouselViewProps } from './model';
import style from './index.module.css';
import { CarouselItemView } from './CarouselItem/CarouselItemView';

export const CarouselView: React.FC<CarouselViewProps> = (props) => {
    return (
        <div className={style.carousel}>
            {props.items.map(o => <CarouselItemView key={o.id} item={o} carouselIndex={props.carouselIndex}/>)}
        </div>
    )
}
