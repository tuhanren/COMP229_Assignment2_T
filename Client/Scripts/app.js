/* 
File name: assignment2
Course name: COMP229 Web application development
Student Name: Tu Hanren
Student ID: 301061529
Date: 2021-10-11
*/
"use strict";
(function () {
    function confirmDelete() {
        $("a.delete").on("click", function (event) {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
                location.href = '/contacts-list';
            }
        });
    }
    function Start() {
        console.log("Start...");
        confirmDelete();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map