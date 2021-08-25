const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js: ', answer => {
  //TODO: Log answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question("What's your name? Nicknames are also acceptable: ", name => {
    console.log(`Hello ${name}`);
    rl.question("What's an activity you like doing? ", activity => {
      console.log(`${activity} is pretty cool!`);
      rl.question('What do you listen to while doing that? ', music => {
        console.log(`${music}? That's a good choice!`);
        rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.): ", meal => {
          console.log(`Mmm ${meal} is pretty good!`);
          rl.question("What's your favourite thing to eat for that meal? ", food => {
            console.log(`Wow! im getting hungry thinking about, ${food}! That was a good pick!`);
            rl.question('Which sport is your absolute favourite? ', sport => {
              console.log(`${sport} is a good sport! I like watching it during the olympics!`);
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', superpower => {
                console.log(`HAHA! ${superpower} too!`)
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});