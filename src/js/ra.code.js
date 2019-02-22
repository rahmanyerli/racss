class RaCode {
	static code() {
		let codeBuilder = document.getElementById("code-builder");
		let pageTemplate = document.getElementById("page-template");
		let html = pageTemplate.innerHTML;
		// remove attributes
		html = html.replace(/ dropzone="move"/g, "");
		html = html.replace(/ draggable="true"/g, "");
		html = html.replace(/ data-text=".+"/g, "");
		// remove all tabs
		html = html.replace(/\t/g, "");
		html = html.replace(/\n\n+/g, "\n");

		codeBuilder.textContent = html;
		Prism.highlightAll();
	}
}