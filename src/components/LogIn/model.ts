export interface LogInViewProps {
    handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (evt: React.FormEvent) => void;
    triggerModal: (value: string | null) => void;
}

export interface LogInProps {
    triggerModal: (value: string | null) => void;
}