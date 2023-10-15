function solution(players, callings) {
    var temp_result = players;
    var map = new Map();
    for (i in players){
        map.set(players[i],i)
    }
    for (var name of callings){
        var num = map.get(name);
        map.set(temp_result[num-1],num);
        map.set(temp_result[num],num-1);
        [temp_result[num-1], temp_result[num]] = [temp_result[num], temp_result[num-1]];
    }
    var answer = temp_result;
    return answer;
}