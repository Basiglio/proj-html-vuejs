var app = new Vue({
  el: '#app',
  data: {

    // WEB URL
    // body
    getQuoteButtons: "https://avada.theme-fusion.com/construction/get-quote/",
    recentWorkButtons: "https://avada.theme-fusion.com/construction/work/",
    // footer
    learnMore: "https://avada.theme-fusion.com/construction/about/",

    // header navbar array
    navbarElements:[
      {
        title: "home",
        link: "#",
      },
      {
        title: "about",
        link: "https://avada.theme-fusion.com/construction/about/",
      },
      {
        title: "services",
        link: "https://avada.theme-fusion.com/construction/services/",
      },
      {
        title: "work",
        link: "https://avada.theme-fusion.com/construction/work/",
      },
      {
        title: "articles",
        link: "https://avada.theme-fusion.com/construction/construction-articles/",
      },
    ],
    // /header navbar array


    // MAIN
    // cards array section one
    cards: [
      {
        // cardfront
        icon: "far fa-building",
        title: "Buildings",
        paragraph: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        // cardback
        titleBack: "Artefully Crafted",
        paragraphBack: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        button: "https://avada.theme-fusion.com/construction/get-quote/",
      },
      {
        // cardfront
        icon: "fas fa-recycle",
        title: "Renovate",
        paragraph: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        // cardback
        titleBack: "freshly new",
        paragraphBack: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        button: "https://avada.theme-fusion.com/construction/get-quote/",
      },
      {
        // cardfront
        icon: "fas fa-home",
        title: "Construct",
        paragraph: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        // cardback
        titleBack: "perfect lines",
        paragraphBack: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        button: "https://avada.theme-fusion.com/construction/get-quote/",
      },
      {
        // cardfront
        icon: "fas fa-truck",
        title: "Planning",
        paragraph: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        // cardback
        titleBack: "exclusive",
        paragraphBack: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        button: "https://avada.theme-fusion.com/construction/get-quote/",
      },
    ],
    // counter section two
    counters: [
      {
        icon: "fas fa-suitcase",
        counter: 3534,
        title: "Planning Application",
      },
      {
        icon: "fas fa-building",
        counter: 896,
        title: "completed projects",
      },
      {
        icon: "fas fa-users",
        counter: 172,
        title: "trained professional",
      },
      {
        icon: "fas fa-globe",
        counter: 19,
        title: "international offices",
      },
    ],
    // section three
    recentWork: [
      {
        firstIcon: "fas fa-link",
        secondIcon: "fas fa-search",
        title: "Florida Healt Facility",
        subTitle: "Commercial",
        imgClassFront: "card card_1",
        classCardBack: "card_back card_back_1",
        // img is in css background
      },
      {
        firstIcon: "fas fa-link",
        secondIcon: "fas fa-search",
        title: "Maine Modernity",
        subTitle: "Residential",
        imgClassFront: "card card_2",
        classCardBack: "card_back card_back_2",
        // img is in css background
      },
      {
        firstIcon: "fas fa-link",
        secondIcon: "fas fa-search",
        title: "Exclusive Urban Living",
        subTitle: "Commercial",
        imgClassFront: "card card_3",
        classCardBack: "card_back card_back_3",
        // img is in css background
      },
    ],
    // section four
    coreValues: [
      {
        icon: "fas fa-home",
        iconId: "green",
        title: "Great Services",
        paragraph: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia",
      },
      {
        icon: "fas fa-home",
        iconId: "blue",
        title: "Highest Standards",
        paragraph: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia",
      },
      {
        icon: "fas fa-home",
        iconId: "orange",
        title: "Professional Team",
        paragraph: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia",
      },
      {
        icon: "fas fa-home",
        iconId: "lightgreen",
        title: "Creative Solutions",
        paragraph: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia",
      },
    ],
    // section five
    carouselIndex: 0,
    carousel: [
      {
        title: "Our Home Owners Say",
        img: "img/home-testimonial.webp",
        paragraph: "“Many novice real estate investors soon quit the profession and invest. When you invest in real estate, you often see a side of humanity that stocks, bonds, mutual funds, and saving money shelter you from.”",
        footer: "HARRY SMITH • NEW HOME OWNER",
      },
      {
        title: "Our Home Owners Say",
        img: "img/home-testimonial2.webp",
        paragraph: "“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”",
        footer: "JOHN DOE • PROPERTY INVESTOR",
      },
    ],
    // section six
    latestNewsTop: [
      {
        classContainer: "card card_1",
        classBackContainer: "card_back card_back_1",
        firstIcon: "fas fa-link",
        secondIcon: "fas fa-search",
        title: "Redeveloping Florida’s Remote Southern Coast",
        subTitle: "Architecture, Buildings, Construction, News",
      },
      {
        classContainer: "card card_2",
        classBackContainer: "card_back card_back_2",
        firstIcon: "fas fa-link",
        secondIcon: "fas fa-search",
        title: "How We Manage Large Construction Projects",
        subTitle: "Architecture, Buildings, Construction, News",
      },
      {
        classContainer: "card card_3",
        classBackContainer: "card_back card_back_3",
        firstIcon: "fas fa-link",
        secondIcon: "fas fa-search",
        title: "Future proofing a modern home",
        subTitle: "Architecture, Buildings, Construction, News",
      },
    ],
    latestNewsBottom: [
      {
        classContainer: "card_bottom card_bottom_1",
        title: "Redeveloping Florida’s Remote Southern Coast",
        paragraph: "Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed",
      },
      {
        classContainer: "card_bottom card_bottom_2",
        title: "How We Manage Large Construction Projects",
        paragraph: "Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed",
      },
      {
        classContainer: "card_bottom card_bottom_3",
        title: "Future proofing a modern home",
        paragraph: "Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed",
      },
    ],

    // /MAIN

    // FOOTER
    // FIRST COLUMN
    imgFooter: "img/footer-logo.webp",
    paragraphFooter: "We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.",
    linkFooter: "learnMore",
    textLinkFooter: "Learn More",

    // THIRD COLUMN CONTACTS
    infoContacts: [
      {
        icon: "fas fa-globe",
        // CORPORATE LOCATE
        info: "Corporate Location 1600 Amphitheatre Parkway London WC1 1BA"
      },
      {
        icon: "fas fa-home",
        // RESIDENTIAL LOCATE
        info: "Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA"
      },
      {
        icon: "fas fa-phone-alt",
        // TELEPHONE
        info: "1.800.458.556 / 1.800.532.2112"
      },
      {
        // EXCEPTION FOR EMAIL
        icon: "fas fa-envelope",
        // MAIL TAG A
        infoMailTo: "info@your-domain.com",
        // MAIL TO HREF
        mailTo: "mailto:info@your-domain.com"
      },
      {
        icon: "fas fa-clock",
        // OPENING TIME WEEK
        info: "Monday - Friday: 9:00 AM - 6:00 PM"
      },
      {
        icon: "fas fa-clock",
        // OPENING TIME HOLIDAYS
        info: "Saturday - Sunday: 9:00 AM - 12:00 PM"
      },
    ],


    // FOOTER BOTTOM
    copyrightFistPart: "COPYRIGHT 2021 AVADA THEME BY",
    link: "#",
    linkText: "THEME FUSION",
    copyrightSecondPart: "|   ALL RIGHTS RESERVED   |   POWERED BY",
    poweredByLink: "https://github.com/Basiglio",
    poweredByName: "emilio furnari",

    socials: [
      {
        // FACEBOOK
        icon: "fab fa-facebook-f",
        link: "https://it-it.facebook.com/",
      },
      {
        // TWITTER
        icon: "fab fa-twitter",
        link: "https://twitter.com/login?lang=it",
      },
      {
        // YOUTUBE
        icon: "fab fa-youtube",
        link: "https://www.youtube.com/watch?v=L4fyxCdgcV0",
      },
      {
        // INSTAGRAM
        icon: "fab fa-instagram",
        link: "https://www.instagram.com/",
      },
    ],
    // /FOOTER
  },
  mounted: function () {
    setInterval(
     () => {
       // OGNI SECONDO AUMENTA DI UNO L'INDICE
      this.carouselIndex++;
      // SE IL NUMERO DELL'INDICE è UGUALE ALL'ULTIMO INDICE IN ARRAY
      if (this.carouselIndex == this.carousel.length) {
        // IMPOSTA L'INDICE A ZERO
        this.carouselIndex = 0;
      };
    }, 3000);
  },
  methods: {
  },
})
