class task1_home{
    customer_login;
    bank_manager_login;
    constructor(page){
        this.customer_login=page.getByRole('button',{name:'Customer Login'});
        this.bank_manager_login=page.getByRole('button',{name:'Bank Manager Login'});
    }
}

export default task1_home