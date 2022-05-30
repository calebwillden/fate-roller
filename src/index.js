async function init() {
  miro.board.ui.on('icon:click', async () => {
    roll()
  });
}

init();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function roll() {
  // Get the first selected object
  var selection = await miro.board.getSelection();
  var deckObject = selection[0];

  // Roll 4dF
  var resultNumber = getRandomInt(3) + getRandomInt(3) + getRandomInt(3) + getRandomInt(3) - 4;
  
  // Format the result
  var result = "<p>" + resultNumber + "</p>";

  // Toggle the color between yellow and light yellow
  if (deckObject.style.fillColor == "light_yellow")
  {
    deckObject.style.fillColor = "yellow";
  }
  else
  {
    deckObject.style.fillColor = "light_yellow";
  }
  
  // Update the sticky note
  deckObject.content = result;
  deckObject.sync();
}