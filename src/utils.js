export const scrollIntoView = (label) => {
    var elmnt = document.getElementById(label);

    if (elmnt) {
        setTimeout(() => {
            elmnt.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        }, 5);
    }
}