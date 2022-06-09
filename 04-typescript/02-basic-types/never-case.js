{
    var greet = function (friend) {
        switch (friend) {
            case 'Serval':
                return "Hello, ".concat(friend, "!");
            case 'Caracal':
                return "Hi, ".concat(friend, "!");
            case 'Cheetah':
                return "Hiya, ".concat(friend, "!");
            default: {
                var check = friend;
            }
        }
    };
    console.log(greet('Serval'));
}
