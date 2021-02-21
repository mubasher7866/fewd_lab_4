var hotel = {
    // Object properties
    name: 'Atlantis',
    rooms: 110,
    booked: 25,
    gym: true,
    freeBreakFast:true,
    roomTypes: ['double', 'twin', 'suite', 'king'],
    checkAvailablity: function() {
        return this.rooms - this.booked;
    }
};

var hotelName = hotel.name;
var roomsFree = hotel.checkAvailablity();

var hotelName = hotel['name', 'rooms'];

console.log(hotel['name'] + hotel['rooms']);