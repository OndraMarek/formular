$(function(){
    let Rectangle = {
        sidea: 5,
        sideb: 8,
        sidec: 10,
        unit: 'm',
        type: 'cont',
        getCirc: function(){
            return (2*this.sidea + 2*this.sideb);
        },
        getCont: function(){
            return (this.sidea * this.sideb);
        },
        getVol: function(){
            return (this.sidea * this.sideb * this.sidec);
        },
        setUnits: function(Unit){
            const Units = ["m","dm","cm","mm"];
            this.unit = (10 ** Units.indexOf(Unit));
        }, 
    }

    console.log(Rectangle.getCirc());
    console.log(Rectangle.getCont());
    console.log(Rectangle.getVol());

    $('#tvol').on('click', function(){
        if (this.checked){
            $('#sidec').prop('disabled', false);
        }
    });
    $('#tcirc').on('click', function(){
        if (this.checked){
            $('#sidec').prop('disabled', true);
        }
    });
    $('#tcont').on('click', function(){
        if (this.checked){
            $('#sidec').prop('disabled', true);
        }
    });

    $("#calc").on("click",function(){
        Rectangle.type = $('input[name=type]:checked').val();
        Rectangle.sidea = parseInt($('#sidea').val());
        Rectangle.sideb = parseInt($('#sideb').val());
        Rectangle.sidec = parseInt($('#sidec').val());
        Rectangle.unit = $('#unit').val();
        let result;
        if(Rectangle.type == 'circ') result = `Obvod obdelníku je: ${Rectangle.getCirc()} ${$('#unit').val()}`;
        if(Rectangle.type == 'cont') result = `Obsah obdelníku je: ${Rectangle.getCont()} ${$('#unit').val()}`;
        if(Rectangle.type == 'vol') result = `Objem kvádru je: ${Rectangle.getVol()} ${$('#unit').val()}`;
        $("#result").html(result);
    })

});