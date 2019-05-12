var _gaq = [['_setAccount', 'UA-4144628-1'], 
			['_trackPageview']];

(function($) {
	$(document).ready(function() {
		// Google Analytics
		$('#jd-project-overview-tab')		            .on('mousedown', function() { _gaq.push(['_trackPageview', '/jd-project-overview']); });
		$('#jd-project-main-features-tab')	            .on('mousedown', function() { _gaq.push(['_trackPageview', '/jd-project-main-features']); });

		$('#jd-gui-overview-tab')						.on('mousedown', function() { _gaq.push(['_trackPageview', '/jd-gui-overview']); });
		$('#jd-gui-download-tab')						.on('mousedown', function() { _gaq.push(['_trackPageview', '/jd-gui-download']); });
		$('#jd-gui-download input[type="image"]')		.on('mousedown', function() { _gaq.push(['_trackEvent', 'JD-GUI', 'Paypal']); });
						
		$('#jd-eclipse-overview-tab')					.on('mousedown', function() { _gaq.push(['_trackPageview', '/jd-eclipse-overview']); });
		$('#jd-eclipse-download-tab')					.on('mousedown', function() { _gaq.push(['_trackPageview', '/jd-eclipse-download']); });
		$('#jd-eclipse-download input[type="image"]')	.on('mousedown', function() { _gaq.push(['_trackEvent', 'JD-Eclipse', 'Paypal']); });
	});			
})(jQuery);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
