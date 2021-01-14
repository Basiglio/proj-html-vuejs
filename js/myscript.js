var app = new Vue({
  el: '#app',
  data: {
    // WEB URL
    // header navbar
    home: "#",
    about: "https://avada.theme-fusion.com/construction/about/",
    services: "https://avada.theme-fusion.com/construction/services/",
    work: "https://avada.theme-fusion.com/construction/work/",
    articles: "https://avada.theme-fusion.com/construction/construction-articles/",
    // body
    getQuoteButtons: "https://avada.theme-fusion.com/construction/get-quote/",
    recentWorkButtons: "https://avada.theme-fusion.com/construction/work/",
    // footer
    learnMore: "https://avada.theme-fusion.com/construction/about/",



    // card array section one
    cards:
    [
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
  },
})
