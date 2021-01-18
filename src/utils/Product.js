
function Product(data) {
    this.getName = () => data.title;
    this.getDescription = () => data.description;
    this.getCategory = () => data.category;
    this.getImage = () => data.image;
    this.getId = () => data.id;
}
export default Product;