async function deleteTestProduct(productPage, productName) {
    await productPage.deleteProduct(productName);
}

module.exports = {
    deleteTestProduct
};