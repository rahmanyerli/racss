import Prism from 'prismjs'

class Ra {

	init = () => {
		// Ignore home page
		let currentPath = window.location.pathname;

		if (currentPath !== "/#/home/" && currentPath !== "/#/builder/") {
			document.getElementById("header").classList.add("bg-primary");
			document.getElementById("sidenav").addEventListener("click", this.expandSideNav);
			// Show/Hide Menu Button by Scroll Direction 
			this.toggleMenuButton();
		}
		// Bind copy to clipboard button events
		this.bindClipboard();
		// Bind Dialog Modal Events
		// Q("button[data-role=modal-show]").on("click", initModal);
		// Q("[data-role=modal-dismiss], dialog").on("click", hideModal);
		// Bind Dropdown Events
		// Q(".dropdown > button").on("click", showDropdown);
		// Q(".dropdown > button").on("blur", hideDropdown);
		// Bind Tooltips & Popovers Events
		// Q("[title]").tooltip();

		// Bind alerts events
		let alerts = document.querySelectorAll(".alert");
		this.bindAlerts(alerts);

		// Bind accordion events
		setTimeout(() => {
			let accordions = document.querySelectorAll(".accordion > header > button");
			this.bindAccordions(accordions);
		}, 500);
	}

	bindClipboard = () => {
		let clipboardButtons = document.querySelectorAll("[data-role=clipboard]")
		if (clipboardButtons) {
			for (const button of clipboardButtons) {
				button.addEventListener("click", (event) => {
					this.clipboard(event, button.getAttribute("data-target"))
				})
			}
		}
	}

	clipboard = (event, id) => {
		const el = document.createElement("textarea");
		el.value = document.getElementById(id).textContent;
		el.setAttribute('readonly', '');
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
		// change button text
		let text = event.target.textContent;
		event.target.textContent = "Copied!";
		event.target.setAttribute("disabled", "disabled");
		el.remove();
		setTimeout(() => {
			event.target.textContent = text;
			event.target.removeAttribute("disabled");
		}, 1000);
	}

	static loadSample = (url, viewid, codeid) => {
		fetch(url)
			.then(
				function (response) {
					if (response.status !== 200) {
						console.log("Looks like there was a problem. Status Code: " + response.status);
						return;
					}
					// Examine the text in the response
					response.text().then(function (data) {
						if (viewid && viewid !== "") {
							document.getElementById(viewid).innerHTML = data;
						}
						if (codeid && codeid !== "") {
							document.getElementById(codeid).textContent = data;
						}

						Prism.highlightAll()
					});
				}
			)
			.catch(function (err) {
				console.log("Fetch Error :(", err);
			});
	}

	expandSideNav = (params) => {
		document.getElementById("menu-button").click();
	}

	toggleMenuButton = () => {
		// Initial state
		var scrollPos = 0;
		// adding scroll event
		window.addEventListener('scroll', function () {
			// detects new state and compares it with the new one
			let buttonMenu = document.getElementById("menu-button");
			if ((document.body.getBoundingClientRect()).top > scrollPos) {
				setTimeout(() => {
					buttonMenu.classList.remove("scale-1");
					buttonMenu.classList.add("scale-0");
				}, 100);
			}
			else {
				setTimeout(() => {
					buttonMenu.classList.remove("scale-0");
					buttonMenu.classList.add("scale-1");
				}, 100);
			}
			// saves the new position for iteration.
			scrollPos = (document.body.getBoundingClientRect()).top;
		});
	}

	initModal = (event) => {
		try {
			let trigger = event.target;
			let dataTargetId = trigger.getAttribute("data-target");
			if (dataTargetId) {
				let dialog = document.getElementById(dataTargetId);
				if (dialog) {
					this.showModal(dialog);
				}
			}
		} catch (error) {
			console.log("initModal => Error: " + error);
		}
	}

	showModal = (dialog) => {
		try {
			if (dialog) {
				dialog.style.opacity = "1";
				dialog.style.transform = "scale(1)";
				let form = dialog.querySelector("form");
				if (form) {
					form.classList.add("modal-show");
				}
			}
		} catch (error) {
			console.log("showModal => Error: " + error);
		}
	}

	hideModal = (event) => {
		try {
			let dismisser = event.target;
			let dataTargetId;
			if (dismisser.nodeName === "DIALOG") {
				// self dismiss
				dataTargetId = dismisser.id;
			} else {
				dataTargetId = dismisser.getAttribute("data-target");
			}
			if (dataTargetId) {
				let dialog = document.getElementById(dataTargetId);
				if (dialog) {
					this.dismissModal(dialog);
				}
			}
		} catch (error) {
			console.log("hideModal => Error: " + error);
		}
	}

	dismissModal = (dialog) => {
		try {
			if (dialog) {
				let form = dialog.querySelector("form");
				if (form) {
					form.classList.remove("modal-show");
				}
				dialog.style.opacity = "0";
				setTimeout(() => {
					dialog.style.transform = "scale(0)";
				}, 500);
			}
		} catch (error) {
			console.log("dismissModal => Error: " + error);
		}
	}

	showDropdown = (event) => {
		try {
			let dropdownButton = event.target;
			dropdownButton.focus(); // for firefox blur problem
			let ul = dropdownButton.parentNode.querySelector("ul");
			ul.classList.toggle("expand");
		} catch (error) {
			console.log("showDropdown => Error: " + error);
		}
	}

	hideDropdown = (event) => {
		try {
			let dropdownButton = event.target;
			let ul = dropdownButton.parentNode.querySelector("ul");
			setTimeout(() => {
				ul.classList.remove("expand");
			}, 250);
		} catch (error) {
			console.log("hideDropdown => Error: " + error);
		}
	}

	initTooltip = (element) => {
		try {
			let title = element.getAttribute("title");
			let position = element.getAttribute("data-position");
			let trigger = element.getAttribute("data-trigger");
			if (title) {
				if (/<[a-z][\s\S]*>/i.test(title)) {
					// title contains html tags
					// create popover
					let popovertext = document.createElement("span");
					popovertext.classList.add("popovertext");
					popovertext.innerHTML = title;
					if (position) {
						popovertext.classList.add(position);
					} else {
						// default position is top
						popovertext.classList.add("top");
					}
					if (title.length > 30) {
						popovertext.classList.add("min-w-100p");
						// popovertext.classList.add("min-w-15");
						popovertext.classList.add("wrap");
					}

					if (element.nodeName === "INPUT" || element.nodeName === "SELECT" || element.nodeName === "TEXTAREA") {
						let popover = document.createElement("div");
						popover.classList.add("popover");
						popover.classList.add("flex");
						if (trigger) {
							popover.classList.add(trigger);
						} else {
							// default trigger
							popover.classList.add("hover");
						}
						element.parentNode.insertBefore(popover, element);
						popover.appendChild(element);
						popover.appendChild(popovertext);
					} else {
						element.classList.add("popover");
						if (trigger) {
							element.classList.add(trigger);
						} else {
							// default trigger
							element.classList.add("hover");
						}
						element.appendChild(popovertext);
					}
				} else {
					// create tooltip
					let tooltiptext = document.createElement("span");
					tooltiptext.classList.add("tooltiptext");
					tooltiptext.innerText = title;
					if (position) {
						tooltiptext.classList.add(position);
					} else {
						// default position is top
						tooltiptext.classList.add("top");
					}
					if (title.length > 30) {
						tooltiptext.classList.add("w-100p");
						tooltiptext.classList.add("min-w-15");
						tooltiptext.classList.add("wrap");
					}

					if (element.nodeName === "INPUT" || element.nodeName === "SELECT" || element.nodeName === "TEXTAREA") {
						let tooltip = document.createElement("div");
						tooltip.classList.add("tooltip");
						tooltip.classList.add("flex");
						if (trigger) {
							tooltip.classList.add(trigger);
						} else {
							// default trigger
							tooltip.classList.add("hover");
						}
						element.parentNode.insertBefore(tooltip, element);
						tooltip.appendChild(element);
						tooltip.appendChild(tooltiptext);
					} else {
						element.classList.add("tooltip");
						if (trigger) {
							element.classList.add(trigger);
						} else {
							// default trigger
							element.classList.add("hover");
						}
						element.appendChild(tooltiptext);
					}
				}

				element.removeAttribute("title");
			}
		} catch (error) {
			console.log(error)
		}
	}

	bindAlerts = (alerts) => {
		for (const alert of alerts) {
			if (alert.classList.contains("alert")) {
				this.bindAlert(alert)
			}
		}
	}

	bindAlert = (alert) => {
		try {
			let dataDismiss = alert.getAttribute("data-dismiss")
			if (dataDismiss) {
				// create dismiss button
				let dismisser = document.createElement("span")
				dismisser.classList.add("close")
				dismisser.addEventListener("click", (event) => {
					this.dismissAlert(event.target.parentNode)
				})
				alert.appendChild(dismisser)
			}
			// find other dismiss buttons
			let buttons = alert.querySelectorAll("[data-dismiss]");
			if (buttons && buttons.length > 0) {
				for (const button of buttons) {
					let dataTarget = button.getAttribute("data-target");
					if (dataTarget) {
						let target = document.getElementById(dataTarget)
						button.addEventListener("click", () => {
							this.dismissAlert(target)
						})
					}
				}
			}
		} catch (error) {
			console.log(error)
		}
	}

	dismissAlerts = (alerts) => {
		try {
			if (alerts) {
				for (const alert of alerts) {
					this.dismissAlert(alert)
				}
			}
		} catch (error) {
			console.log(error)
		}
	}

	dismissAlert = (alert) => {
		if (alert) {
			alert.style.opacity = "0";
			setTimeout(() => {
				alert.remove()
			}, 300);
		}
	}

	createAlert = (html) => {
		var div = document.createElement('div');
		div.innerHTML = html.trim();
		let alert = div.firstChild;
		this.bindAlert(alert);
		return alert;
	}

	bindAccordions = (accordions) => {
		for (const accordion of accordions) {
			accordion.addEventListener("click", this.toggleAccordion);
		}
	}

	toggleAccordion = (event) => {
		event.stopPropagation();
		let currentAccordion = event.target.parentNode.parentNode;
		this.collapseOtherAccordions(currentAccordion);
		event.target.classList.toggle("active");
		this.toggleAccordionPanel(currentAccordion);
	}

	toggleAccordionPanel = (currentAccordion) => {
		if (currentAccordion) {
			let currentPanel = currentAccordion.querySelector("main");
			if (currentPanel.style.maxHeight) {
				currentPanel.style.maxHeight = null;
			} else {
				currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
			}
		}
	}

	collapseOtherAccordions = (currentAccordion) => {
		if (currentAccordion && currentAccordion.classList.contains("toggle")) {
			// close other accordion panels
			let accordions = currentAccordion.parentNode.querySelectorAll(".accordion");
			if (accordions) {
				for (const accordion of accordions) {
					// exclude current accordion
					if (accordion !== currentAccordion) {
						accordion.classList.remove("active");
					}
				}
			}
			let panels = currentAccordion.parentNode.querySelectorAll(".accordion > main");
			if (panels) {
				for (const panel of panels) {
					// exclude current accordion panel
					if (panel !== currentAccordion.querySelector("main")) {
						panel.style.maxHeight = null;
					}
				}
			}
		}
	}

	expandAccordion = (currentAccordion) => {
		if (!currentAccordion) {
			return false;
		}
		this.collapseOtherAccordions(currentAccordion);
		currentAccordion.classList.add("active");
		this.expandAccordionPanel(currentAccordion);
	}

	expandAccordionPanel = (currentAccordion) => {
		if (currentAccordion) {
			let currentPanel = currentAccordion.nextElementSibling;
			currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
		}
	}

	collapseAccordion = (currentAccordion) => {
		if (!currentAccordion) {
			return false;
		}
		currentAccordion.classList.remove("active");
		this.collapseAccordionPanel(currentAccordion);
	}

	collapseAccordionPanel = (currentAccordion) => {
		if (currentAccordion) {
			let currentPanel = currentAccordion.nextElementSibling;
			currentPanel.style.maxHeight = null;
		}
	}
}

export default Ra