var friendsAge = ['20', '22', '18', '19', '18', '25'];

for (var i = 0; i < friendsAge.length; i++){
    var friendAge = friendsAge[i];
    // console.log(friendAge);
    if(friendAge > 20){
        continue;
    }
    console.log(friendAge);
}