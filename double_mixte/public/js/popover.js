function showPopover2013() {
	setTimeout(function(){ $("#popover2013").css("display", "block"); }, 2000);
	//setTimeout(function(){ $("#textehistoire2013").css("display", "block"); }, 1000);
	setTimeout(function(){ $("#funfact2013").css("display", "block"); }, 1000);
}

function hidePopover2013() {
	$("#popover2013").css("display", "none");
	//$("#textehistoire2013").css("display", "none");
	$("#funfact2013").css("display", "none");
}

function showPresse2013() {
	setTimeout(function(){ $("#presse2013").css("display", "block"); }, 1000);
}

function hidePresse2013() {
	$("#presse2013").css("display", "none");
}

function showAnimation2014() {
	setTimeout(function(){ $("#funfact2014").css("display", "block"); }, 1000);
}

function hideAnimation2014() {
	$("#funfact2014").css("display", "none");
}

function showAnimation2015() {
	setTimeout(function(){ $("#funfact2015").css("display", "block"); }, 1000);
	setTimeout(function(){ $("#presse2015").css("display", "block"); }, 1000);
	setTimeout(function(){ $("#popover2015").css("display", "block"); }, 1000);
}

function hideAnimation2015() {
	$("#funfact2015").css("display", "none");
	$("#presse2015").css("display", "none");
	$("#popover2015").css("display", "none");
}

function showAnimation2016() {
	setTimeout(function(){ $("#funfact2016").css("display", "block"); }, 1000);
}

function hideAnimation2016() {
	$("#funfact2016").css("display", "none");
}

function test() {
	$("#btn2011").focus();
	$("#btn2011").on("click", function() {
		$("#pola2012").css("display", "none");
		$("#pola2013").css("display", "none");
		$("#pola2014").css("display", "none");
		$("#pola2015").css("display", "none");
		$("#pola2016").css("display", "none");

		$("#pola2011").css("display", "block");
	});

	$("#btn2012").on("click", function() {
		$("#pola2011").css("display", "none");
		$("#pola2013").css("display", "none");
		$("#pola2014").css("display", "none");
		$("#pola2015").css("display", "none");
		$("#pola2016").css("display", "none");

		$("#pola2012").css("display", "block");
	});

	$("#btn2013").on("click", function() {
		$("#pola2011").css("display", "none");
		$("#pola2012").css("display", "none");
		$("#pola2014").css("display", "none");
		$("#pola2015").css("display", "none");
		$("#pola2016").css("display", "none");

		$("#pola2013").css("display", "block");
	});

	$("#btn2014").on("click", function() {
		$("#pola2011").css("display", "none");
		$("#pola2012").css("display", "none");
		$("#pola2013").css("display", "none");
		$("#pola2015").css("display", "none");
		$("#pola2016").css("display", "none");
		
		$("#pola2014").css("display", "block");
	});

	$("#btn2015").on("click", function() {
		$("#pola2011").css("display", "none");
		$("#pola2012").css("display", "none");
		$("#pola2013").css("display", "none");
		$("#pola2014").css("display", "none");
		$("#pola2016").css("display", "none");

		$("#pola2015").css("display", "block");
	});

	$("#btn2016").on("click", function() {
		$("#pola2011").css("display", "none");
		$("#pola2012").css("display", "none");
		$("#pola2013").css("display", "none");
		$("#pola2014").css("display", "none");
		$("#pola2015").css("display", "none");
		
		$("#pola2016").css("display", "block");
	});
}
