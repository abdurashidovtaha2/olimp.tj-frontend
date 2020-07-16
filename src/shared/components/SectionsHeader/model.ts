export interface SectionsHeaderViewProps {
    currentPage: string;
    lastPage: string;
    handlePush: () => void;
}

export interface SectionsHeaderProps {
    currentPage: string;
    lastPage: string;
    lastPagePath: string;
}