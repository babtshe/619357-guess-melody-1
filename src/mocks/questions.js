const settings = {
  gameTime: 7,
  errorCount: 4,
};

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/6/6d/Dj_Pandup_-_Violin_%28Klassik_Dupstep%29.ogg`,
        genre: `dubstep`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/45/FSsongmetal2-Vorbis-aoTuVb6.03-125kbps.ogg`,
        genre: `metal`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/d/d7/Caleb_Baker_-_Crush_Song.ogg`,
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/3/31/CELLO_ENCORES_JOHN_MICHEL-Goens_Scherzo.ogg`,
        genre: `classic`,
      },
    ]
  },
  {
    type: `artist`,
    audioSrc: `https://upload.wikimedia.org/wikipedia/commons/6/6d/Dj_Pandup_-_Violin_%28Klassik_Dupstep%29.ogg`,
    artist: `Chainsaw`,
    answers: [
      {
        imageSrc: `https://assets.flocktory.com/uploads/clients/2664/2d3cb02f-7cbe-4def-913a-30c54a9d94e1_trimmer.jpg`,
        name: `Trimmer`,
      },
      {
        imageSrc: `https://assets.flocktory.com/uploads/clients/2664/f0e61d87-5a3a-4012-ad1d-c6f8a3d7a05c_generator.jpg`,
        name: `Generator`,
      },
      {
        imageSrc: `https://assets.flocktory.com/uploads/clients/2664/03269c9e-efa9-4992-b36b-46915ec07c95_chainsaw.jpg`,
        name: `Chainsaw`,
      },
    ],
  }
];

export {settings, questions};
