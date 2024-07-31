$(document).ready(function() {
  $(".slide-one-item").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      nav: true,
      dots: true
  });
});
$(document).ready(function() {
  $(".slide-one-item.home-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
  });
});

$(document).ready(function() {
  const sportsData = {
      football: {
          players: "11 players per team",
          strategy: "Score goals by getting the ball into the opponent's net",
          teamGame: "Yes",
          rules: "FIFA rules",
          facts: "First played in 1863, World Cup held every 4 years",
          statistics: "Various records and statistics",
          countries: "Played worldwide",
          image: "https://via.placeholder.com/150"
      },
      judo: {
          players: "Two players",
          strategy: "Throw or takedown opponent to the ground",
          teamGame: "No",
          rules: "IJF rules",
          facts: "Originated in Japan, Olympic sport",
          statistics: "Various records and statistics",
          countries: "Played worldwide",
          image: "https://via.placeholder.com/150"
      },
      tennis: {
          players: "One or two players per side",
          strategy: "Hit the ball over the net into the opponent's court",
          teamGame: "Can be played as singles or doubles",
          rules: "ITF rules",
          facts: "Originated in France, Grand Slam tournaments",
          statistics: "Various records and statistics",
          countries: "Played worldwide",
          image: "https://via.placeholder.com/150"
      }
      // Add more sports data here
  };

  $('#sports-list a').on('click', function(e) {
      e.preventDefault();
      const sport = $(this).data('sport');
      const data = sportsData[sport];
      
      if (data) {
          $('#sport-info').html(`
              <h2>${sport.charAt(0).toUpperCase() + sport.slice(1)}</h2>
              <img src="${data.image}" class="img-fluid" alt="${sport}">
              <p><strong>Number of Players:</strong> ${data.players}</p>
              <p><strong>Strategy:</strong> ${data.strategy}</p>
              <p><strong>Team Game:</strong> ${data.teamGame}</p>
              <p><strong>Rules:</strong> ${data.rules}</p>
              <p><strong>Facts:</strong> ${data.facts}</p>
              <p><strong>Statistics:</strong> ${data.statistics}</p>
              <p><strong>Countries:</strong> ${data.countries}</p>
          `);
      }
  });

  $('#guestbook-form').on('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your feedback!');
      this.reset();
  });
});
