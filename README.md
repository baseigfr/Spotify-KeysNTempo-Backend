### Project Link

https://spotify-keysntempo-frontend.herokuapp.com/

### What is this?

This application makes use of Spotify API's hidden metrics to produce the key and tempo of songs on your playlists and songs you look up. It's main purpose is to provide musicians or people interested in music with some cool metrics to cover or research their favorite artists. You can search any song on Spotify, click analyze track, and it will show the key and tempo of the song you searched. Alternatively, it pulls all of your playlists after you authorize and gives you the ability to use "Analyze Playlist" to return Song Name, Artist Name, Key, and Tempo of every song in whatever playlist you click! 

### Technologies

This backend is just made on Node.js, Express.js. It's relatively straightforward in my opinion.

### What you need to download, edit, and run the app yourself

This backend uses these npm modules: mongoDB, mongoose, dotenv, express, request, cookie-parser, cors, and body-parser. 
You will need to run 'npm i <npm module> to run this backend on your machine.
 

### Unsolved Problems (Bugs)

As it stands currently, the backend doesn't use sessions or anything to keep your unique view of the application. If someone else is on the application creating "Saved Songs" it will show them deleting and adding songs even while you're on the site. I thought this feature was sort of cool but was not meant to be in the final application. It would be nice to get saved songs tied to the user's display name on Spotify that was passed along with the token. I don't necessarily know of how to achieve this myself but I think with more time I could figure it out. 
