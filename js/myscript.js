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
    navbarElements:
    [
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
  },
  methods: {
  },
})
