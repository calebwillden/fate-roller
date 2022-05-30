function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function roll() {
  // Roll 4dF
  var result = getRandomInt(3) + getRandomInt(3) + getRandomInt(3) + getRandomInt(3) - 4;

  // Create a Sticky Note to display the result.
  const stickyNote = await miro.board.createStickyNote({
    content: "" + result
  });
}

roll();
