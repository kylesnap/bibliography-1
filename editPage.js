var editable = document.getElementsByClassName("content");

function dateAndEdits() {
	if (localStorage.getItem("userEdits") === null) {
		null;
	} else {
		document.getElementById("material").innerHTML = localStorage.getItem("userEdits");
	}
	var changeDate = document.lastModified;
	document.getElementById("lastup").innerHTML = ("Last Updated On " + changeDate);
}

function editButton() {
	if (editable[0].isContentEditable == false) {
		for (i = 0; i < editable.length; i++) {
			editable[i].contentEditable = true;
		}
		document.getElementById("editToggle").innerHTML = "Save Edits";
	} else {
		for (i = 0; i < editable.length; i++) {
			editable[i].contentEditable = false;
		}
		saveEdits();
		document.getElementById("editToggle").innerHTML = "Edit";
	}
}

function saveEdits() {
	var editElem = document.getElementById("material");
	var userVersion = editElem.innerHTML;
	localStorage.userEdits = userVersion;
}

function download() {
	var printOut = String(document.getElementById("material").innerHTML);
	uriContent = "data:application/octet-stream," + encodeURIComponent(printOut);
	newWindow = window.open(uriContent, "neuesDokument");
}