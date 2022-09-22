export interface IProduct {
    id: number;
    description: string;
    price: number;
    descriptionprice: string;
    image: string;
}

export const products = [
    { id: 1, description: "full", price: 439.00, descriptionprice: "PIX", image: "/assets/img/01.jpg" },
    { id: 2, description: "full", price: 100.50, descriptionprice: "PIX", image: "/assets/img/02.jpg" },
    { id: 3, description: "full", price: 749.99, descriptionprice: "PIX", image: "/assets/img/03.jpg", off: 299.00 },
    { id: 4, description: "full", price: 599.99, descriptionprice: "PIX", image: "/assets/img/04.jpg" },
    { id: 5, description: "full", price: 299.99, descriptionprice: "PIX", image: "/assets/img/05.jpg" },
    { id: 6, description: "full", price: 399.99, descriptionprice: "PIX", image: "/assets/img/06.jpg" },
    { id: 7, description: "full", price: 499.99, descriptionprice: "PIX", image: "/assets/img/07.jpg" },
    { id: 8, description: "full", price: 149.99, descriptionprice: "PIX", image: "/assets/img/08.jpg" },
]