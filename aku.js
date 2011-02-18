function extractChildren(el) {
    var r = [];
    for (var i = 0; i < el.childNodes.length; i ++) {
	var e = el.childNodes[i];
	if (e.nodeType == 1) {
	    r.push(e);
	}
    }
    return r;
}

window.onload = function() {
    var menu = document.getElementById("menu");
    menu.style.display = "block";
    var content = document.getElementById("content");

    var menuKids = extractChildren(extractChildren(menu)[0]);
    var contentKids = extractChildren(content);

    var active = 0;
    var url = location.href;
    var m = url.match(/#sivu(\d+)/);
    if (m) {
	active = m[1] - 1;
    }

    for (var i = 0; i < menuKids.length; i ++) {
	var kid = menuKids[i];
	var link = extractChildren(kid)[0];
	link.href = "#sivu" + (i + 1);
	link._idx = i;
	link.onclick = function() {
	    for (var i = 0; i < menuKids.length; i ++) {
		menuKids[i].className = "";
		contentKids[i].style.display = "none";
	    }

	    var idx = this._idx;
	    menuKids[idx].className = "selected";
	    contentKids[idx].style.display = "block";
	};

	if (i == active) {
	    link.onclick();
	}
    }
};
