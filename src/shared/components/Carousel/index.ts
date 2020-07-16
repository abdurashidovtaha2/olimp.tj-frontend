import { CarouselView } from "./CarouselView"
import { CarouselProps, CarouselViewProps } from "./model";
import { useState, useEffect } from "react";

export const Carousel: React.FC<CarouselProps> = (props) => {
    const [carouselIndex, setCarouselIndex] = useState<number>(0);
    const carouselSize: number = props.items.length;

    useEffect(() => {
        setTimeout(() => {
            setCarouselIndex(carouselIndex => (carouselIndex + 1) % carouselSize);
        }, 2000);
    }, [carouselSize, carouselIndex])

    const stateProps: CarouselViewProps = {
        items: props.items,
        carouselIndex
    }

    return CarouselView(stateProps);
}
