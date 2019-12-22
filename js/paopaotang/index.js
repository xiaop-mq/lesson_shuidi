// Player类，每个都可以实例化
function Player(name,teamColor){
    this.enemies=[];//敌人
    this.partners=[];//队友
    this.name=name;
    this.teamColor=teamColor;
    this.state='live';
}
Player.prototype.win=function(){
    //kill all
    console.log(`${this.name} win`);
}
Player.prototype.lose=function(){
    console.log(`${this.name} lose`);
}
Player.prototype.die=function(){
    console.log(`${this.name} die`);
    this.state='die';
    let all_dead=true;//假设一开始都死了，这样就可以少定义一个
    for(var i=0,partner;partner=this.partners[i++];){
        // 统计队员die的数量，与成员总数作比较
        if(partner.state==='live')
        {
            all_dead=false;
            break;
        }
    }
    if(all_dead){
        for(var i=0,partner;partner=this.partners[i++];)
        {
            partner.lose();//每个队友都提醒，输了
        }
        for(var i=0,enemy;enemy=this.enemies[i++];)
        {
            enemy.win();
        }
    }
}
//组队，开启游戏。队内成员teamColor一样
// 要生成玩家，玩家由工厂类来负责
var players=[];
var playerFactory=function(name,teamColor){
    var newPlayer=new Player(name,teamColor);//实例化
    for(var i=0,player;player=players[i++];)
    {
        if(player.teamColor===newPlayer.teamColor){
            player.partners.push(newPlayer);
            newPlayer.partners.push(player);
        }else{
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
}
var player1=playerFactory('小刚','red');
var player2=playerFactory('小明','red');
var player3=playerFactory('小红','red');
var player4=playerFactory('小强','red');
// 队友是谁，敌人是谁？由工厂分配 
var player5=playerFactory('胡强','blue');
var player6=playerFactory('胡头','blue');
var player7=playerFactory('胡草','blue');
var player8=playerFactory('胡乱','blue');
// console.log(player1.partners,player1.enemies);
player1.die();
player2.die();
player3.die();
player4.die();

// Player类，每个都可以实例化
function Player(name,teamColor){
    this.enemies=[];//敌人
    this.partners=[];//队友
    this.name=name;
    this.teamColor=teamColor;
    this.state='live';
}
Player.prototype.win=function(){
    //kill all
    console.log(`${this.name} win`);
}
Player.prototype.lose=function(){
    console.log(`${this.name} lose`);
}
Player.prototype.die=function(){
    console.log(`${this.name} die`);
    this.state='die';
    let all_dead=true;//假设一开始都死了，这样就可以少定义一个
    for(var i=0,partner;partner=this.partners[i++];){
        // 统计队员die的数量，与成员总数作比较
        if(partner.state==='live')
        {
            all_dead=false;
            break;
        }
    }
    if(all_dead){
        for(var i=0,partner;partner=this.partners[i++];)
        {
            partner.lose();//每个队友都提醒，输了
        }
        for(var i=0,enemy;enemy=this.enemies[i++];)
        {
            enemy.win();
        }
    }
}
//组队，开启游戏。队内成员teamColor一样
// 要生成玩家，玩家由工厂类来负责
var players=[];
var playerFactory=function(name,teamColor){
    var newPlayer=new Player(name,teamColor);//实例化
    for(var i=0,player;player=players[i++];)
    {
        if(player.teamColor===newPlayer.teamColor){
            player.partners.push(newPlayer);
            newPlayer.partners.push(player);
        }else{
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
}
var player1=playerFactory('小刚','red');
var player2=playerFactory('小明','red');
var player3=playerFactory('小红','red');
var player4=playerFactory('小强','red');
// 队友是谁，敌人是谁？由工厂分配 
var player5=playerFactory('胡强','blue');
var player6=playerFactory('胡头','blue');
var player7=playerFactory('胡草','blue');
var player8=playerFactory('胡乱','blue');
// console.log(player1.partners,player1.enemies);
player1.die();
player2.die();
player3.die();
player4.die();