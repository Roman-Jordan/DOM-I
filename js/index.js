const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
let itemKeys = [];
let identifier = [];
let populateFields = [];
Object.keys(siteContent).forEach(x => {
  Object.values(siteContent[x]).forEach(y => {
    identifier.push(y);
  })
  Object.keys(siteContent[x]).forEach(y => {
    itemKeys.push(y);
  })
});

let findChildren = document.querySelector('.container');

function hasChildren(x){
  x.childNodes.forEach((x,i) => {
    x.childNodes !== 0 ? hasChildren(x):false
    if(x.nodeName !== '#text' && x.childNodes.length == 0){
      populateFields.push(x);
    }
  })
}

hasChildren(findChildren);
//Assignment Goals
populateFields.forEach((x,i) => {
  x.parentElement.nodeName == 'NAV' ? x.style.color = "green":false;//Set Nav Color Green
  itemKeys[i].includes('img') ? x.setAttribute("src", identifier[i]):false;//Set Img Src
  x.innerHTML = identifier[i];//Set InnerHTML
})


function create(parentElement,newTag,tagContent,where){
  parent = document.querySelector(parentElement);
  element = document.createElement(newTag);
  element.innerHTML = tagContent;
  where == 'p' ? parent.prepend(element):parent.appendChild(element);
}
console.log(parent.innerHtml);
create('footer','div','Hello','p');
create('footer','div','Hello','a');

//parent.beforeFirstChild(create('div', 'I am Appended'))



