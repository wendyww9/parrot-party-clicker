// Add javascript code to Party Parrot Clicker such that:
// 1. A click on the Party Parrot increases the counter by 1
let clickCountValue = 0;
const clickHeader = document.querySelector('h1');
const parrot = document.querySelector('img');

const clickCount = () => {
  clickCountValue = parseInt(clickHeader.textContent.split(': ')[1], 10);

  parrot.addEventListener('click', () => {
    clickCountValue += 1;
    clickHeader.textContent = `Clicks: ${clickCountValue}`;
  });
};

// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
const addReset = () => {
  const button = document.createElement('Button');
  button.textContent = 'Reset';
  document.body.appendChild(button);

  button.addEventListener('click', () => {
    clickCountValue = 0;
    clickHeader.textContent = `Clicks: ${clickCountValue}`;
    parrot.style.transform = 'rotate(0)';
  });
};

// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)
const clickEffect = () => {
  parrot.addEventListener('click', () => {
    clickCountValue = parseInt(clickHeader.textContent.split(': ')[1], 10);
    if (clickCountValue === 10) {
      parrot.style.transform = 'scale(1.5)';
    } else if (clickCountValue === 20) {
      parrot.style.transform = 'scale(2.5)';
    } else if (clickCountValue === 30) {
      parrot.style.transform = 'rotate(180deg)';
    }
  });
};
// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
const effectBoxOne = () => {
  const boxOne = document.getElementById('box-one');
  boxOne.addEventListener('mouseover', () => {
    boxOne.style.backgroundColor = 'pink';
  });

  boxOne.addEventListener('mouseout', () => {
    boxOne.style.backgroundColor = 'white';
  });
};
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
const effectBoxTwo = () => {
  const boxTwo = document.getElementById('box-two');
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      boxTwo.textContent = '🍮';
    }
  });
  document.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
      boxTwo.textContent = 'press space';
    }
  });
};
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
const effectBoxThree = () => {
  const boxThree = document.getElementById('box-three');

  boxThree.addEventListener('click', () => {
    if (parrot.style.display === 'none') {
      parrot.style.display = 'block';
    } else {
      parrot.style.display = 'none';
    }
  });
};
// Box 4: When Box 4 is double clicked, an alert shows up
const effectBoxFour = () => {
  const boxFour = document.getElementById('box-four');
  boxFour.addEventListener('dblclick', () => {
    alert('Box 4 double-clicked! 🎉');
  });
};
document.addEventListener('DOMContentLoaded', () => {
  clickCount();
  addReset();
  clickEffect();
  effectBoxOne();
  effectBoxTwo();
  document.getElementById('box-two').focus();
  effectBoxThree();
  effectBoxFour();
});