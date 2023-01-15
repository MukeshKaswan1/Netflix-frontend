import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";
import Footer from"./Footer"

ReactDOM.render(
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
     
    
      <div className="main-div">
      <Card 
       imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPnvDc4I8Au5dIse5PKN7cPa567fQzz9KVzA&usqp=CAU" alt="my pic"
       title="A Netflix Original Series"
       sname="Altered Carbon"
       link="https://www.netflix.com/in/title/80097140"
       /> 
       <Card 
       imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspTsG_SkXBRMLmkshFV7t6u-RU00UbOxHPQ&usqp=CAU" alt="my pic"
       title="A Netflix Original Series"
       sname="THE ALIENIST"
       link="https://www.netflix.com/in/title/80149395"
       /> 
       <Card 
       imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ZfukIwD9O1oD1rkEtlY7SiSDBGHjFgiQAg&usqp=CAU" alt="my pic"
       title="A Netflix Original Series"
       sname=" MINDHUNTER"
       link="https://www.netflix.com/in/title/80114855"
       />
       <Card 
       imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUr98DLQERCYoGDgHXN0jBbljhiYUhWH6_A&usqp=CAU" alt="My pic"
       title="A Netflix Original Series"
       sname=" Wednesday"
       link="https://www.netflix.com/in/title/81231974?source=35"
       />

       <Card 
       imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjY91MA6Z0l7uiF3NYYwPrxl9AiM5ppeOcPg&usqp=CAU" alt="my pic"
       title="A Netflix Original Series"
       sname="The Blacklist"
       link="https://www.netflix.com/in/title/70281312"
       />

       <Card 
       imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrud4rpiHYA-DeE2pxiERkpXV_y_A_Oa_ng&usqp=CAU" alt="My Pic"
       title="A Netflix Original Series"
       sname="Kingdom"
       link="https://www.netflix.com/in/title/80180171?source=35"
       />

       <Card 
       imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwO_lAcVqnpXbTe6lt77nI8SBRP2uFoFQr-b0AiZ0-w&s" alt="my pic"
       title="A Netflix Original Series"
       sname="School"
       link="https://www.netflix.com/in/title/81093144?source=35"
       />

       <Card 
       imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIQmoeSG4mfZybncgJ-9nkF3CKgluaW7FIg&usqp=CAU" alt="my pic"
       title="A Netflix Original Series"
       sname="The Billion Dollar Code"
       link="https://www.netflix.com/in/title/81074012?source=35"
       />

       <Card
       imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7Smo06tDdkwwxqSeeTzWXmeuIq-hJZ5oLg&usqp=CAU" alt="My pic"
       title="A Netflix Original Series"
       sname="Kota Factory"
       link="https://www.netflix.com/in/title/81249783?source=35"
       />
      </div>

      <Footer />

    </>, 
 document.getElementById("root") );