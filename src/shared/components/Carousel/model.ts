export interface CarouselItemViewProps {
    item: CarouselItemState;
    carouselIndex: number;
}

export interface CarouselViewProps {
    items: CarouselItemState[];
    carouselIndex: number;
}

export interface CarouselProps {
    items: CarouselItemState[];
}

interface CarouselItemState {
    id: number;
    title: string;
    titleDetails: string;
}