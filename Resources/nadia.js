
// Create a Label.
var aLabel = Ti.UI.createLabel({
	text : 'aLabel',
	color : '#textColor',
	font : {fontSize:myFontSize},
	height : myHeight,
	width : myWidth,
	top : myTop,
	left : myLeft,
	textAlign : 'center'
});

// Add to the parent view.
parentView.add(aLabel);
