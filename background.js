chrome.storage.sync.get({
	local_sites: [],
	live_sites: []
}, function(items) {
	var localColour = '#26A65B',
		liveColour = '#EC644B';
	var local = items.local_sites.split("\n");
	var live = items.live_sites.split("\n");
	var origin = window.location.origin;
	var hostname = window.location.hostname;

	if (local.indexOf(origin) != -1 || local.indexOf(hostname) != -1) {
		addBanner(localColour);
	}

	if (live.indexOf(origin) != -1 || live.indexOf(hostname) != -1) {
		addBanner(liveColour);
	}

	function addBanner(colour) {
		var bar = document.createElement("div");
		bar.id = "local-or-live-warning-bar";
		bar.style.width = 100 + "%";
		bar.style.height = 5 + "px";
		bar.style.background = colour;
		bar.style.position = 'fixed';
		bar.style.top = '0';
		document.body.appendChild(bar);
	}
});