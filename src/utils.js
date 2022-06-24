/* Hooks / Functions */

/**
 * technoAnime() function to display different words from an array with setTimeout
 * @const {array} array - Technologies Data
 * @param {integer} index - Index of array
 * @param {string} div - querySelector div
 */
export const technoAnime = (index, div) => { 
    const array = ["React", "JavaScript", "Redux", "Node.Js", "Express", "PostgreSQL", "MySQL", "JWT", "AWS EC2", "AWS S3", "NGINX"];
    setTimeout(() => {
        const qs = document.querySelector(div);
        if (index < array.length) {
            qs.textContent = array[index];
            setTimeout(() => technoAnime(index + 1, div), 2500);
        } else {
            setTimeout(() => technoAnime(0, div), 2500);
        }
    }, 2500);
};