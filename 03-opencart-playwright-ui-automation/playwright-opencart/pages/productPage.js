class ProductPage{
    constructor(page){
        this.page = page;
    }

    async createProduct(productName, seoUrl)    {

        //  Open Catalog
        await this.page.click('[id="menu-catalog"]');
        //  Open Products
        await this.page.click('text=Products');    
        //  Add New Product
        await this.page.click('[class="btn btn-primary"]');
        //  Product name
        await this.page.fill('[id="input-name1"]', productName);
        //  Meta Title     
        await this.page.fill('[id="input-meta-title1"]', 'newprdct');
        //  Data Tab
        await this.page.click('[href="#tab-data"]');
        //  Model    
        await this.page.fill('[id="input-model"]', '101');
        //  Click SEO Tab
        await this.page.click('[href="#tab-seo"]');
        // Fill SEO
        await this.page.fill('[name="product_seo_url[0][1]"]', seoUrl);
        // 10. Click Save button
        await this.page.click('button[type="submit"]');

        return productName;
    };

    async editProduct(productName, editedProduct) {

        //  Mark and Edit the product
        const row = this.page
                            .locator('#form-product tbody tr')
                            .filter({ hasText: productName });
        
        await row.locator('[data-original-title="Edit"]').click();
                
        await this.page.fill('#input-name1', editedProduct);
        await this.page.click('.btn.btn-primary');

        return editedProduct;
    };

    async openProductsPage() {

        await this.page.click('#menu-dashboard');
        await this.page.click('#menu-catalog');
        await this.page.click('text=Products');
    };

    async searchProduct(productName) {

        await this.page.click('#menu-catalog');
        await this.page.click('text=Products');
        await this.page.fill('[name="filter_name"]', productName);
        await this.page.click('#button-filter');
    };

    async deleteProduct(productName) {

        //  Open Products
        await this.page.click('#menu-dashboard');
        await this.page.click('#menu-catalog');
        await this.page.click('text=Products');

        //  Filter the product for deletion    
        await this.page.fill('#input-name', productName);
        await this.page.click('#button-filter');

        const checkbox = this.page
                             .locator('#form-product tbody tr')
                             .filter({ hasText: productName })
                             .first()
                             .locator('input[type="checkbox"]');

        await checkbox.check();

        await this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            await this.page.waitForTimeout(1000);
            await dialog.accept();
        });

        await this.page.click('.btn.btn-danger');
        
        return productName;
    };
};

module.exports = { ProductPage };