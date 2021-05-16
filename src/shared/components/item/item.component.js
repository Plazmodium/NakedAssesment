import './item.component.css';
import ItemIcon from '../../../assets/camera.svg';

export default function ItemComponent() {
	function emptyComponent() {
		return (
			<div class="empty-component-container">
				<div class="add-description">Get a price</div>
				<div class="add-icon">+</div>
			</div>
		);
	}

	function filledProduct() {
		return (
			<div class="product-component-container">
				<div class="products">
					<div class="delete">X</div>
					<img src={ItemIcon} alt="" width="50px" class="product-icon" />
					<h5 class="item-name">Samsung</h5>
					<h6 class="item-description">Comprehensive</h6>
					<h7 class="price-description">R650</h7>
				</div>
			</div>
		);
	}

	return (
		<div class="item-collection-container">
			{filledProduct()}
			{emptyComponent()}
		</div>
	);
	//
}
