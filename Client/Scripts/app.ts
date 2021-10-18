/* 
File name: assignment2
Course name: COMP229 Web application development
Student Name: Tu Hanren
Student ID: 301061529
Date: 2021-10-11
*/
"use strict";
//IIFE -- Immediately Invoked Function Expression
(function () {
    //confirm deletion
    function confirmDelete()
    {
      // confirm deletion
      $("a.delete").on("click", function(event){
        if(!confirm("Are you sure?"))
        {
          event.preventDefault();
          location.href = '/contacts-list';
        }       
      });
    }

    function Start():void 
    {
      console.log("Start...");
      // confirm deletion
      confirmDelete();  
    }
    window.addEventListener("load", Start);
})();
