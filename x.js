// Obfuscated JS for config-driven site with error handling
(async function () {
    try {
        const a = await fetch('config.json?v=' + Date.now()), b = await a.json(); let c; 
        try { c = document.querySelector("link[rel~='icon']"); if (!c) { c = document.createElement('link'); c.rel = 'icon'; document.head.appendChild(c) } c.href = b.favicon } catch (e) { console.warn('Favicon could not be loaded:', e) }
        try { document.title = b.site_title } catch (e) { console.warn('Title error:', e) }
        try { const d = document.getElementById('a'); d.src = b.logo; d.alt = '' } catch (e) { console.warn('Logo error:', e) }
        try { document.getElementById('c').textContent = b.player_counter.text } catch (e) { console.warn('Player counter text error:', e) }
        try { const e = document.getElementById('d'); e.innerHTML = ''; b.nav_buttons.forEach(f => { const g = document.createElement('a'); g.className = 'k', f.icon ? g.innerHTML = `<i class="${f.icon}"></i> ${f.text}` : g.textContent = f.text, g.href = f.link, f.target && (g.target = f.target), f.text.toLowerCase().includes('vote') && g.classList.add('m'), f.text.toLowerCase().includes('discord') && g.classList.add('l'), f.text.toLowerCase().includes('shop') && g.classList.add('n'), e.appendChild(g) }) } catch (e) { console.warn('Nav buttons error:', e) }
        try { document.getElementById('e').textContent = b.hero.title } catch (e) { console.warn('Hero title error:', e) }
        try { document.getElementById('f').textContent = b.hero.subtitle } catch (e) { console.warn('Hero subtitle error:', e) }
        try { document.getElementById('i').textContent = b.hero.cta_text } catch (e) { console.warn('Hero CTA text error:', e) }
        try { document.getElementById('h').className = b.hero.cta_icon } catch (e) { console.warn('Hero CTA icon error:', e) }
        try { document.getElementById('j').textContent = b.features_title } catch (e) { console.warn('Features title error:', e) }
        try { document.getElementById('k').textContent = b.features_subtitle } catch (e) { console.warn('Features subtitle error:', e) }
        try { const h = document.getElementById('l'); h.innerHTML = ''; b.features.forEach(i => { const j = document.createElement('div'); j.className = 'u', j.innerHTML = `<div class=\"v\"><i class=\"${i.icon}\"></i></div><h3 class=\"w\">${i.title}</h3><p class=\"x\">${i.description}</p>`, h.appendChild(j) }) } catch (e) { console.warn('Features error:', e) }
        try { document.getElementById('m').textContent = b.final_cta.title } catch (e) { console.warn('Final CTA title error:', e) }
        try { document.getElementById('n').textContent = b.final_cta.subtitle } catch (e) { console.warn('Final CTA subtitle error:', e) }
        try { document.getElementById('p').textContent = b.final_cta.ip } catch (e) { console.warn('Final CTA IP error:', e) }
        try { document.getElementById('q').textContent = b.final_cta.copy_hint } catch (e) { console.warn('Final CTA copy hint error:', e) }
        try { document.getElementById('o').onclick = function () { r(b.final_cta.ip) } } catch (e) { console.warn('Final CTA copy click error:', e) }
        try { document.getElementById('u').textContent = b.vote_popup.title } catch (e) { console.warn('Vote popup title error:', e) }
        try { const i = document.getElementById('v'); i.innerHTML = ''; b.vote_popup.links.forEach(j => { const k = document.createElement('a'); k.className = 'Q', k.href = j.url, k.target = '_blank', k.textContent = j.text, i.appendChild(k) }) } catch (e) { console.warn('Vote links error:', e) }
        try { document.getElementById('r').textContent = b.footer } catch (e) { console.warn('Footer error:', e) }
        try { document.getElementById('copyNotifText').textContent = b.copy_notification } catch (e) { console.warn('Copy notification text error:', e) }
        window.s = async function () { try { const l = await fetch(`https://api.mcsrvstat.us/2/${b.player_counter.demo_ip}`), m = await l.json(); m && m.players && 'number' == typeof m.players.online ? document.getElementById('b').textContent = m.players.online.toLocaleString() : document.getElementById('b').textContent = 'N/A' } catch (l) { console.warn('Player count fetch error:', l); document.getElementById('b').textContent = 'N/A' } }; try { s(); setInterval(s, 45e3) } catch (e) { console.warn('Player count interval error:', e) }

        // --- Custom Footer Tag ---
        try { 
            const footerId = "kode-footer";
            const footerEl = document.getElementById(footerId);
            if (footerEl) {
                const span = document.createElement("span");
                span.style.cssText = "color:#9ca3af;font-size:0.9em;text-align:center;cursor:pointer;display:inline-block;";
                span.innerHTML = "Made by <strong>Empire Legacy X Hani</strong>";
                span.addEventListener("click", () => window.open("https://discord.gg/BgS9JKWuZH", "_blank"));
                footerEl.appendChild(span);
            }
        } catch (e) { }

        // --- Floating Widget ---
        try {
            const widget = document.createElement("div");
            widget.style.cssText = 'position:fixed;bottom:20px;right:20px;background:rgba(255,255,255,0.75);backdrop-filter:blur(8px);color:#666;padding:10px 14px;border-radius:8px;font-size:0.75em;cursor:pointer;z-index:9999;box-shadow:0 1px 8px rgba(0,0,0,0.05);border:1px solid rgba(255,255,255,0.3);transition:all 0.3s ease;max-width:240px;user-select:none;opacity:0.8;';
            let expanded = false;
            const compact = '<div style="display:flex;align-items:center;gap:6px;width:100%;height:100%;">Made by <span style="font-family:monospace;font-size:12px;color:#888;font-weight:bold;vertical-align:top;line-height:1;">&lt;/&gt;</span> <strong style="color:#555;">Empire Legacy X Hani</strong></div>';
            const expandedContent = '<div style="position:relative;margin-top:10px;padding-top:10px;border-top:1px solid rgba(0,0,0,0.08);font-size:0.7em;opacity:0.75;line-height:1.3;color:#666;"><div class="close-btn" style="position:absolute;top:-35px;right:-10px;width:26px;height:26px;background:rgba(0,0,0,0.08);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px;color:#888;font-weight:bold;z-index:10000;">×</div>Professional web development & design services.<br><br>Click to join our Discord community!</div>';
            widget.className = 'widget-root';
            widget.innerHTML = compact;
            widget.addEventListener('click', function (e) { 
                e.preventDefault(); e.stopPropagation();
                if (e.target.classList.contains('close-btn') || e.target.textContent === '×') {
                    if (expanded) {
                        widget.innerHTML = compact;
                        widget.style.maxWidth = '240px';
                        expanded = false;
                    }
                    return false;
                }
                if (!expanded) {
                    widget.innerHTML = compact + expandedContent;
                    widget.style.maxWidth = '280px';
                    expanded = true;
                } else {
                    window.open("https://discord.gg/BgS9JKWuZH", "_blank");
                }
                return false;
            });
            widget.addEventListener('mouseenter', function () { widget.style.opacity = '1'; widget.style.transform = 'translateY(-1px)'; widget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'; });
            widget.addEventListener('mouseleave', function () { widget.style.opacity = '0.8'; widget.style.transform = 'translateY(0)'; widget.style.boxShadow = '0 1px 8px rgba(0,0,0,0.05)'; });
            document.addEventListener('click', function (e) { if (expanded && !widget.contains(e.target)) { widget.innerHTML = compact; widget.style.maxWidth = '240px'; expanded = false; } });
            document.body.appendChild(widget);
        } catch (e) { }

        function r(n) { try { navigator.clipboard.writeText(n).then(() => { const o = document.getElementById('s'); const t = document.getElementById('copyNotifText'); if (t) { t.textContent = b.copy_notification; } o.classList.add('G'), setTimeout(() => { o.classList.remove('G') }, 3e3) }) } catch (e) { console.warn('Copy to clipboard error:', e) } }
        function t() { try { const n = document.querySelector('.b'); for (let o = 0; o < 50; o++) { const p = document.createElement('div'); p.classList.add('c'), p.style.left = 100 * Math.random() + "%", p.style.top = 100 * Math.random() + "%", p.style.animationDelay = 6 * Math.random() + "s", p.style.animationDuration = 4 * Math.random() + 4 + "s", n.appendChild(p) } } catch (e) { console.warn('Particles error:', e) } } t(); 
        window.addEventListener('DOMContentLoaded', () => { }); 
        window.openVoteModal = function () { try { const n = document.getElementById('t'); n.style.display = 'flex', setTimeout(() => { n.classList.add('L'), n.querySelector('.M').classList.add('L') }, 10) } catch (e) { console.warn('Open vote modal error:', e) } }; 
        window.closeVoteModal = function () { try { const n = document.getElementById('t'); n.classList.remove('L'), n.querySelector('.M').classList.remove('L'), setTimeout(() => { n.style.display = 'none' }, 350) } catch (e) { console.warn('Close vote modal error:', e) } }; 
        document.addEventListener('click', function (n) { try { n.target.classList && n.target.classList.contains('k') && n.target.classList.contains('m') && (n.preventDefault(), openVoteModal()) } catch (e) { console.warn('Vote modal open click error:', e) } }); 
        try { document.getElementById('t').addEventListener('mousedown', function (n) { try { n.target === this && closeVoteModal() } catch (e) { console.warn('Vote modal close click error:', e) } }) } catch (e) { console.warn('Vote modal overlay error:', e) } 
        document.addEventListener('click', function (n) { try { n.target.closest('.r') && (n.preventDefault(), document.querySelector('.s').scrollIntoView({ behavior: 'smooth' })) } catch (e) { console.warn('Smooth scroll error:', e) } })
    } catch (e) { console.error('Config load or main error:', e) }
})();