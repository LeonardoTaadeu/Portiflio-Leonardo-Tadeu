/* ===================================================================
 * Language switcher (PT / EN)
 *
 * O texto em português fica no próprio index.html. Este arquivo guarda
 * apenas a versão em inglês de cada elemento marcado com data-i18n
 * (conteúdo) ou data-i18n-alt (texto alternativo de imagem).
 * ------------------------------------------------------------------- */

(function () {
    'use strict';

    const en = {
        'nav.about': 'About',
        'nav.contact': 'Get in touch',

        'intro.title':
            'I\'m Leonardo, <br>\n' +
            'QA Engineer at OrçaFascio <br>\n' +
            'and a <br> \n' +
            'cybersecurity student <br>',

        'about.photoAlt': 'Photo of Leonardo Tadeu',
        'about.title': 'About',
        'about.text':
            'I\'m Leonardo, a QA Engineer at OrçaFascio and a Computer Science\n' +
            'student at UFABC. I started as a Young Apprentice at AkzoNobel,\n' +
            'moved through IT support and help desk, and today I write automated tests <br>\n' +
            'with Cypress to find bugs before they reach the user.\n' +
            'It was by testing software and APIs that I became interested in security: looking for what the\n' +
            'system doesn\'t expect is the same mindset as a penetration test. That is the\n' +
            'area I\'m taking my career towards.',

        'skills.title': 'Skills',
        'skills.e2e': 'E2E Testing',
        'skills.git': 'Git and GitHub',

        'exp.title': 'Experience',
        'exp.orca.date': 'April 2025 - Present',
        'exp.orca.desc':
            'I work as a QA at OrçaFascio, ensuring the quality of construction budgeting software used by construction companies and public agencies. Day to day, I review and validate the team\'s deliveries in Jira, write automated tests with Cypress to find bugs before they reach the user, and investigate issues alongside the developers until we get to the root cause. Since I started at the company in support, I know first-hand how customers use the system, and I bring that into testing, thinking about real-world flows and the cases nobody anticipated.',
        'exp.abc.role': 'IT Support',
        'exp.abc.date': 'September 2023 - May 2024',
        'exp.abc.desc':
            'Responsible for providing technical support to users of the fashion-industry ERP system, helping solve problems, answering questions and optimizing the use of the system\'s features.',
        'exp.akzo.role': 'Young Apprentice',
        'exp.akzo.date': 'June 2022 - September 2023',
        'exp.akzo.desc':
            'I began my professional journey as a young apprentice in the administrative department of Akzo Nobel, where I helped manage documentation and reports at the Santo André paint factory. During that time, I was recognized for developing a spreadsheet to measure risks and potential accidents at the factory. This tool directly contributed to minimizing operational risks and preventing future accidents.',

        'edu.title': 'Education',
        'edu.bct': 'Bachelor of Science and Technology',
        'edu.bcc': 'Bachelor of Computer Science',

        'testi.misael.role': 'Electrical Engineer',
        'testi.misael.text':
            'Leonardo is a professional I had the opportunity to meet through the Young Apprentice program. A very curious young man, full of ideas and convictions, who is always willing to make group activities the best they can be. He is very attentive to processes and has a remarkable intellectual capital, which brings great clarity and understanding to discussions and projects. Working with Leonardo turns into an experience of a lot of learning and dedication.',
        'testi.caio.text':
            'I had the pleasure of working with Leonardo in QA and, without a doubt, he is one of those professionals who make a difference on the team. With a critical eye and attention to detail, he found problems before they reached the end user, which raised the quality of every delivery. <br>\n' +
            'Beyond his technical skills, Leonardo communicates clearly and has a collaborative attitude: he points out flaws constructively, comes in with suggestions and talks as an equal with devs, POs and other areas. He also shares knowledge generously and helps those around him grow. <br>\n' +
            'Committed, organized and reliable, he leaves any team better than he found it. I recommend his work without hesitation! <br>',

        'contact.title': 'Get in touch',
        'contact.text': 'It will be a pleasure to contribute my dedication and knowledge to your team\'s growth.',
        'contact.label': 'Contact',
        'contact.btn': 'Say Hi'
    };

    const STORAGE_KEY = 'site-lang';
    const contentEls = document.querySelectorAll('[data-i18n]');
    const altEls = document.querySelectorAll('[data-i18n-alt]');
    const buttons = document.querySelectorAll('.lang-switch__btn');

    // Guarda o conteúdo original (português) para poder voltar a ele.
    contentEls.forEach(function (el) { el.dataset.i18nPt = el.innerHTML; });
    altEls.forEach(function (el) { el.dataset.i18nPtAlt = el.getAttribute('alt'); });

    function setLanguage(lang) {
        const isEn = lang === 'en';

        contentEls.forEach(function (el) {
            const key = el.dataset.i18n;
            el.innerHTML = isEn && en[key] !== undefined ? en[key] : el.dataset.i18nPt;
        });

        altEls.forEach(function (el) {
            const key = el.dataset.i18nAlt;
            el.setAttribute('alt', isEn && en[key] !== undefined ? en[key] : el.dataset.i18nPtAlt);
        });

        document.documentElement.setAttribute('lang', isEn ? 'en' : 'pt-BR');

        buttons.forEach(function (btn) {
            btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
        });

        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    }

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () { setLanguage(btn.dataset.lang); });
    });

    let saved = 'pt';
    try { saved = localStorage.getItem(STORAGE_KEY) || 'pt'; } catch (e) { /* ignore */ }
    if (saved === 'en') setLanguage('en');

})();
