export interface IProduct {
    id: number;
    description: string;
    price: number;
    descriptionprice: string;
    stockQuantity: number;
    image: string;
}

export interface IProductCart extends IProduct{
    quantity: number;
}

export const products : IProduct[] = [
    { id: 1, description: "Puff Sleeve Keyhole Back Top", price: 439.00, descriptionprice: "only PIX", image: "./assets/img/01.jpg", stockQuantity: 8 },
    { id: 2, description: "Sleeve Waffle Knit Tee", price: 100.50, descriptionprice: "only PIX", image: "./assets/img/02.jpg", stockQuantity: 8 },
    { id: 3, description: "Puff Sleeve Top", price: 749.99, descriptionprice: "only PIX", image: "./assets/img/03.jpg", stockQuantity: 8 },
    { id: 4, description: "Lettuce Trim Round Neck Tee", price: 599.99, descriptionprice: "only PIX", image: "./assets/img/04.jpg", stockQuantity: 8 },
    { id: 5, description: "Keyhole Back Mock-neck Puff Sleeve Top", price: 299.99, descriptionprice: "only PIX", image: "./assets/img/05.jpg", stockQuantity: 8 },
    { id: 6, description: "Solid Petal Sleeve Tee", price: 399.99, descriptionprice: "only PIX", image: "./assets/img/06.jpg", stockQuantity: 8 },
    { id: 7, description: "Puff Sleeve Round Neck Tee", price: 499.99, descriptionprice: "only PIX", image: "./assets/img/07.jpg", stockQuantity: 8 },
    { id: 8, description: "Mock-neck Puff Sleeve Rib-knit Top", price: 149.99, descriptionprice: "only PIX", image: "./assets/img/08.jpg", stockQuantity: 8 },
]
