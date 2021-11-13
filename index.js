let firstAnswer  = window.prompt('Do you head left or right?')

if(firstAnswer === 'left') {
    let secondAnswer = window.prompt(`you come accross a stray cat. It scampers off down a small hole, 
just large enough for you to crawl through. Do you follow it, or stay on your path?` )

if(secondAnswer === 'follow', 'follow it') {
    let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, nestled in a fort of warm blankets
and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert
the world to this magical safe haven. What do you do? Stay or spread the word?`)

if(thirdAnswer === 'stay') {
    let fourthAnswer = window.alert(`You live happily amongst the cat colony for the rest of your days!`) 
}
    else if(thirdAnswer === 'spread the word') {
    let fourthAnswer = window.alert(`After leaving the cat colony, you are never able to find it again;
without proof, no one believes your story, which into legend nonetheless.`)
}}

else if(secondAnswer === 'stay on your path') {
    let thirdAnswer = window.prompt(`You come across a chamber that reaches upward to a shining light above.
There is a long winding staircase, aand a much quicker, but rickety-looking ladder that leads up towards the light.
Which do you take? Ladder or Staircase?`)
  
if(thirdAnswer === 'ladder') {
    let fourthAnswer = window.alert(`After ascending a few feet up the ladder, one of it's rungs snaps,
and you comedically fall through each of the rungs below. Sheepish, you return home.`)
}
else if(thirdAnswer === 'staircase') {
    let fourthAnswer = window.alert(`After ascending the staircase, you discover a shiny blue stone,
which you take home and cheerish forever.`)
}}}

// end of left branch. Start below for right branch answers.

else if(firstAnswer === 'right') {
     let secondAnswer = window.prompt(`you come across a snoring dragon.
on the other side of him, you see a shiny chest of treasure. Another path would
lead you away from the dragon altogether. Which path do you take? The path past the dragon? or away from the dragon?`)

    if(secondAnswer === 'past the dragon') {
        let thirdAnswer = window.prompt(`The Dragon wakes up and sits upright!
You only have a moment to respond, do you stay or run?`)

if(thirdAnswer === 'stay') {
    let fourthAnswer = window.alert(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)
}
 else if(thirdAnswer === 'run') {
     let fourthAnswer = window.alert(`Quickly, you run back to the cave entrance. Sheepish, you return home.`)
 }}

    else if(secondAnswer === 'away from the dragon') {
    let thirdAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower.
It is so beautiful that you decide you must either draw it or pick it. Which do you do?`)
    
if(thirdAnswer === 'draw it') {
    let fourthAnswer = window.alert(`You draw the flower, capturing only a fraction of it's beauty with your quil.
You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and
family, recounting the story of your days as a sorcerer witht the aid of the sketch.`)
}
else if(thirdAnswer === 'pick it') {
   let fourthAnswer = window.alert(`You pick the flower and bring it home, and all marvel at it's brilliance.
However, over time it fades abd eventually crumbles to dust.`)

}}}