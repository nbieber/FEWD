var favoriteColors = ["red", "orange", "yellow", "aubergine"];

// favoriteColors[3]
// favoriteColors.length

for(var i = 0; i < favoriteColors.length; i++)
{
    var suffix = 'th';
    if((i+1) % 10 === 1 && (i+1) !== 11)
    {
        suffix = 'st';
    }
    else if((i+1) % 10 === 2 && (i+1) !== 12)
    {
        suffix = 'nd';
    }
    else if((i+1) % 10 === 3 && (i+1) !== 13)
    {
        suffix = 'rd';
    }
    console.log("My " + (i+1) + suffix + " favorite color is " + favoriteColors[i]);
}

var favoriteShows = ["Silicon Valley", "Heroes Reborn", "Breaking Bad"];
for(var i = 0; i < favoriteShows.length; i++)
{
    console.log(favoriteShows[i]);
}