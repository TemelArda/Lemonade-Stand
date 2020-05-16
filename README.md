# Lemonade-Stand
MegaComfort frontend application web-app
Getting started

use npm install to install required node-modules.
npm start will run the application on localhost:3000.

Usage
There are 3 main pages Home page, sales form, and sales report.
Home page will direct you to either sales form or sales report through button clicks.
To use the functionalloties of the sales report you must first complete at least one sales form.

Sales Form has 6 different inputs:
One input field for each drink. This field will only take in numbers. Number represents the number of drinks sold by the salesperson
Selector for the sales person this is the person who sold the drinks.
Date picker this is to tell on what date sale had happened.
Total is a read only area which tells the user total money made by the sale and updates dynamically.
Once the submit button has been hit the data will be sent tp sales report where the user can see in more detail.

Sales report page has two componenets one table to visulize the data and a form to filter the data.
Form has three inputs 
first calender indicates the from date. 
second calender indicates the to date.
selecter indicates the salesperson who we want to see.
After clicking the submit button a new table will generate with the given credidentials.
User can go over the data by scrolling and see the details of each sale and totals for the personnel.
