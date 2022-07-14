/* Hooks / Functions */
import { useEffect } from 'react';

/**
 * technoAnime() function to display different words from an array with setTimeout
 * @const {array} array - Technologies Data
 * @param {integer} index - Index of array
 * @param {string} div - querySelector div
 */
export const technoAnime = (index, div) => { 
    const array = ["React", "JavaScript", "Redux", "Node.Js", "Express", "PostgreSQL", "MySQL", "JWT", "AWS EC2", "AWS S3", "NGINX", "PHP"];
    setTimeout(() => {
        const qs = document.querySelector(div);
        if (index < array.length) {
            qs.textContent = array[index];
            setTimeout(() => technoAnime(index + 1, div), 2000);
        } else {
            setTimeout(() => technoAnime(0, div), 2000);
        }
    }, 2000);
};

/**
 *  Intersection Observer API for rendering Fade In / Out when user scroll up / down
 * 
 * Observer option is used to indicate at what percentage of the target's visibility the observer's callback should be executed.
 * @params https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */
export const fade = () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7
    };
    const observerCallBack = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // fade in observed elements that are in view
                entry.target.classList.replace('fadeOut', 'fadeIn');
            }
            //fade out observed elements that are not in view
            // else {
            //     entry.target.classList.replace('fadeIn', 'fadeOut');
            // }
        });
    };
    const observer = new IntersectionObserver(observerCallBack, observerOptions);
    const fadeElms = document.querySelectorAll('.section');
    fadeElms.forEach(el => observer.observe(el));
};

/**
 * Hooks for adding script tag into react/jsx
 */

export const useScript = url => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = "text/babel";
        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};
