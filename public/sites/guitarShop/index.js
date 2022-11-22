function render() {
	const productsStore = localStorageUtil.getProducts();
	
	headerPage.render(productsStore.length);
	productsPage.render();

}

let CATALOG = [
	{
		"id": "el1",
		"name": "Fender",
		"img": "https://musicpro.by/images/detailed/7/75fb5413cf4631b64b5c79083682c4ab.jpg",
		"price": "25000",
	},	
	{
		"id": "el2",
		"name": "Corl",
		"img": "https://www.tvoyzvuk.by/images/detailed/4/7CBFED9C78700ED9DE31AE8AF6931F36.jpg",
		"price": "36700",
	},
	{
		"id": "el3",
		"name": "Randon",
		"img": "https://musicart.by/images/stories/virtuemart/product/RST5MBK.jpg",
		"price": "36400",
	},
	{
		"id": "el4",
		"name": "Flight",
		"img": "https://www.tvoyzvuk.by/images/detailed/41/T98ACE_Lag..jpeg",
		"price": "16900",
	},
	{
		"id": "el5",
		"name": "Alhambra",
		"img": "https://www.varende.by/oc-content/uploads/blog/1223123_cr.jpg",
		"price": "104600",
	}
];

render ();

