const readlineSync = require('readline-sync'),
      input = readlineSync.question,
      responses = [];

      console.log( "Welcome to Batman: Arkham Asylum!" );
      console.log( "What do you want to do?" );
      let option = readlineSync.question( "Options: look around, smack a prisoner, run away" );

      switch(option) {
        case "look around":
          console.log( "You see a bunch of angry prisoners and the Joker!" );
          // console.log("Are you ready to fight?");
          break;
        case "smack a prisioner":
          console.log( "Ouch! What did I ever do to you, man?" );
          break;
        case "run away":
          console.log( "Batman: \"Bats can't run.\"" );
          break;
        default:
          console.log( "A prisoner punches you in the face." );
          console.log( "Prisoner: \"Quit messin' around.\"" );
      }
