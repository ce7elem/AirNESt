
function display (data){
  let container = document.getElementById('sql_ResultGames');
  container.innerHTML += `<div class="column is-one-third" href="/index" onclick="document.location='/game?`+data.path+`'">
                            <div class="card large has-background-grey-lighter">
                              <div class="card-image">
                                <figure class="image">
                                  <img src="https://s1.qwant.com/thumbr/0x380/b/4/5c5a9fe5586e53030e330e81e875a927c361fcebb176db5f80ad5903bcc98f/post-441646-11490865851.jpg?u=https%3A%2F%2Fmmxymtsl.files.wordpress.com%2F2011%2F08%2Fpost-441646-11490865851.jpg&q=0&b=1&p=0&a=1" style="width: 100%; height: 350px;" alt="Image">
                                </figure>
                              </div>
                              <div class="card-content">
                                <div class="media">
                                  <div class="media-left">
                                    <figure class="image is-96x96">
                                      <img src="http://global-img.gamergen.com/capcom-logo-large_0190000000893704.jpg">
                                    </figure>
                                  </div>
                                  <div class="media-content">
                                    <p class="title is-4 no-padding">`+data.name+`</p>
                                    <p><span class="title is-6"><a href="https://en.wikipedia.org/wiki/Platform_game">#Plateform</a> <a href="https://en.wikipedia.org/wiki/Action_game"> #Action</a></span></p>
                                    <p class="subtitle is-6">Notation ici</p>
                                  </div>
                                </div>
                                <div class="content">
                                  <div>`+data.comment+`</div>
                                  <div class="background-icon"><span class="icon-twitter"></span></div>
                                </div>
                              </div>
                            </div>
                          </div>`
}

function notif (data){
  console.log(data);
}
