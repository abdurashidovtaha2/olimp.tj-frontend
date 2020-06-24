export interface MMTFillingViewProps {
    handleChangeFile: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    handleChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleChangeVariants: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
}