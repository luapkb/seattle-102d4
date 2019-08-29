
function createtimegreating() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!'
    } else {
        greeting = 'Welcome!';
    }
    return greeting;
}
function showOrder() {
    var order = prompt('what would you like to order');
    var item, quantity;
    var items = '';

    while (order !== 'house' && order !== 'hotel') {
        order = prompt('please enter house or hotel');
    }
    //ask quantity
    quantity = prompt('how many would you like');
    quantity = Number(quantity);

    //validate quantity
    while (isNaN(quantity)) {
        quantity = prompt('please enter a numaric value..');
        quantity = Number(quantity);
    }

    if (order === 'hotel') {
        item ='hotelphoto'
        // item = '<img src="images/hotel.png">';
    } else if (order === 'house') {
        item = 'housephot0'
        // item = '<img src="images/house.png">';

        for (var i = 0; i < quantity; i++) {
            items = items + item;
        }
        return items;
    }



}