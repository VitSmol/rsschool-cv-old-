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
});
console.log(`1. Markup is valid: 10`);
console.log(`2. Markup is semantic. There are next tags: header, nav, main, section, footer, h1, h2*6: 20`);
console.log(`3. Used CSS styles in a separate file: 10`);
console.log(`4. Content in a main block is centered: 10`);
console.log(`5. Markup is responsive: 10`);
console.log(`6. There is a menu. Links in menu items lead to main sections,smooth scrolling implemented: 10`);
console.log(`7. There are image with alt-attribute and fix size: 10`);
console.log(`8. Contacts and list of skills arranged in the form of a list: 10`);
console.log(`9. CV contain contacts, aboutMe info, skills list, education info, english lvl: 10`);
console.log(`10. CV contain example of code with code-hightlight: 10`);
console.log(`11. CV contain image-links to my projects: 10`);
console.log(`12. CV in English: 10`);
console.log(`13. Pull Request requirements is complete: 10`);
console.log(`14. Video resume is OK : 10`);
console.log(`15. yourScoreByThisPoint === 10 ? ":-)" : ":-(" `);
