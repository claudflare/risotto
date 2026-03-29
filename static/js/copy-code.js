document.querySelectorAll('.highlight').forEach(block => {
    const btn = document.createElement('button');
    btn.innerText = 'copy';
    btn.className = 'copy-btn';
    block.style.position = 'relative';
    block.appendChild(btn);

    btn.addEventListener('click', () => {
        const codeEl = block.querySelector('.lntd:last-child code') || block.querySelector('code');
        navigator.clipboard.writeText(codeEl.innerText).then(() => {
            btn.innerText = 'copied!';
            setTimeout(() => { btn.innerText = 'copy'; }, 2000);
        });
    });
});
