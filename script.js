/* =========================================================
   MS POWER
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   LANGUAGE DATA
========================================================= */

const translations = {

    en: {

        /* ---------- NAVIGATION ---------- */

        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_projects: "Projects",
        nav_contact: "Contact",


        /* ---------- HOME HERO ---------- */

        hero_label: "ENGINEERING & CONSTRUCTION",

        hero_title: "POWERING<br>THE FUTURE",

        hero_text:
            "MS POWER is an engineering and construction company specializing in power transmission infrastructure, overhead transmission lines, substations, and civil works.",

        hero_btn_services: "Our Services",
        hero_btn_projects: "Our Projects",


        /* ---------- ABOUT ---------- */

        about_label: "ABOUT MS POWER",

        about_title:
            "Engineering Excellence. Reliable Execution.",

        about_text:
            "MS POWER is an engineering and construction company specializing in power transmission infrastructure, overhead transmission lines, substations, and civil works. We deliver reliable, safe, and high-quality solutions through technical expertise, disciplined execution, and a commitment to excellence.",

        about_btn:
            "Learn More",


        /* ---------- VISION ---------- */

        vision_title: "Vision",
        vision_text:
            "To shape the future of power infrastructure through excellence, innovation, and trust.",

        goal_title: "Goal",
        goal_text:
            "To deliver world-class engineering and construction solutions safely, efficiently, and responsibly—creating lasting value for our clients and communities.",


        /* ---------- SERVICES ---------- */

        services_label: "WHAT WE DO",

        services_title:
            "Our Core Services",

        services_text:
            "Integrated engineering and construction solutions designed to support reliable power infrastructure.",

        service_construction:
            "Construction",

        service_construction_text:
            "Professional construction and civil works delivered with disciplined execution and high-quality standards.",

        service_electrical:
            "Electrical Works",

        service_electrical_text:
            "Electrical engineering and installation solutions for power infrastructure and related facilities.",

        service_transmission:
            "Overhead Transmission Lines",

        service_transmission_text:
            "Engineering and construction of overhead transmission line infrastructure across different locations.",

        service_substations:
            "Electrical Substations",

        service_substations_text:
            "Construction and electrical works for substations supporting reliable power transmission.",


        /* ---------- PROJECTS ---------- */

        projects_label: "OUR PROJECTS",

        projects_title:
            "Selected Projects",

        projects_text:
            "Explore some of the engineering and construction projects delivered by MS POWER.",

        project_view:
            "View Project",

        projects_btn:
            "View All Projects",


        /* ---------- LOCATION ---------- */

        location_title:
            "Our Operations",

        location_text:
            "MS POWER operates across Egypt, serving projects in Upper Egypt and Lower Egypt.",


        /* ---------- CTA ---------- */

        cta_title:
            "Building Reliable Power Infrastructure",

        cta_text:
            "Let’s work together to deliver safe, efficient, and high-quality engineering and construction solutions.",

        cta_btn:
            "Contact Us",


        /* ---------- CONTACT ---------- */

        contact_label: "CONTACT US",

        contact_title:
            "Let’s Work Together",

        contact_text:
            "Contact MS POWER to discuss your engineering and construction requirements.",

        contact_headquarters:
            "Headquarters",

        contact_phone:
            "Phone",

        contact_email:
            "Email",

        contact_address_placeholder:
            "Headquarters information will be added here.",

        contact_phone_placeholder:
            "Phone number will be added here.",

        contact_email_placeholder:
            "Email address will be added here.",


        /* ---------- FOOTER ---------- */

        footer_description:
            "Engineering and construction solutions for reliable power infrastructure.",

        footer_navigation:
            "Navigation",

        footer_services:
            "Services",

        footer_rights:
            "All rights reserved.",

        footer_company:
            "MS POWER"
    },


    /* =====================================================
       ARABIC
    ===================================================== */

    ar: {

        /* ---------- NAVIGATION ---------- */

        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_services: "خدماتنا",
        nav_projects: "مشروعاتنا",
        nav_contact: "تواصل معنا",


        /* ---------- HOME HERO ---------- */

        hero_label: "الهندسة والإنشاءات",

        hero_title: "نبني<br>مستقبل الطاقة",

        hero_text:
            "MS POWER هي شركة هندسية وإنشائية متخصصة في البنية التحتية لنقل الطاقة، وخطوط النقل الهوائية، والمحطات الكهربائية، والأعمال المدنية.",

        hero_btn_services: "خدماتنا",
        hero_btn_projects: "مشروعاتنا",


        /* ---------- ABOUT ---------- */

        about_label: "عن MS POWER",

        about_title:
            "تميز هندسي. تنفيذ موثوق.",

        about_text:
            "MS POWER هي شركة هندسية وإنشائية متخصصة في البنية التحتية لنقل الطاقة، وخطوط النقل الهوائية، والمحطات الكهربائية، والأعمال المدنية. نقدم حلولًا موثوقة وآمنة وعالية الجودة من خلال الخبرة الفنية والتنفيذ المنضبط والالتزام بالتميز.",

        about_btn:
            "اعرف المزيد",


        /* ---------- VISION ---------- */

        vision_title: "رؤيتنا",

        vision_text:
            "تشكيل مستقبل البنية التحتية للطاقة من خلال التميز والابتكار والثقة.",

        goal_title: "هدفنا",

        goal_text:
            "تقديم حلول هندسية وإنشائية عالمية المستوى بأمان وكفاءة ومسؤولية، بما يحقق قيمة مستدامة لعملائنا ومجتمعاتنا.",


        /* ---------- SERVICES ---------- */

        services_label: "ماذا نقدم",

        services_title:
            "خدماتنا الأساسية",

        services_text:
            "حلول هندسية وإنشائية متكاملة لدعم بنية تحتية موثوقة للطاقة.",

        service_construction:
            "الإنشاءات",

        service_construction_text:
            "تنفيذ أعمال الإنشاءات والأعمال المدنية باحترافية وفق أسس تنفيذ منضبطة ومعايير جودة عالية.",

        service_electrical:
            "الأعمال الكهربائية",

        service_electrical_text:
            "حلول هندسية وتنفيذية للأعمال الكهربائية الخاصة بالبنية التحتية للطاقة والمنشآت المرتبطة بها.",

        service_transmission:
            "خطوط النقل الهوائية",

        service_transmission_text:
            "تنفيذ وإنشاء البنية التحتية لخطوط نقل الطاقة الهوائية في مختلف المواقع.",

        service_substations:
            "المحطات الكهربائية",

        service_substations_text:
            "تنفيذ أعمال الإنشاءات والأعمال الكهربائية للمحطات الداعمة لنقل الطاقة بشكل موثوق.",


        /* ---------- PROJECTS ---------- */

        projects_label: "مشروعاتنا",

        projects_title:
            "مشروعات مختارة",

        projects_text:
            "تعرف على بعض المشروعات الهندسية والإنشائية التي تنفذها MS POWER.",

        project_view:
            "عرض المشروع",

        projects_btn:
            "جميع المشروعات",


        /* ---------- LOCATION ---------- */

        location_title:
            "نطاق أعمالنا",

        location_text:
            "تعمل MS POWER في مختلف أنحاء مصر، وتخدم المشروعات في الوجه القبلي والوجه البحري.",


        /* ---------- CTA ---------- */

        cta_title:
            "نبني بنية تحتية موثوقة للطاقة",

        cta_text:
            "نعمل معًا لتقديم حلول هندسية وإنشائية آمنة وفعالة وعالية الجودة.",

        cta_btn:
            "تواصل معنا",


        /* ---------- CONTACT ---------- */

        contact_label: "تواصل معنا",

        contact_title:
            "لنعمل معًا",

        contact_text:
            "تواصل مع MS POWER لمناقشة متطلباتك الهندسية والإنشائية.",

        contact_headquarters:
            "المقر الرئيسي",

        contact_phone:
            "الهاتف",

        contact_email:
            "البريد الإلكتروني",

        contact_address_placeholder:
            "سيتم إضافة بيانات المقر الرئيسي هنا.",

        contact_phone_placeholder:
            "سيتم إضافة رقم الهاتف هنا.",

        contact_email_placeholder:
            "سيتم إضافة البريد الإلكتروني هنا.",


        /* ---------- FOOTER ---------- */

        footer_description:
            "حلول هندسية وإنشائية لبنية تحتية موثوقة للطاقة.",

        footer_navigation:
            "التنقل",

        footer_services:
            "الخدمات",

        footer_rights:
            "جميع الحقوق محفوظة.",

        footer_company:
            "MS POWER"
    }

};


/* =========================================================
   GET CURRENT LANGUAGE
========================================================= */

let currentLanguage =
    localStorage.getItem("msPowerLanguage") || "en";


/* =========================================================
   APPLY LANGUAGE
========================================================= */

function applyLanguage(language) {

    if (!translations[language]) {
        language = "en";
    }

    currentLanguage = language;

    localStorage.setItem(
        "msPowerLanguage",
        language
    );


    /* ---------- HTML DIRECTION ---------- */

    document.documentElement.lang = language;

    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    /* ---------- TEXT CONTENT ---------- */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (
                translations[language][key] !== undefined
            ) {

                element.innerHTML =
                    translations[language][key];
            }

        });


    /* ---------- LANGUAGE BUTTONS ---------- */

    document
        .querySelectorAll(".lang-btn")
        .forEach(button => {

            const buttonLanguage =
                button.getAttribute("data-lang");

            button.classList.toggle(
                "active",
                buttonLanguage === language
            );

        });


    /* ---------- CLOSE MOBILE MENU ---------- */

    closeMobileMenu();
}


/* =========================================================
   LANGUAGE BUTTONS
========================================================= */

function setupLanguageButtons() {

    document
        .querySelectorAll(".lang-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const language =
                        button.getAttribute("data-lang");

                    applyLanguage(language);

                }
            );

        });
}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const menuButton =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav");


    if (!menuButton || !nav) {
        return;
    }


    menuButton.addEventListener(
        "click",
        () => {

            nav.classList.toggle("open");

            const isOpen =
                nav.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuButton.innerHTML =
                isOpen
                    ? "✕"
                    : "☰";

        }
    );


    /* ---------- CLOSE AFTER CLICK ---------- */

    nav.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    closeMobileMenu();

                }
            );

        });
}


/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

function closeMobileMenu() {

    const menuButton =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav");


    if (!menuButton || !nav) {
        return;
    }


    nav.classList.remove("open");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.innerHTML = "☰";
}


/* =========================================================
   ACTIVE PAGE
========================================================= */

function setActiveNavigation() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    const links =
        document.querySelectorAll(".nav a");


    links.forEach(link => {

        const href =
            link.getAttribute("href");


        if (!href) {
            return;
        }


        const linkPage =
            href
                .split("/")
                .pop()
                .toLowerCase();


        if (
            linkPage === currentPage ||
            (
                currentPage === "" &&
                linkPage === "index.html"
            )
        ) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });
}


/* =========================================================
   HEADER SHADOW ON SCROLL
========================================================= */

function setupHeaderScroll() {

    const header =
        document.querySelector(".site-header");


    if (!header) {
        return;
    }


    function updateHeader() {

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 8px 30px rgba(7, 26, 45, 0.08)";

        } else {

            header.style.boxShadow = "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader
    );


    updateHeader();
}


/* =========================================================
   YEAR
========================================================= */

function setCurrentYear() {

    document
        .querySelectorAll("[data-year]")
        .forEach(element => {

            element.textContent =
                new Date().getFullYear();

        });

}


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

function setupSmoothLinks() {

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });

}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupLanguageButtons();

        setupMobileMenu();

        setActiveNavigation();

        setupHeaderScroll();

        setCurrentYear();

        setupSmoothLinks();

        applyLanguage(
            currentLanguage
        );

    }
);