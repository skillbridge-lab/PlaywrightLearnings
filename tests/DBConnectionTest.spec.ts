import mysql from 'mysql2/promise';
import test from '@playwright/test';

test('DB connection',async({page})=> {

    const connection= await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'employee_data'
    });
     let rows = await connection.execute('select * from EmployeeSalary');
     console.log(rows);

})