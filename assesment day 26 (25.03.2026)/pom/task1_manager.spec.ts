class task1_manager{
    add_customer;
    open_account;
    customers;
    home;
    constructor(page){
        this.add_customer=page.locator('//button[@ng-class="btnClass1"]');
        this.open_account=page.locator('//button[@ng-class="btnClass2"]');
        this.customers=page.locator('//button[@ng-class="btnClass3"]');
        this.home=page.getByRole('button',{name:'Home'});
    }
}

export default task1_manager