var userFeed = new Instafeed({
    get: 'user',
    userId: '1488069419',
    accessToken: '1488069419.b773045.a708a07d1c4c40a981b955dae64e4e81',
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
  