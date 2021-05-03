import hamburgerMenu from "./hamburgerBtn.js";
import responsiveQueries from "./responsive.js";

const d = document;


d.addEventListener("DOMContentLoaded", () => {
    hamburgerMenu(".nav-btn", ".nav-menu", ".nav-menu a", "active");
    responsiveQueries("btn-menu", "(min-width: 768px)", "hidden");
})  