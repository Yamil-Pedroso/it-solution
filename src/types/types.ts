export interface DefaultHeaderProps {
    transparent?: boolean;
    headerTop?: boolean;
    extraClass?: string | undefined;
}

export interface HeaderProps extends DefaultHeaderProps {
    header: number;
}
