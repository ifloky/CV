class Products {

	constructor() {
		this.classNameActive = 'product-element__btn_active';
		this.labelAdd = 'Добавить в корзну';
		this.labelRemove = 'Удалить из корзны';
	}

	handleSetLocationStorage(element, id) {
		const  {pushProducts, products} = localStorageUtil.putProducts(id);
		if (pushProducts) {
			element.classList.add(this.classNameActive);
			element.innerHTML = this.labelRemove;
		} else {
			element.classList.remove(this.classNameActive);
			element.innerHTML = this.labelAdd;
		}

		headerPage.render(products.length);
	}

	render() {
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';

		CATALOG.forEach(({id, name, price, img}) => {

			let activeClass = '';
			let activeText = '';
			
			if (productsStore.indexOf(id) === -1) {
				activeText = this.labelAdd;
			} else {
				activeClass = ' ' + this.classNameActive;
				activeText = this.labelRemove;
			};

			htmlCatalog += `
				<li class='product-element'>
					<span class='product-element__name'>${name} </span>
					<img class='product-element__img' src="${img}" alt="">
					<span class='product-element__price'>
						💰 ${price.toLocaleString()} USD
					</span>
					<button class='product-element__btn ${activeClass}' onclick="productsPage.handleSetLocationStorage(this, '${id}');">${activeText}</button>
				</li>
			`;
		});

		const html = `
			<ul class='product-container'>
				${htmlCatalog}
			</ul>
		`;

		ROOT_PRODUCTS.innerHTML = html;
	}
}

const productsPage = new Products();
