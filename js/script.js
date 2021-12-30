hljs.initHighlightingOnLoad();
const menuBtn = document.querySelector(".m-menu");
const firstLine = menuBtn.querySelector(`.first__line`)
const secondLine = menuBtn.querySelector(`.second__line`)
const lastLine = menuBtn.querySelector(`.last__line`)
const menu = document.querySelector('.header__nav');
menuBtn.addEventListener('click', function () {
   menu.classList.toggle('active');
   firstLine.classList.toggle(`active__first`);
   secondLine.classList.toggle(`active__second`);
   lastLine.classList.toggle(`active__last`);
})

console.log(`Sumbit is OK: 10`); 
console.log(`Markup is valid: 10`); 
console.log(`Markup is semantic. There are next tags: header, nav, main, section, footer: 20`); 
console.log(`Footer has link to github, year and link-logo: 10`); 
console.log(`Used CSS styles in a separate file: 10`); 
console.log(`Content in a main block is centered: 10`); 
console.log(`There are image with alt-attribute and fix size - 10`); 
console.log(`Contacts and list of skills arranged in the form of a list - 10`); 
console.log(`CV contain contacts, aboutMe info, skills list, education info, english lvl: 30`); 
console.log(`CV in English - 10`)
console.log(`total score: 130`);
