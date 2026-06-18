//  Generate product name method
        function generateProductName(){
        const random = Math.floor(Math.random() * 1000);
        return `TestProd${random}`;
    };

//  Generate SEO Keyword method
    function generateSEOKeyword(){
        const randomSEO = Math.floor(Math.random() * 10000);
        return `seo-url-${randomSEO}`;       
    };

//  Generate edited product
    function generateEditedProduct(){
        const random = Math.floor(Math.random() * 10000);
        return `EditedProduct-${random}`;
    };

//  Delete Product
async function deleteTestProduct(productPage, productName) {
    await productPage.deleteProduct(productName);
};

module.exports = { deleteTestProduct, generateProductName, generateSEOKeyword, generateEditedProduct };