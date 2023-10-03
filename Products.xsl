<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : Products.xsl
    Created on : 1 November 2022
    Author     : Aloisio Junior 
    Year       : BSHCIFSC2
-->

<xsl:stylesheet version="1.0"   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/Products">
        <html>
            <head>
                <script src="Products.js"></script>
                <link rel="stylesheet" href="Products.css"/>
            </head>  
            <body>
                <div class="search_wrapper">
                    <label for="search">Search Products</label>
                    <input type="search" id="search" ></input>
                </div>
                <h2>Product List</h2>
                <div >
                div bgcolor="beige"
                        <th></th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        
                        </div>
                    <xsl:for-each select="product">
                        <div class= "product-cards">
                            <div class="card">
                                <div>Product Name: <xsl:value-of select="name"></div>
                                <div>Category: <xsl:value-of select="category"></div>
                                <div>Description: <xsl:value-of select="description"/></div>
                                <div>Quantity:<xsl:value-of select="quantity"/></div>
                                <div>Unit Price: <xsl:value-of select="unitPrice"/></div>"<br>"
                            </div>
                        </div>
                    </xsl:for-each>
                </div>
            <script>
            xmlDoc=loadXMLDoc("Products.xml");

            x=xmlDoc.getElementsByTagName("Student");

            for (i=0;i<x.length;i++)
            { 
            document.write(x[i].childNodes[0].nodeValue);
            document.write("<br>");
            }

            </script>    
            </body>           
        </html>
    </xsl:template>
    
 </xsl:stylesheet>