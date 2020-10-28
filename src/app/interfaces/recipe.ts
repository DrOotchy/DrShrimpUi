export interface IRecipe {
    _id: string;
    name: string;
    description: string;
    category: string;
    source: string;
    ingredients: [];
    directions: [];
    images: [];
    coverImage: string;
    isMenu: boolean;
    shortDesc: string;
    price: [];
    cost: [];
}
