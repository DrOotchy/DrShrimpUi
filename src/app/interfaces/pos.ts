export interface IPos {
    id: string;
    name: string;
    altName: string;
    description: string;
    altDesc: string;
    price: number;
    availability: boolean;
    menuSection: {
        id: string;
        name: string;
    };
    isMenu: boolean;
}