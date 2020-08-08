var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }];

for (var i = 0; i < library.length; i++){
  var book = " " + library[i].author + "'" + " by " + library[i].title;
  if (library[i].readingStatus){
    console.log("Aready read " + book);
  }else{
    console.log("You still need to read " + book);
  }
}