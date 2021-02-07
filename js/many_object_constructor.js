function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailablity = function(){
        return this.rooms - this.booked;
    };
}

var AtlantisHotel = new Hotel('Atlantis', 128, 25);
var lemonHotel = new Hotel('Lemon', 76, 14 )

console.log(AtlantisHotel, lemonHotel);