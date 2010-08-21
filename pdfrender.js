 // if javascript is enabled, and the browser supports navigation to datauri elements show a link to PDF
$(document).ready(function () {
	if (!$.browser.msie) {
		$('#pdf').append('<a href="javascript:toPDF()" id="pdf-link">Render PDF</a>');
		$('#pdf').slideDown(2000);
	}
});

 function toPDF() {
	 // select text elements from the current dom and format them using the jsPDF API
	 var doc = new jsPDF();
	 lineNumber = 0;
	 // TODO subclass different elements to apply different styles
	 // make wrapping calculations based on class type.
	 jQuery.each($("h1,h2,h3,p,dt,dd"), function (i, v) {
		 doc.text(20, 20 + (lineNumber * 10), $(v).text());
		 lineNumber += 1;
		 if (lineNumber == 27) {
			 doc.addPage();
			 lineNumber = 0;
		 }
	 })
	 doc.output('datauri');
 }