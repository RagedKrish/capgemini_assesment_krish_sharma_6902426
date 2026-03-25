class task1_openaccount {
    customer;
    currency;
    process_btn;
    constructor(page) {
        this.customer = page.locator('#userSelect');
        this.currency = page.locator('#currency');
        this.process_btn = page.getByRole('button', { name: 'Process' });
    }
    async createaccount(username,currency) {
        await this.customer.selectOption(username)
        await this.currency.selectOption(currency)
        await this.process_btn.click();
    }
}

export default task1_openaccount