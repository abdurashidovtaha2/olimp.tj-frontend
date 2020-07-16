export interface HeaderViewProps {
    token: string | null;
    username: string;
    handlePush: (path: string) => void;
    handleLogOut: () => void;
    triggerModal: (value: string | null) => void;
}

export interface HeaderProps {
    triggerModal: (value: string | null) => void;
}