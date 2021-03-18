$(function(){
    let Rectangle = {
        sidea: 5,
        sideb: 8,
        sidec: 10,
        aunit: 1000,
        bunit: 1000,
        cunit: 1000,
        type: 'cont',
        getCirc: function(){
            return (2*this.sidea) + (2*this.sideb);
        },
        getCont: function(){
            return this.sidea * this.sideb;
        },
        getVol: function(){
            return this.sidea * this.sideb * this.sidec;
        },
    }

    console.log(Rectangle.getCirc());
    console.log(Rectangle.getCont());
    console.log(Rectangle.getVol());

});