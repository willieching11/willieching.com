document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('copyright-year').textContent = new Date().getFullYear();

    document.querySelectorAll('.image-wrapper').forEach(function (wrapper) {
        var overlay = wrapper.querySelector('.overlay');
        if (!overlay) return;
        overlay.style.transition = 'opacity 0.4s ease';
        overlay.style.opacity = '0';
        wrapper.addEventListener('mouseenter', function () {
            overlay.style.display = 'block';
            requestAnimationFrame(function () { overlay.style.opacity = '1'; });
        });
        wrapper.addEventListener('mouseleave', function () {
            overlay.style.opacity = '0';
            setTimeout(function () {
                if (overlay.style.opacity === '0') overlay.style.display = 'none';
            }, 400);
        });
    });

    var hamburger = document.querySelector('.hamburger');
    var navCollapse = document.getElementById('navbarSupportedContent');

    function toggleNav() {
        if (!hamburger || !navCollapse) return;
        var isActive = hamburger.classList.toggle('is-active');
        navCollapse.classList.toggle('show', isActive);
        hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleNav);
    }

    document.querySelectorAll('#primary li a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.matchMedia('(max-width: 991.98px)').matches && hamburger && hamburger.classList.contains('is-active')) {
                toggleNav();
            }
        });
    });
});
