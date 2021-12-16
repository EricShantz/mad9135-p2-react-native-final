let data = [
  {
    name: 'Never Have I Ever',
    description:
      "Each player will raise all the fingers on one of their hands. One player at a time, each person will say an action they've never done. If you have done that action in the past you must put 1 finger down. The first person to put all their fingers down loses!",
    requirements: 'None',
    id: 1,
  },
  {
    name: '2 Truths and a Lie',
    description:
      "Each player will come up with 2 things about themselves that are true, and 1 thing that is false. Go around the circle and tell your 3 statements to the room. All the other players have 3 guesses to determine which are the 2 truths and which is the lie. If the group guesses correctly, you're out!",
    requirements: 'None',
    id: 2,
  },
  {
    name: 'Charades',
    description:
      'Think of an action or thing that you will act out for the group. If they can guess what it is you win!',
    requirements: 'None',
    id: 3,
  },
  {
    name: 'The Floor is Lava',
    description:
      'THE FLOOR IS LAVA! Everyone in the room has 5 seconds to get on top of something. Anyone who touches the floor for the rest of the game loses!',
    requirements: 'None',
    id: 4,
  },
  {
    name: 'Man Hunt',
    description:
      "Select a person to be 'it' and count to 30 seconds, everyone else hides! The last person to be found is the winner. No snitching!",
    requirements: 'None',
    id: 5,
  },
  {
    name: 'Mafia',
    description:
      'Simply put, the objective of the game is for the mafia to “kill off” civilians until they are the majority, or for the civilians to kill off the entire mafia. When one of those two things happens, the game is over.',
    requirements: 'Playing Cards',
    id: 6,
  },
  {
    name: 'Musical Chairs',
    description:
      'Select 1 player to be the conductor. They will play a song of their choice for a few seconds then stop. When the music ends every player must try to find a place to sit. There should be 1 fewer chairs than players. The last person sitting wins!',
    requirements: 'Chairs and Music',
    id: 7,
  },
  {
    name: 'Telephone',
    description:
      "Everybody line up! the first player will whisper something into the next player's ear, so on and so forth until the sentence reaches the end of the line. Have the second and last person say the sentence they heard out loud! Works best in groups of 5+ ",
    requirements: 'None',
    id: 8,
  },
  {
    name: 'Who Am I?',
    description:
      'Each person writes the name of a famous person on paper, puts it into a hat, then everyone will draw a name and hold it to their forehead for everyone but them to see. Players then try to guess which famous person or animal they are by only asking “Yes” or “No” questions to gain clues about the name that is on their forehead. ',
    requirements: 'None',
    id: 9,
  },
  {
    name: 'Marry, Shag, Kill',
    description:
      'List 3 people you all know. Go around the group and everyone say who they would marry, who they would shag, and who they would kill if they had to!',
    requirements: 'None',
    id: 10,
  },
  {
    name: 'Duck Duck Goose',
    description:
      "In this game, players sit down or stand in a circle facing each other. One person is IT and walks around the outside of the circle. As they walk around, they tap the player's heads and say whether they are a Duck or a Goose. Once someone is the Goose they get up and try to chase IT around the circle. The goal is for the Goose to catch IT before they are able sit/stand in the Goose's spot. If the goose is not able to do this, they become IT for the next round and play continues.",
    requirements: 'None',
    id: 11,
  },
  {
    name: 'Go Fish',
    description:
      'Simply put, the objective of the game is for the mafia to “kill off” civilians until they are the majority, or for the civilians to kill off the entire mafia. When one of those two things happens, the game is over.',
    requirements: 'Playing Cards',
    id: 12,
  },
  {
    name: 'Jenga',
    description:
      'Players take turns to remove a block from a tower and balance it on top, creating a taller and increasingly unstable structure as the game progresses. If you cause the tower to fall over, you lose!',
    requirements: 'Jenga Game',
    id: 13,
  },
  {
    name: 'Scrabble',
    description:
      'Scrabble is a word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board divided into a 15×15 grid of squares.',
    requirements: 'Scrabble Board',
    id: 14,
  },
  {
    name: 'Name That Song',
    description:
      'A player will choose a song and play it for 2 seconds. The other players have to try to guess the song. Repeat once the song has been guessed!',
    requirements: 'Mobile Device',
    id: 15,
  },
  {
    name: 'Monopoly',
    description:
      'Monopoly, real-estate board game for two to eight players, in which the player’s goal is to remain financially solvent while forcing opponents into bankruptcy by buying and developing pieces of property.',
    requirements: 'Monopoly Board',
    id: 16,
  },
  {
    name: 'Uno',
    description:
      'UNO is a fast-paced card game played similar to Crazy 8s that includes special cards that ramp up the fun. The goal of UNO is to be the first person to play the very last card in your hand.',
    requirements: 'Uno Cards',
    id: 17,
  },
  {
    name: 'Pictionary',
    description:
      'One player will choose something to draw on the paper as the other players try to guess what it is! The first person to get it right wins. Rinse and Repeat with the next player',
    requirements: 'Paper and Pencil',
    id: 18,
  },
  {
    name: 'Ninja',
    description:
      'Players take turns attacking their opponents by swiping at their arms and hands, and must freeze in place once their attack is finished. Defending players may dodge if they think they will be hit, and must also freeze once the attack is finished.',
    requirements: 'None',
    id: 19,
  },
  {
    name: 'Secret Handshake',
    description:
      'Choose another player to create a secret handshake with. Each of you will take turns adding another step to the handshake. The first person to forget or miss a step loses!',
    requirements: 'None',
    id: 20,
  },
  {
    name: 'Cards Against Humanity',
    requirements: 'Cards Against Humanity Game',
    description:
      'Cards Against Humanity is a game. It is made of cards. You put the cards together to make jokes. It’s pretty stupid.',
    id: 21,
  },
  {
    name: 'Truth or Dare',
    description:
      "Players take turns asking one another “truth or dare?” If they choose truth, they have to answer a question of the asker's choosing. If they choose dare, the asker dares them to do something rather than make a confession.",
    requirements: 'None',
    id: 22,
  },
  {
    name: '20 Questions',
    description:
      'The oldest player is IT and goes first. Have them think of a person, place or thing, without saying it aloud. Each other player can ask up to 20 yes or no questions to try and guess the answer! After asking 20 questions or guessing the correct answer (whichever comes first, switch turns at being IT.',
    requirements: 'None',
    id: 23,
  },
  {
    name: 'Human Knot',
    description:
      'Players stand in a circle and reach out to shake hands with other players, with each hand connecting to a different person, creating a “human knot.” Then the players attempt to unthread their bodies without letting go of each other’s hands.',
    requirements: 'None',
    id: 24,
  },
  {
    name: 'Simon Says',
    description:
      'One person is the leader and calls out the actions. Everyone else must follow the leader and do the action, but only when Simon says. For example, Simon says, touch your toes.',
    requirements: 'None',
    id: 25,
  },
];

export default data;
