var userFeed = new Instafeed({
    get: 'user',
    userId: '4189975435',
    accessToken: '4189975435.daeb333.44964ca12422486ba897bb21b61b2e4d',
    limit: 6,
    sortBy: 'random',
    resolution: 'standard_resolution',
    template: '<a class="l-fluidbox" data-aos="zoom-in-up" data-aos-offset="150" href="{{image}}"><img src="{{image}}" /></a>',
    after: function() {
      var images = $("#instafeed a").fluidbox();
          AOS.init();
      },
  });
  console.log(userFeed);
  userFeed.run();
  