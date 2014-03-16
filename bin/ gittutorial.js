(function (Main, undefined)
{
	console.log('this is my main js file');
}(window.Main == window.Main || {}));

(function (Controller, undefined)
{
	console.log('this is a controller');
	var a = "Controller Name";
}(Main.Controller == Main.Controller || {} ));