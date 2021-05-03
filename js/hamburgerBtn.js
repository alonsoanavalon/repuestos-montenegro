export default function hamburgerMenu (hamburgerBtn, hamburgerMenu, hamburgerLink, panelActive) {
    const d = document;

    d.addEventListener("click", e => {


        if (e.target.matches(hamburgerBtn) || (e.target.matches(`${hamburgerBtn} *`)) ) {
        
            d.querySelector(hamburgerMenu).classList.add(panelActive)
        }

        if (e.target.matches(`${hamburgerMenu} *`) || e.target.matches(hamburgerLink) || e.target.matches(".nav-menu.active")){

            d.querySelector(hamburgerMenu).classList.remove(panelActive);
        }

  

    })



}