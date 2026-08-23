
type Product = {
    "id": string;
    "image": {
        "thumbnail": string;
        "mobile": string;
        "tablet": string;
        "desktop": string;
    };
    "name": string;
    "category": string;
    "price": number;
};

type ProductList = {
    products: Product[];
};

type CartItem = {
    product: Product;
    quantity: number;
};

export type { ProductList, Product, CartItem };