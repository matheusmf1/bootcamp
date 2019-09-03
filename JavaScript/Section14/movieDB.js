var movies = [
  {
    title:"Star Wars - The Force Awakens",
    rating:8.0,
    hasWatched:true
  },
  {
    title:"Star Wars - The Last Jedi",
    rating:7.5,
   hasWatched:true
  },
  {
    title:"Frozen",
    rating:8.0,
    hasWatched:true
  },
  {
    title:"Spider-Man: Into the Spider-Verse",
    rating:8.0,
    hasWatched:false
  }
];

movies.forEach( function( m ){ 
  if (m.hasWatched)
    var result = "You have seen " + m.title + "- " + m.rating + " stars"; 
  else
    result = "You haven't seen " + m.title + "- " + m.rating + " stars";
  console.log(result);
 });