import {test,expect} from "@playwright/test"
import path from "path"
import fs from "fs"
import task1_home from "../pom/task1_home.spec";
import task1_manager from "../pom/task1_manager.spec";
import task1_addcustomer from "../pom/task1_addcustomer.spec";
import task1_openaccount from "../pom/task1_openaccount.spec";
import task1_customer from "../pom/task1_customer.spec";

let data1=JSON.parse(fs.readFileSync(path.join(__dirname,"../utility/day26_task1.json")));

test('day26_task1',async({page})=>{
  page.on('dialog',async(d)=>{
    await d.accept();
  })
  let homepage=new task1_home(page);
  let managerpage=new task1_manager(page);
  let addcustomerpage=new task1_addcustomer(page);
  let openaccountpage=new task1_openaccount(page);
  let customerpage=new task1_customer(page);
  await page.goto(data1.url);
  await homepage.bank_manager_login.click();
  await managerpage.add_customer.click();
  await addcustomerpage.createcustomer(data1.firstname,data1.lastname,data1.postcode);
  await managerpage.open_account.click();
  let username=data1.firstname+" "+data1.lastname
  await openaccountpage.createaccount(username,data1.currency);
  await managerpage.home.click();
  await homepage.customer_login.click();
  await customerpage.login(username);
  await customerpage.deposit.click();
  let depositammount=5000;
  let withdrawammount=3000;
  let finalbalance=depositammount-withdrawammount;
  await customerpage.deposit_money(expect,depositammount);
  await customerpage.withdrawl.click();
  await page.waitForTimeout(500);
  await customerpage.withdraw_money(expect,withdrawammount,finalbalance);
  await customerpage.logout.click();
  await page.screenshot({path:'screenshot/task1.png'})

})
