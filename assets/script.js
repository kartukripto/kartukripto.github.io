// const
const navData = [
    { href: "/", label: "Encrypt", icon: "bi-wallet2"},
    { href: "/scan/", label: "Decrypt", icon: "bi-qr-code"},
];

// utils
function is_url(href) {
    const current = window.location.pathname;
    return current === href;
}

// components
function useSideBar() {
    const nav = document.createElement('nav');
    nav.className = "col-lg-3 col-xl-2 d-none d-lg-block vh-100 position-sticky top-0 overflow-y-auto p-3";

    const ul = document.createElement('ul');
    ul.className = "nav flex-column mt-4";

    navData.forEach(item => {
        const li = document.createElement('li');
        li.className = "nav-item";

        const a = document.createElement('a');
        a.className = "nav-link" + (is_url(item.href) ? " active" : "");
        a.href = item.href;

        const icon = document.createElement('i');
        icon.className = `bi ${item.icon} me-2`;

        a.appendChild(icon);
        a.append(item.label);
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector("body > main > section").prepend(nav);
    });
}

function useMobileNav() {
    const nav = document.createElement('nav');
    nav.className = "navbar navbar-dark bg-dark fixed-bottom d-lg-none border-top";

    const container = document.createElement('div');
    container.className = "container-fluid d-flex justify-content-around";

    navData.forEach(item => {
        const a = document.createElement('a');
        a.className = "nav-link text-center" + (is_url(item.href) ? " active" : "");
        a.href = item.href;

        const icon = document.createElement('i');
        icon.className = `bi ${item.icon}`;

        a.appendChild(icon);
        a.appendChild(document.createElement('br'));
        a.append(item.label);

        container.appendChild(a);
    });

    nav.appendChild(container);

    document.addEventListener("DOMContentLoaded", () => {
        document.body.appendChild(nav);
    });
}
