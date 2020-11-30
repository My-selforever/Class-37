class GameStates
{
    constructor()
    {

    }

    readState()
    {
        var games = database.ref('GameState')
        games.on("value",function(data)
        {
            state = data.val();
        })
    }

    updateState()
    {
        database.ref('/').update(
        {
           'GameState':1
        });
    }

    check()
    {
       if(state===0)
       {
           player = new Player();
           player.Read();
           form = new Form();
           form.display();
       }
    }

    gamePlay()
    {
        form.invisible();
        Player.fetchD();
        console.log(everyone)
        for(var p in everyone)
        {
            console.log(p)
        }
    }
}