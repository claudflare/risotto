document.querySelectorAll('.page__body img').forEach(img => {
    img.addEventListener('click', e => {
        if (document.querySelector('.lightbox')) return;

        const anchor = img.closest('a');
        if (anchor) e.preventDefault();

        const trigger = document.activeElement;

        const overlay = document.createElement('div');
        overlay.className = 'lightbox';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', img.alt || 'Image');
        overlay.tabIndex = -1;

        const clone = document.createElement('img');
        clone.src = img.src;
        clone.alt = img.alt;
        overlay.appendChild(clone);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
        overlay.focus();

        const close = () => {
            overlay.remove();
            document.body.style.overflow = '';
            document.removeEventListener('keydown', onKey);
            trigger?.focus();
        };
        const onKey = e => { if (e.key === 'Escape') close(); };
        overlay.addEventListener('click', close);
        document.addEventListener('keydown', onKey);
    });
});
