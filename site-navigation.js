(() => {
    const labels={en:['Korean lessons','About','Contact','Privacy Policy','Terms'],ja:['韓国語レッスン','このサイトについて','お問い合わせ','プライバシー','利用規約'],zh:['韩语课程','关于本站','联系我们','隐私政策','使用条款'],es:['Lecciones de coreano','Acerca de','Contacto','Privacidad','Condiciones'],th:['บทเรียนภาษาเกาหลี','เกี่ยวกับเรา','ติดต่อ','ความเป็นส่วนตัว','เงื่อนไข']};
    function localize(){window.KTalkGA4?.localize();const names=labels[typeof currentLang==='string'?currentLang:'en']||labels.en;document.querySelectorAll('[data-site-link]').forEach(n=>{n.textContent=names[Number(n.dataset.siteLink)];});}
    window.KTalkSite={localize};
    document.addEventListener('DOMContentLoaded',()=>{
        localize();
        const header=document.querySelector('body > header'),progress=header?.nextElementSibling;
        if(header&&progress){
            const position=()=>{progress.style.top=header.getBoundingClientRect().height+'px';};
            position();if(window.ResizeObserver)new ResizeObserver(position).observe(header);
        }
    },{once:true});
})();
