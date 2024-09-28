export interface ProductResponse {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
}

export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	images: string[];
}
