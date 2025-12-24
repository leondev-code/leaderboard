const bc=new BroadcastChannel('remote_page');
let players = [];
bc.onmessage = (event) => {
  const { type, payload } = event.data;
  if (type=='ADD_NAME') {
    players.push({name:payload, score:0});
  } else if (type=='ADD_POINT') {
        const i=players.findIndex(u => u.name == payload);
        players[i]={name:players[i].name, score:players[i].score+1};
  } else {
    const i=players.findIndex(u => u.name == payload);
        players[i]={name:players[i].name, score:players[i].score-1};
  }
  players.sort((a, b) => b.score - a.score);
  for (let i=0;i<10;i++) {
    document.getElementById('name'+(i+1)).innerHTML=players[i].name;
    document.getElementById('score'+(i+1)).innerHTML=players[i].score;
  }

};