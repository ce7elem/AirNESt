
function display (data){
  let container = document.getElementById('sql_ResultGames');
  container.innerHTML += `
                      <div class="game">
                        <p>Name : <span>`+ data.name +`</span></p>
                        <p>Editeur : <span>`+ data.editor +`</span></p>
                        <p>Date : <span>`+ data.date_sortie +`</span></p>
                        <p>Comment : <span>`+ data.comment +`</span></p>
                        <p>Categorie : <span>`+ data.category +`</span></p>
                      </div>`
}

function notif (data){
  console.log(data);
}
