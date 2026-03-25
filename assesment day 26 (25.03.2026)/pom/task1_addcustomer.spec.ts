class task1_addcustomer {
    first_name;
    last_name;
    post_code;
    add_btn;
    constructor(page) {
        this.first_name = page.getByPlaceholder('First Name');
        this.last_name = page.getByPlaceholder('Last Name');
        this.post_code = page.getByPlaceholder('Post Code');
        this.add_btn = page.getByRole('button', { name: 'Add Customer' }).last();
    }
    async createcustomer(firstname,lastname,postcode) {
        await this.first_name.fill(firstname);
        await this.last_name.fill(lastname);
        await this.post_code.fill(postcode);
        await this.add_btn.click();
    }
}

export default task1_addcustomer