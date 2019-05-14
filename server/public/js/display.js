
function display (data){
  for (let i = 0; i < data.length; i++) {

    let container = document.getElementById('sql_ResultGames')
    // if ( ! i%3 ) {
    //   container = $('<div>').addClass('row columns');
    // } else {
    //   container = $('')
    // }

    container.innerHTML += `<div class="column is-one-third" href="/index" onclick="document.location='/game?`+data[i].file_name+`'">
                              <div class="card large has-background-grey-lighter">
                                <div class="card-image">
                                  <figure class="image is-square">
                                    <img style="max-height:100%;" src="images/games/`+data[i].file_name+`.png">
                                  </figure>
                                </div>
                                <div class="card-content">
                                  <div class="media">
                                    <div class="media-left">
                                      <figure class="image is-96x96">
                                        <img style="max-height:100%;" src="images/games/`+data[i].editor+`">
                                      </figure>
                                    </div>
                                    <div class="media-content">
                                      <p class="title is-4 no-padding">`+data[i].name+`</p>
                                      <p><span class="title is-6">`+data[i].category+`</span></p>
                                      <p class="subtitle is-6" style="color: red;">
                                        <i class="nes-icon heart is-full is-small" id="coeur_page"></i>
                                        `+data[i].like_count+`
                                      </p>
                                    </div>
                                  </div>
                                  <div class="content">
                                    <div>`+data[i].comment+`</div>
                                  </div>
                                </div>
                              </div>
                            </div>`

  }
}

function notif (data){
  console.log(data);
}
