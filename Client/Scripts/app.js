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