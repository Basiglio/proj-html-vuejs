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
  },
  methods: {
  },
})
