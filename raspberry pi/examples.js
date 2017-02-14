$(document).ready(function() 
{
	var liked = "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/thumbs-up-circle-blue-128.png";
	var disliked = "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/thumbs-down-circle-red-128.png";

	$('.show_filtered').on("click", function(e) {
	    var obj = $(e.currentTarget)[0];
		var nav = $(obj).parent().parent().parent().parent().parent().parent().parent();
		var content = $(nav).siblings("div.content-page")[0];
		var boxes = $(content).children($("div.card"));
		$.each(boxes, function(i, box) {
			if ($(box).attr("id").indexOf($(obj).attr("id").toLowerCase()) < 0) {
			  $(box).css("display", "none");
			  if ($(box).attr("id") == "box_future") {
				$(box).css("margin-left", "300px");
			  }
			  if ($(box).attr("id") == "box_benefit") {
				$(box).css("margin-left", "600px");
			  }
			} else {
			  $(box).css("display", "initial");
			  if ($(box).attr("id") == "box_future") {
				$(box).css("margin-left", "");
			  }
			  if ($(box).attr("id") == "box_benefit") {
				$(box).css("margin-left", "");
			  }
			}
		});
	});
	$('.show_all').on("click", function(e) {
	    var obj = $(e.currentTarget)[0]
		var nav = $(obj).parent().parent().parent().parent().parent().parent().parent();
		var content = $(nav).siblings("div.content-page")[0];
		var boxes = $(content).children($("div.card"));
		$.each(boxes, function(i, box) {
			$(box).css("display", "initial");
			if ($(box).attr("id") == "box_future") {
		       $(box).css("margin-left", "300px");
			}
			if ($(box).attr("id") == "box_benefit") {
		       $(box).css("margin-left", "600px");
			}
		});
	});
	$('.show_none').on("click", function(e) {
	    var obj = $(e.currentTarget)[0]
		var nav = $(obj).parent().parent().parent().parent().parent().parent().parent();
		var content = $(nav).siblings("div.content-page")[0];
		var boxes = $(content).children($("div.card"));
		$.each(boxes, function(i, box) {
			$(box).css("display", "none");
			if ($(box).attr("id") == "box_future") {
		       $(box).css("margin-left", "300px");
			}
			if ($(box).attr("id") == "box_benefit") {
		       $(box).css("margin-left", "600px");
			}
		});
	});
    $('.read').on("click",function(e)
    {
		var cajaActual = $(e.currentTarget)[0];
		var btnRead = $(e.currentTarget)[0];
		var btnClose = $(btnRead).siblings($("div.close"));
		cajaActual = $(cajaActual).parent().parent();
		/*TODO: change if to search by id*/
		if ($(cajaActual).attr("id") == "box_future") {
			$(cajaActual).css("margin-left","")
		} else if ($(cajaActual).attr("id") == "box_benefit") {
			$(cajaActual).css("margin-left","")
		}
		
		//for all the other box will change the visibility when the actual box is clicked
		var othersBox = $(cajaActual).siblings($("div#card"));
		$.each(othersBox, function(i, elem) {
			$(elem).css("z-index", "-1");
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
		var othersBox = $(cajaActual).siblings($("div#card"));
		var box_bio = othersBox[0];
		
		if ($(cajaActual).attr("id") == "box_future") {
			if ($(box_bio).css("display") == "initial" || $(box_bio).css("display") == "block")  {
				$(cajaActual).css("margin-left","300px")
			}
		} else if ($(cajaActual).attr("id") == "box_benefit") {
			$(cajaActual).css("margin-left","600px")
		}
		
		
		$.each(othersBox, function(i, elem) {
			$(elem).css("z-index", "0")
		});
		
		$(cajaActual).children($("div.pics_card_after")).addClass("pics_card").removeClass("pics_card_after");
		$(cajaActual).addClass("card").removeClass("card_after");
		$(cajaActual).children($("div.pics_card")).children("div.txt_titre_card_after").addClass("txt_titre_card").removeClass("txt_titre_card_after");
		$(cajaActual).children($("div.txt_desciption_card_after")).addClass("txt_desciption_card").removeClass("txt_desciption_card_after");
		$(btnRead).show();
		$(btnClose).hide();
    });
	$('.navbar-toggler').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.navbar-minimal').toggleClass('open');
	})
	$('.vote').on('click', function(e) {
		var obj = $(e.currentTarget)[0];
		var parent = $(obj).parent().siblings()[0];
		var span = $(parent).children($("div.flip_face_a78"))[0];
		var a = $(span).children($("a"))[0];
		var text = $(a).find("span")[0];
		var img = $(a).children($("img"))[0];
		if ($(obj).attr("id") == "like") {
			$(img).attr("src",liked);
			$(img).css("margin-top", "2px");
			$(text).text("Liked");
		} else if ($(obj).attr("id") == "dislike") {
			$(img).attr("src",disliked);
			$(img).css("margin-top", "2px");
			$(text).text("Disliked");
		}
	})
});