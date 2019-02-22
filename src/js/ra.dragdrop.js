class RaDragDrop {

	static init() {
		// find draggable elements
		const draggables = document.querySelectorAll("[draggable=true]");
		for (const draggable of draggables) {
			draggable.addEventListener("dragstart", RaDragDrop.dragstart);
			draggable.addEventListener("dragend", RaDragDrop.dragend);
		}

		// find dropzones
		const dropzones = document.querySelectorAll("[dropzone=move]");
		for (const dropzone of dropzones) {
			dropzone.addEventListener("dragover", RaDragDrop.dragover);
			dropzone.addEventListener("dragenter", RaDragDrop.dragenter);
			dropzone.addEventListener("dragleave", RaDragDrop.dragleave);
			dropzone.addEventListener("drop", RaDragDrop.drop);
		}
	}

	static dragstart() {
		event.stopPropagation();
		// determine the drag type of draggable element (move or copy)
		// decide the type according to the parent node's dropzone attribute!
		if (this.parentNode.getAttribute("dropzone") === "copy") {
			// clone the draggable element
			const clone = this.cloneNode(true);
			// clone.id = "color-" + Math.floor(Math.random() * (10000));
			clone.addEventListener("dragstart", RaDragDrop.dragstart);
			clone.addEventListener("dragend", RaDragDrop.dragend);
			RaDragDrop.current = clone;
		}
		else {
			RaDragDrop.current = this;
			setTimeout(() => {
				this.remove();
				RaCode.code();
			}, 0);
		}
	}

	static dragend(event) {
		event.stopPropagation();
		event.preventDefault();
	}

	static dragover(event) {
		event.stopPropagation();
		event.preventDefault();
		this.classList.add("drag-enter");
	}

	static dragenter(event) {
		event.stopPropagation();
		event.preventDefault();
		this.classList.add("drag-enter");
	}

	static dragleave(event) {
		event.stopPropagation();
		event.preventDefault();
		this.classList.remove("drag-enter");
	}

	static drop(event) {
		event.stopPropagation();
		event.preventDefault();
		this.classList.remove("drag-enter");
		let component;
		if (RaDragDrop.current.classList.contains("toolbox")) {
			component = RaDragDrop.current.querySelector(":first-child");
			component.setAttribute("draggable", "true");
		}
		else {
			component = RaDragDrop.current;
		}
		this.append("\n");
		this.append(component);
		this.append("\n");
		setTimeout(() => {
			component.classList.remove("hidden");
			RaDragDrop.init();
			RaCode.code();
		}, 10);
		return true;
	}
}

document.addEventListener("DOMContentLoaded", RaDragDrop.init);