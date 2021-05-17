import './item.component.css';
import ItemIcon from '../../../assets/camera.svg';

export default function ItemComponent() {
	function emptyComponent() {
		return (
			<div className="empty-component-container">
				<div className="add-description">Get a price</div>
				<div className="add-icon">+</div>
			</div>
		);
	}

	function filledProduct() {
		return (
			<div className="product-component-container">
				<div className="products">
					<div className="delete">X</div>
					<img src={ItemIcon} alt="" width="50px" className="product-icon" />
					<h5 className="item-name">Samsung</h5>
					<h6 className="item-description">Comprehensive</h6>
					<h7 className="price-description">R650</h7>
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
