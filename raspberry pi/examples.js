$(document).ready(function() 
{
    $('.read').on("click",function(e)
    {
		var cajaActual = $(e.currentTarget)[0];
		var btnRead = $(e.currentTarget)[0];
		var btnClose = $(btnRead).siblings($("div.close"));
		cajaActual = $(cajaActual).parent().parent();
		/*TODO: change if to search by id*/
		if ($(cajaActual).css("margin-left") == "300px") {
			$(cajaActual).css("margin-left","1px")
		} else if ($(cajaActual).css("margin-left") == "600px") {
			$(cajaActual).css("margin-left","2px")
		}
		
		//for all the other box will change the visibility when the actual box is clicked
		var othersBox = $(cajaActual).siblings($("div#card"));
		$.each(othersBox, function(i, elem) {
			$(elem).css("display", "none")
		});
		
		$(cajaActual).children($("div.pics_card")).addClass("pics_card_after").removeClass("pics_card");
		$(cajaActual).addClass("card_after").removeClass("card");
		$(cajaActual).children($("div.pics_card_after")).children("div.txt_titre_card").addClass("txt_titre_card_after").removeClass("txt_titre_card");
		$(cajaActual).children($("div.txt_desciption_card")).addClass("txt_desciption_card_after").removeClass("txt_desciption_card");
		$(btnRead).hide();
		$(btnClose).show();
    });
    $('.close').on("click", function(e)
    {
		var cajaActual = $(e.currentTarget)[0];
		var btnClose = $(e.currentTarget)[0];
		var btnRead = $(btnClose).siblings($("div.read"));
		cajaActual = $(cajaActual).parent().parent();
		
		if ($(cajaActual).css('margin-left') == '1px') {
			$(cajaActual).css("margin-left","300px")
		} else if ($(cajaActual).css('margin-left') == '2px') {
			$(cajaActual).css("margin-left","600px")
		}
		
		var othersBox = $(cajaActual).siblings($("div#card"));
		$.each(othersBox, function(i, elem) {
			$(elem).css("display", "initial")
		});
		
		$(cajaActual).children($("div.pics_card_after")).addClass("pics_card").removeClass("pics_card_after");
		$(cajaActual).addClass("card").removeClass("card_after");
		$(cajaActual).children($("div.pics_card")).children("div.txt_titre_card_after").addClass("txt_titre_card").removeClass("txt_titre_card_after");
		$(cajaActual).children($("div.txt_desciption_card_after")).addClass("txt_desciption_card").removeClass("txt_desciption_card_after");
		$(btnRead).show();
		$(btnClose).hide();
    });
	$('.menu').on("click",function(e)
    {
		
    });
});