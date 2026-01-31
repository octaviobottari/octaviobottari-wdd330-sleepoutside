export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export function renderListWithTemplate(
  templateFn, 
  parentElement, 
  list, 
  position = "afterbegin", 
  clear = false
) {
  if (clear) {
    parentElement.innerHTML = '';
  }
  
  const htmlStrings = list.map(templateFn);
  
  parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
}

export async function loadTemplate(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`Could not load template: ${path}`);
  }
  const template = await res.text();
  return template;
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  if (callback) {
    callback(data);
  }
}

export async function loadHeaderFooter() {
  try {
    const headerTemplate = await loadTemplate("/partials/header.html");
    const headerElement = document.querySelector("#main-header");
    if (headerElement) {
      renderWithTemplate(headerTemplate, headerElement);
    }
    
    const footerTemplate = await loadTemplate("/partials/footer.html");
    const footerElement = document.querySelector("#main-footer");
    if (footerElement) {
      renderWithTemplate(footerTemplate, footerElement);
    }
  } catch (error) {
    console.error("Error loading header/footer:", error);
  }
}

export function alertMessage(message, scroll = true) {
  const existingAlert = document.querySelector('.alert');
  if (existingAlert) {
    existingAlert.remove();
  }
  
  const alert = document.createElement('div');
  alert.classList.add('alert');
  alert.innerHTML = `
    <p>${message}</p>
    <button class="alert-close">✕</button>
  `;
  
  const main = document.querySelector('main');
  if (main) {
    main.prepend(alert);
    
    alert.querySelector('.alert-close').addEventListener('click', () => {
      main.removeChild(alert);
    });
    
    if (scroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}