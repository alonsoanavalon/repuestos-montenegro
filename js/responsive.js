export default function responsiveQueries (id1,  mq, classHidden) {

    const d = document,
    w = window;

    let breakpoint = w.matchMedia(mq);

    const responsive = e => {

        if (e.matches) {
            d.getElementById(id1).classList.add(classHidden)

        } else {
            d.getElementById(id1).classList.remove(classHidden)

        }

        

    }

    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);


}