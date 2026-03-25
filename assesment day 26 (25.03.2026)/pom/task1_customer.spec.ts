class task1_customer {
    name;
    balance;
    msg;
    login_btn;
    transactions;
    deposit;
    withdrawl;
    amount;
    deposit_btn;
    withdraw_btn;
    logout;
    constructor(page) {
        this.name = page.locator('#userSelect');
        this.balance = page.locator('//div[@ng-hide="noAccount"]/strong[2]');
        this.msg = page.locator('//span[@ng-show="message"]');
        this.login_btn = page.getByRole('button', { name: 'Login' });
        this.transactions = page.locator('//button[@ng-class="btnClass1"]');
        this.deposit = page.locator('//button[@ng-class="btnClass2"]');
        this.withdrawl = page.locator('//button[@ng-class="btnClass3"]');
        this.amount = page.getByPlaceholder('amount');
        this.deposit_btn = page.getByRole('button', { name: 'Deposit' }).last();
        this.withdraw_btn = page.getByRole('button', { name: 'Withdraw' }).last();
        this.logout=page.getByText('Logout');
    }
    async login(username) {
        await this.name.selectOption(username);
        await this.login_btn.click();
    }
    async deposit_money(expect, depositammount) {
        await this.amount.fill(depositammount.toString());
        await this.deposit_btn.click();
        await expect(this.msg).toBeVisible();
        await expect(this.msg).toContainText('Successful');
        await expect(this.balance).toHaveText(depositammount.toString());
    }
    async withdraw_money(expect,withdrawammount,finalbalance) {
        await this.amount.fill(withdrawammount.toString());
        await this.withdraw_btn.click();
        await expect(this.msg).toBeVisible();
        await expect(this.msg).toContainText('successful');
        await expect(this.balance).toHaveText(finalbalance.toString());
    }
}

export default task1_customer