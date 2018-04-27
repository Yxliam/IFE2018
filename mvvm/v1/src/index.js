import san from "san";

var MyApp = san.defineComponent({
	template: '<p>Hello World!</p>',
});


var myApp = new MyApp();
myApp.attach(document.body);