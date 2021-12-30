(this["webpackJsonplibrary-react-app"]=this["webpackJsonplibrary-react-app"]||[]).push([[0],{21:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),a=c(15),r=c.n(a),n=(c(21),c(12)),o=c(16),l=c(7),j=[{id:1,title:"Crack the Coding Interview",url:"https://covers.openlibrary.org/b/id/8091016-L.jpg",originalPrice:49.95,salePrice:14.95,rating:4.5},{id:2,title:"Atomic Habits",url:"https://covers.openlibrary.org/b/id/10958382-L.jpg",originalPrice:39,salePrice:null,rating:5},{id:3,title:"Can't Hurt Me",url:"https://covers.openlibrary.org/b/id/10425061-L.jpg",originalPrice:29,salePrice:null,rating:5},{id:4,title:"Deep Work",url:"https://covers.openlibrary.org/b/id/10088428-L.jpg",originalPrice:44,salePrice:19,rating:4.5},{id:5,title:"The 10X Rule",url:"https://covers.openlibrary.org/b/id/9978588-L.jpg",originalPrice:32,salePrice:null,rating:5},{id:6,title:"Sell Or Be Sold",url:"https://covers.openlibrary.org/b/id/7737110-L.jpg",originalPrice:70,salePrice:12.5,rating:5},{id:7,title:"Rich Dad Poor Dad",url:"https://covers.openlibrary.org/b/id/2380224-L.jpg",originalPrice:11,salePrice:10,rating:4},{id:8,title:"Cashflow Quadrant",url:"https://covers.openlibrary.org/b/id/1954899-L.jpg",originalPrice:38,salePrice:17.95,rating:4.5},{id:9,title:"48 Laws of Power Summary",url:"https://covers.openlibrary.org/b/id/8906626-L.jpg",originalPrice:35,salePrice:19.95,rating:4.5},{id:10,title:"The 5 Second Rule",url:"https://covers.openlibrary.org/b/id/8114155-L.jpg",originalPrice:40,salePrice:null,rating:5},{id:11,title:"How to Win Friends & Influence People",url:"https://covers.openlibrary.org/b/id/7895280-L.jpg",originalPrice:30,salePrice:20,rating:5},{id:12,title:"Mastery",url:"https://covers.openlibrary.org/b/id/8479576-L.jpg",originalPrice:30,salePrice:12.95,rating:4.5}],b=c(5),d=c(3),u=c(0);var m=function(e){var t=e.rating;return Object(u.jsxs)("div",{className:"book__rating",children:[new Array(Math.floor(t)).fill(Object(u.jsx)(b.a,{icon:"star"})),!Number.isInteger(t)&&Object(u.jsx)(b.a,{icon:"star-half-alt"})]})};var h=function(e){var t=e.salePrice,c=e.originalPrice;return Object(u.jsx)("div",{children:t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"book__price--normal",children:c.toFixed(2)}),t.toFixed(2)]}):Object(u.jsxs)(u.Fragment,{children:["$",c.toFixed(2)]})})};var O=function(e){var t=e.books,c=Object(s.useState)(),i=Object(l.a)(c,2),a=i[0],r=i[1],n=Object(s.useRef)(!0);return Object(s.useEffect)((function(){var e=new Image;return e.src=t.url,e.onload=function(){setTimeout((function(){n.current&&r(e)}),300)},function(){n.current=!1}})),Object(u.jsx)("div",{className:"book",children:a?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.b,{to:"/books/".concat(t.id),children:Object(u.jsx)("figure",{className:"book__img--wrapper",children:Object(u.jsx)("img",{src:a.src,alt:"",className:"book__img"})})}),Object(u.jsx)("div",{className:"book__title",children:Object(u.jsx)(d.b,{to:"/books/".concat(t.id),className:"book__title--link",children:t.title})}),Object(u.jsx)("div",{className:"book__ratings",children:Object(u.jsx)(m,{rating:t.rating})}),Object(u.jsx)("div",{className:"book__price",children:Object(u.jsx)(h,{salePrice:t.salePrice,originalPrice:t.originalPrice})})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"book__img--skeleton"}),Object(u.jsx)("div",{className:"skeleton book__title--skeleton"}),Object(u.jsx)("div",{className:"skeleton book__rating--skeleton"}),Object(u.jsx)("div",{className:"skeleton book__price--skeleton"})]})})};var x=function(){return Object(u.jsx)("section",{id:"recent",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("h2",{className:"section__title",children:["Discount ",Object(u.jsx)("span",{className:"purple",children:"Books"})]}),Object(u.jsx)("div",{className:"books",children:j.filter((function(e){return e.salePrice})).slice(0,8).map((function(e){return Object(u.jsx)(O,{books:e,id:e.id})}))})]})})})};var _=function(){return Object(u.jsx)("section",{id:"explore",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row row__column",children:[Object(u.jsxs)("h2",{children:["Explore more ",Object(u.jsx)("span",{className:"purple",children:"Books"})]}),Object(u.jsx)(d.b,{to:"/books",children:Object(u.jsx)("button",{className:"btn",children:"Explore Books"})})]})})})};var p=function(){return Object(u.jsx)("section",{id:"features",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("h2",{className:"section__title",children:["Featured ",Object(u.jsx)("span",{className:"purple",children:"Books"})]}),Object(u.jsx)("div",{className:"books",children:j.filter((function(e){return 5===e.rating})).slice(0,4).map((function(e){return Object(u.jsx)(O,{books:e},e.id)}))})]})})};var g=function(e){return Object(u.jsxs)("div",{className:"highlight",children:[Object(u.jsx)("div",{className:"highlight__img",children:e.icon}),Object(u.jsx)("h3",{className:"highlight__subtitle",children:e.title}),Object(u.jsx)("p",{className:"highlight__para",children:e.subTitle})]})};var v=function(){return Object(u.jsx)("section",{id:"highlights",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("h2",{className:"section__title",children:["Why choose ",Object(u.jsx)("span",{className:"purple",children:"Library"})]}),Object(u.jsxs)("div",{className:"highlight__wrapper",children:[Object(u.jsx)(g,{icon:Object(u.jsx)(b.a,{icon:"bolt"}),title:"Easy and Quick",subTitle:"\r Get access to the book you purchased online instantly."}),Object(u.jsx)(g,{icon:Object(u.jsx)(b.a,{icon:"book-open"}),title:"10,000+ Books",subTitle:"\r Library has books in all your favourite categories"}),Object(u.jsx)(g,{icon:Object(u.jsx)(b.a,{icon:"tags"}),title:"Affordable",subTitle:"\r Get your hands on popular books for as little as $10."})]})]})})})},k=c.p+"static/media/Undraw_Books.64f45ed2.svg";var N=function(){return Object(u.jsx)("section",{id:"landing",children:Object(u.jsx)("header",{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"header__container",children:[Object(u.jsxs)("div",{className:"header__description",children:[Object(u.jsx)("h1",{children:"Australia's most awarded online library platform"}),Object(u.jsxs)("h2",{children:["Find your dream book with ",Object(u.jsx)("span",{className:"purple",children:"Library"})]}),Object(u.jsx)(d.b,{to:"#features",children:Object(u.jsx)("button",{className:"btn",children:"Browse books"})})]}),Object(u.jsx)("figure",{className:"header__img--wrapper",children:Object(u.jsx)("img",{src:k,alt:""})})]})})})})};var f=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(N,{}),Object(u.jsx)(v,{}),Object(u.jsx)(p,{}),Object(u.jsx)(x,{}),Object(u.jsx)(_,{})]})};var y=function(e){var t=e.books,c=Object(s.useState)(t),i=Object(l.a)(c,2),a=i[0],r=i[1];return Object(u.jsx)("div",{className:"books__body",children:Object(u.jsx)("main",{id:"books__main",children:Object(u.jsx)("section",{children:Object(u.jsx)("div",{className:"books__container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"books__header",children:[Object(u.jsx)("h2",{className:"section__title books__header--title",children:"All Books"}),Object(u.jsxs)("select",{id:"filter",defaultValue:"DEFAULT",onChange:function(e){return"LOW_TO_HIGH"===(t=e.target.value)&&r(a.slice().sort((function(e,t){return(e.salePrice||e.originalPrice)-(t.salePrice||t.originalPrice)}))),"HIGH_TO_LOW"===t&&r(a.slice().sort((function(e,t){return(t.salePrice||t.originalPrice)-(e.salePrice||e.originalPrice)}))),void("RATING"===t&&r(a.slice().sort((function(e,t){return t.rating-e.rating}))));var t},children:[Object(u.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Sort"}),Object(u.jsx)("option",{value:"LOW_TO_HIGH",children:"Price, Low to High"}),Object(u.jsx)("option",{value:"HIGH_TO_LOW",children:"Price, High to Low"}),Object(u.jsx)("option",{value:"RATING",children:"Rating"})]})]}),Object(u.jsx)("div",{className:"books",children:a.map((function(e){return Object(u.jsx)(O,{books:e},e.id)}))})]})})})})})},P=c(2),L=c.p+"static/media/Library.70d0a6a9.svg";var w=function(e){var t=e.numberOfItems;return Object(u.jsx)("nav",{children:Object(u.jsxs)("div",{className:"nav__container",children:[Object(u.jsx)(d.b,{to:"/",children:Object(u.jsx)("img",{src:L,alt:"",className:"logo"})}),Object(u.jsxs)("ul",{className:"nav__links",children:[Object(u.jsx)("li",{className:"nav__link",children:Object(u.jsx)(d.b,{to:"/",className:"nav__link",children:"Home"})}),Object(u.jsx)("li",{className:"nav__link",children:Object(u.jsx)(d.b,{to:"/books",className:"nav__link",children:"Books"})}),Object(u.jsx)("button",{className:"btn__menu",onClick:function(){document.body.classList.add("menu--open")},children:Object(u.jsx)(b.a,{icon:"bars"})}),Object(u.jsxs)("li",{className:"nav__icon",children:[Object(u.jsx)(d.b,{to:"/cart",className:"nav__link",children:Object(u.jsx)(b.a,{icon:"shopping-cart"})}),t>0&&Object(u.jsx)("span",{className:"cart__length",children:t})]})]}),Object(u.jsxs)("div",{className:"menu__backdrop",children:[Object(u.jsx)("button",{className:"btn__menu btn__menu--close",onClick:function(){document.body.classList.remove("menu--open")},children:Object(u.jsx)(b.a,{icon:"times"})}),Object(u.jsxs)("ul",{className:"menu__links",children:[Object(u.jsx)("li",{className:"menu__list",children:Object(u.jsx)(d.b,{to:"/",className:"menu__link",children:"Home"})}),Object(u.jsx)("li",{className:"menu__list",children:Object(u.jsx)(d.b,{to:"/",className:"menu__link",children:"Books"})}),Object(u.jsx)("li",{className:"menu__list",children:Object(u.jsx)(d.b,{to:"/",className:"menu__link",children:"Cart"})})]})]})]})})};var F=function(){return Object(u.jsx)("footer",{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row row__column",children:[Object(u.jsx)(d.b,{to:"/",children:Object(u.jsx)("figure",{className:"footer__logo",children:Object(u.jsx)("img",{src:L,alt:"",className:"footer__logo--img"})})}),Object(u.jsxs)("div",{className:"footer__list",children:[Object(u.jsx)(d.b,{to:"/",className:"footer__link",children:"Home"}),Object(u.jsx)("span",{className:"footer__link no-cursor",children:"About"}),Object(u.jsx)(d.b,{to:"/books",className:"footer__link",children:"Books"}),Object(u.jsx)(d.b,{to:"/cart",className:"footer__link",children:"Cart"})]}),Object(u.jsx)("div",{className:"footer__copyright",children:"Copyright \xa9 2021"})]})})})};var T=function(e){var t=e.books,c=e.addToCart,s=e.cart,i=Object(P.g)().id,a=t.find((function(e){return+e.id===+i}));return Object(u.jsx)("div",{id:"books__body",children:Object(u.jsxs)("main",{id:"books__main",children:[Object(u.jsx)("div",{className:"books__container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"book__selected--top",children:[Object(u.jsx)(d.b,{to:"/books",className:"book__link",children:Object(u.jsx)(b.a,{icon:"arrow-left"})}),Object(u.jsx)(d.b,{to:"/books",className:"book__link",children:Object(u.jsx)("h2",{className:"\r book__selected--title--top",children:"Books"})})]}),Object(u.jsxs)("div",{className:"book__selected",children:[Object(u.jsx)("figure",{className:"book__selected--figure",children:Object(u.jsx)("img",{src:a.url,alt:"",className:"book__selected--img"})}),Object(u.jsxs)("div",{className:"book__selected--description",children:[Object(u.jsx)("h2",{className:"book__selected--title"}),a.title,Object(u.jsx)("div",{className:"book__selected--price",children:Object(u.jsx)(h,{salePrice:a.salePrice,originalPrice:a.originalPrice})}),Object(u.jsx)(m,{rating:a.rating}),Object(u.jsxs)("div",{className:"book__summary",children:[Object(u.jsx)("h3",{className:"book__summary--title",children:"Summary"}),Object(u.jsx)("p",{className:"book__summary--para",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, corporis! Quod pariatur sunt facere libero atque aut. Recusandae dicta laborum at! Laudantium, numquam officiis rem assumenda dolorem est asperiores consequatur?"}),Object(u.jsx)("p",{className:"book__summary--para",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, corporis! Quod pariatur sunt facere libero atque aut. Recusandae dicta laborum at! Laudantium, numquam officiis rem assumenda dolorem est asperiores consequatur?"})]}),s.find((function(e){return e.id===+i}))?Object(u.jsx)(d.b,{to:"/cart",className:"book__link",children:Object(u.jsx)("button",{className:"btn",children:"Checkout"})}):Object(u.jsx)("button",{className:"btn",onClick:function(){return function(e){c(e)}(a)},children:"Add to cart"})]})]})]})}),Object(u.jsx)("div",{className:"books__container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"book__selected--top",children:Object(u.jsx)("h2",{className:"book__selected--title--top",children:"Recommended Books"})}),Object(u.jsx)("div",{className:"books",children:t.filter((function(e){return 5===e.rating&&+e.id!==+i})).slice(0,4).map((function(e){return Object(u.jsx)(O,{books:e},e.id)}))})]})})]})})},C=c.p+"static/media/empty_cart.378125a8.svg";var B=function(e){var t=e.cart,c=e.changeQuantity,s=e.removeItem,i=function(){var e=0;return t.forEach((function(t){e+=+((t.salePrice||t.originalPrice)*t.quantity).toFixed(2)})),e};return Object(u.jsx)("div",{id:"books__body",children:Object(u.jsx)("main",{id:"books__main",children:Object(u.jsx)("div",{className:"books__container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"book__selected--top",children:Object(u.jsx)("h2",{className:"cart__title",children:"Cart"})}),Object(u.jsxs)("div",{className:"cart",children:[Object(u.jsxs)("div",{className:"cart__header",children:[Object(u.jsx)("span",{className:"cart__book",children:"Book"}),Object(u.jsx)("span",{className:"cart__quantity",children:"Quantity"}),Object(u.jsx)("span",{className:"cart__total",children:"Total"})]}),Object(u.jsx)("div",{className:"cart__body",children:t.map((function(e){return Object(u.jsxs)("div",{className:"cart__item",children:[Object(u.jsxs)("div",{className:"cart__book",children:[Object(u.jsx)("img",{src:e.url,alt:"",className:"cart__book--img"}),Object(u.jsxs)("div",{className:"cart__book--info",children:[Object(u.jsx)("span",{className:"cart__book--title",children:e.title}),Object(u.jsxs)("span",{className:"cart__book--price",children:["$",(e.salePrice||e.originalPrice).toFixed(2)]}),Object(u.jsx)("button",{className:"cart__book--remove",onClick:function(){return s(e)},children:"Remove"})]})]}),Object(u.jsx)("div",{className:"cart__quantity",children:Object(u.jsx)("input",{type:"number",min:0,max:99,className:"cart__input",value:e.quantity,onChange:function(t){return c(e,t.target.value)}})}),Object(u.jsxs)("div",{className:"cart__total",children:["$",(e.quantity*(e.salePrice||e.originalPrice)).toFixed(2)]})]})}))}),0===t.length&&Object(u.jsxs)("div",{className:"cart__empty",children:[Object(u.jsx)("img",{src:C,alt:"",className:"cart__empty--img"}),Object(u.jsx)("h2",{children:"You don't have any books in your cart"}),Object(u.jsx)(d.b,{to:"/books",children:Object(u.jsx)("button",{className:"btn",children:"Browse Books"})})]})]}),t.length>0&&Object(u.jsxs)("div",{className:"total",children:[Object(u.jsxs)("div",{className:"total__item total__sub-total",children:[Object(u.jsx)("span",{children:"Subtotal"}),Object(u.jsxs)("span",{children:["$",i().toFixed(2)]})]}),Object(u.jsxs)("div",{className:"total__item total__tax",children:[Object(u.jsx)("span",{children:"Tax"}),Object(u.jsxs)("span",{children:[" $",(.13*i()).toFixed(2)]})]}),Object(u.jsxs)("div",{className:"total__item total__price",children:[Object(u.jsx)("span",{children:"Total"}),Object(u.jsxs)("span",{children:["$",(.13*i()+i()).toFixed(2)]})]}),Object(u.jsx)("button",{className:"btn btn__checkout no-cursor",children:"Proceed to checkout"})]})]})})})})};var H=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(u.jsxs)(d.a,{children:[Object(u.jsx)(w,{numberOfItems:function(){var e=0;return c.forEach((function(t){e+=t.quantity})),e}()}),Object(u.jsxs)(P.c,{children:[Object(u.jsx)(P.a,{path:"/",exact:!0,element:Object(u.jsx)(f,{})}),Object(u.jsx)(P.a,{path:"/books",exact:!0,element:Object(u.jsx)(y,{books:j})}),Object(u.jsx)(P.a,{path:"/books/:id",element:Object(u.jsx)(T,{books:j,addToCart:function(e){i([].concat(Object(o.a)(c),[Object(n.a)(Object(n.a)({},e),{},{quantity:1})]))},cart:c})}),Object(u.jsx)(P.a,{path:"/cart",element:Object(u.jsx)(B,{cart:c,changeQuantity:function(e,t){i(c.map((function(c){return c.id===e.id?Object(n.a)(Object(n.a)({},c),{},{quantity:+t}):c})))},removeItem:function(e){i(c.filter((function(t){return t.id!==e.id})))}})})]}),Object(u.jsx)(F,{})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),i(e),a(e),r(e)}))},q=c(9),S=c(8);q.b.add(S.b,S.e,S.i,S.c,S.d,S.h,S.f,S.g,S.a),r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root")),I()}},[[28,1,2]]]);
//# sourceMappingURL=main.9363fb33.chunk.js.map