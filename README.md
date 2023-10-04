# TheDrinkStoreWebpage
Project created for Web Development Module of BSc (Honours) in Computing year 2
Student: Aloisio Pereira Junior
Lecturer: Sean Bonner
Assignment CA1 – Journal
Introduction

The objective of this journal is to keep track of the work progress of the Web Application Development CA. This document will go through the process of making a website that stores the details about the stock of products in an XML file that is verified by an XML Schema file. The HTML should display a table of products with all the product data. This website should then have a search bar for the user to search for specific products on the list.
Week 1
HTML and CSS -
The website is composed of 2 pages: “Home” and the “Products.html”. The user can access them by using the buttons on the top navigation bar. Also, I linked a different font from Google Fonts to be used on the header on both pages. 
On the Products page, the table of products is displayed for the user to see and on the navigation bar, there’s a search bar where the user can type in the name of a product and it is passed to the JavaScript.
The Home page has an image below the navigation and a contact form and the pretend map address where the store is located.
The appearance of the pages is all due to the Cascading Style Sheet (CSS). The table appearance and the hover effect, and the contact form were taken from the W3Schools and some modifications were made (CSS tables). The contact form on the Home page was also taken from W3Schools. (How to - contact form). The image from the home page was taken from the site:<https://cdn.theculturetrip.com/wp-content/uploads/2015/08/27126168565_fde7898595_k.jpg>
The most challenging part of this first week was the CSS because of the different syntax that is used which I learned through YouTube videos and the W3Schools website.

 
Figure 1 Products Page
 ![Products Page](\Assignment\Picture1.jpg?raw=true "products page")
  
Figure 2 Home Page
Week 2
XML file and XML Schema 
An XML file was created with the purpose of holding all the information about the products of the website. An XML Schema was created to make sure the correct content and data arrangement of the XML file.
 
Figure 3.  XML File
The XML file starts with an element that has reference to the XML Schema file which means that all the elements inside of the element “Products” have reference to the “Products.xsd” XML Schema file.
XML is very straightforward each product has an id as an attribute and the products have other elements that hold the element tag.
  
Figure 4. XML Schema File
In this snippet of the XML Schema file, we can note that the elements “name”, “category” and “description” from the XML file are elements type string. The element “quantity” is an integer that could have a minimum value of 0. To find all that information I referred to the week 5 WAD presentation on Moodle page and exercises executed in class.

Week 3/4
The most challenging part of this assignment was, with no doubt, the part where I had to take the details from the XML file to be printed on the screen. 
XSL File
My first attempt was to use an XSL file and use the “value-of” to extract the details from the XML file to be printed on the HTML. I wasn’t successful using this method. So, I decided to look for other alternatives.

JavaScript
According to the material given in class, I had the option to parse the XML file through JavaScript using the DOM parser where the file is loaded onto a variable and accessed using  DOM methods.
 
Figure 5 JavaScript file
From lines 9 – 18 On the Products.js the JavaScript code “fetch function” retrieves a file from outside of the program and then passed it into another function that will assign the content from the XML to a variable so the DOM Parser can be used, and methods can be applied to access all the nodes in the XML file.
From line 19 -30 the “forEach” loop creates a row for each node of the XML document and run a for loop to create a cell and assign the value from the child node for each column of the table.
This code was taken from a tutorial on YouTube. (Reading XML files using JavaScript 2018)

 
Figure 6 JavaScript File 2
From line 37 – 60 the “searchFun()” function is activated every time a key is inserted in the search box. The function stores the user input in a variable and changes its value to uppercase. Then it assigns the products table from the HTML file to a variable called “table”. 
A for loop will iterate through each row of the table, an if statement will check if the value in the cell exists then another if statement will change the values to upper case and compare it to the user input if it matches it displays the row else ride the row. Code was taken from W3Schools (How to - filter/search table).
Conclusion
Throughout the past few weeks, I have learned in class the basic tools that were crucial for the completion of this project. There are different approaches when it comes to creating a website. For this project, I used DOM Parser on JavaScript to extract the data from the XML file instead of using an XSL file I found this way to be easier since I was using an object-oriented programming language.
Although the appearance of the website isn’t a requirement I got to play around with the appearance and the way CSS works. One interesting piece of information that I gained from this project is that if follow the steps: go to a random website > right-click anywhere on the page> “inspect element” I can see the HTML and CSS code of a page.
Bibliography
CSS Styling Tables [Online]. Available at: https://www.w3schools.com/Css/css_table.asp (Accessed:  October 28, 2022).
How to - contact form [Online]. How To Create a Contact Form with CSS. Available at: https://www.w3schools.com/howto/howto_css_contact_form.asp (Accessed: November 10, 2022). 
How to - filter/search table [Online] How To Create a Filter/Search Table. Available at: https://www.w3schools.com/howto/howto_js_filter_table.asp (Accessed: November 11, 2022). 
NJ19878888 (2018)[Online] Reading XML files using JavaScript, YouTube. YouTube. Available at: https://www.youtube.com/watch?v=VxKGVb0oOBw (Accessed: November 01, 2022). 


