require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Profile = require('./models/profile');

(async function() {

//   await User.deleteMany({});
//   const users = await User.create([
//     {name: 'Alex', sortOrder: 10},
//     {name: 'Seafood', sortOrder: 20},
//     {name: 'Mexican', sortOrder: 30},
//     {name: 'Italian', sortOrder: 40},
//     {name: 'Sides', sortOrder: 50},
//     {name: 'Desserts', sortOrder: 60},
//     {name: 'Drinks', sortOrder: 70},
//   ]);

  await Profile.deleteMany({});
  const profiles = await Profile.create([
    {name: 'Maxwell Knowles', artist: 'Sterling', genre: 'Jazz', 
    spotifyLink: 'https://open.spotify.com/artist/2p2YiVrDP0scQefeefDqCO?si=SqN6EMOsSC-GSSXFJPWkqw',
    img: 'https://res.cloudinary.com/glide/image/fetch/f_auto,w_975,h_975,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FFEr6MoVRCVxLM3jJHdZ9%2Fpub%2F7P128Fr6BzYk96wNwDLc.png'},

    {name: 'Alex Azevedo', artist: 'McLovin', genre: 'Soul', 
    spotifyLink: 'https://open.spotify.com/artist/2p2YiVrDP0scQefeefDqCO?si=SqN6EMOsSC-GSSXFJPWkqw',
    img: 'https://ca.slack-edge.com/T033HH2NCP7-U035QG691HN-9e90eb4f866e-192'},

    {name: 'Lucy Arnold', artist: 'Pimp PM', genre: 'Rock', 
    spotifyLink: 'https://open.spotify.com/artist/2p2YiVrDP0scQefeefDqCO?si=SqN6EMOsSC-GSSXFJPWkqw', 
    img: 'https://ca.slack-edge.com/T033HH2NCP7-U033LE5ECG2-eaa20fb11ff2-512'},

    {name: 'Cliff', artist: 'DBug King', genre: 'Pop', 
    spotifyLink: 'https://open.spotify.com/artist/2p2YiVrDP0scQefeefDqCO?si=SqN6EMOsSC-GSSXFJPWkqw', 
    img: 'https://ca.slack-edge.com/T033HH2NCP7-U033HHNTER3-87a560d61d4e-192'},

    {name: 'Courtney Rinden', artist: 'EX Xcullence', genre: 'Country', 
    spotifyLink: 'https://open.spotify.com/artist/2p2YiVrDP0scQefeefDqCO?si=SqN6EMOsSC-GSSXFJPWkqw', 
    img: 'https://ca.slack-edge.com/T033HH2NCP7-U0352RUPCN8-a02b38794168-192'},

    {name: 'AJ', artist: 'CodeDJ', genre: 'Techno', 
    spotifyLink: 'https://open.spotify.com/artist/2p2YiVrDP0scQefeefDqCO?si=SqN6EMOsSC-GSSXFJPWkqw', 
    img: 'https://ca.slack-edge.com/T033HH2NCP7-U0350M0QB6E-g97d96b21f21-192'}
  ]);

  console.log(profiles)

  process.exit();

})();
