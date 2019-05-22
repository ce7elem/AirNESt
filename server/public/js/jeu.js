   let widget = null;
    let song_indexes = new Array();
    let current_index = 0;

    $(function() {
      let iframe = document.querySelector('#soundcloud_player iframe');
      widget = SC.Widget(iframe);
    });


     let nes;
          $(function() {
            window.romSelect = "roms/" + window.location.search.substr(1) + ".nes";
            nes = new JSNES({
              'ui': $('#emulator').JSNESUI({
                "Homebrew": [
                  ['Concentration Room', 'roms/croom/croom.nes'],
                  ['LJ65', 'roms/lj65/lj65.nes'],
                ]
              })
            }, function() {
              setTimeout(function() {
                $("#zoom").trigger('click');
                $("#zoom").trigger('click');
              }, 3000);
            });
          });



           let qrcode = new QRCode("qrcode", {
      text: "oui",
      width: 100,
      height: 100,
      colorDark: "#000000",
      colorLight: "#ffffff",
      // correctLevel : QRCode.CorrectLevel.H
    });


           let like_page = false;
    let nombre_like = document.getElementById('nombre_like');
    likes = nombre_like.innerHTML;
    likes = parseInt(likes);

    let like_jeu = false;
    let coeur_jeu = document.getElementById('coeur_jeu');

    coeur_jeu.addEventListener('click', function() {
      if (like_jeu == false) {
        coeur_jeu.setAttribute('class', 'nes-icon is-medium heart');
        like_jeu = true;
        likes += 1;
      } else if (like_jeu == true) {
        coeur_jeu.setAttribute('class', 'nes-icon is-medium heart is-empty');
        like_jeu = false;
        likes -= 1;
      }

      nombre_like.innerHTML = likes;
    });

    let bulle = document.getElementById('bulle');
    let nes_logo = document.getElementById('nes_logo');

    nes_logo.addEventListener('mouseover', function() {
      bulle.setAttribute('style', '  z-index: 8; background-color: white; color: black; visibility: visible; opacity : 0.8; ');
    });

    nes_logo.addEventListener('mouseout', function() {
      bulle.setAttribute('style', '  z-index: 8; background-color: white; visibility: hidden; ');
    });