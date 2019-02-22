import React, { Component } from 'react'
import Ra from '../../js/ra'

class Docs extends Component {

	componentDidMount() {
		Ra.loadSample("../html/starter.xml", null, "code-starter")
		Ra.loadSample("../html/body.xml", null, "code-body")
		Ra.loadSample("../html/article.xml", null, "code-article")
		Ra.loadSample("../html/form.xml", null, "code-form")
	}

	render() {
		return (
			<section>
				<article>
					<header>
						<h1>Documentation</h1>
						<hr />
					</header>
					<main>
						<em>
							Let's get started the most simple css framework of the world. Learn about semantic html elements, grid-systems and components. You can reach the source code from <a href="https://github.com/rahmanyerli/ra-css" target="_blank" rel="noopener noreferrer">GitHub</a>.
						</em>
					</main>
				</article>
				<br />
				<br />
				<article>
					<header>
						<h4>Get Started</h4>
						<br />
					</header>
					<main>
						<p>
							Download or clone RA-CSS from <a href="https://github.com/rahmanyerli/ra-css" target="_blank" rel="noopener noreferrer">GitHub</a> and add <a href="https://github.com/rahmanyerli/ra-css/master/css/ra.min.css" target="_blank" rel="noopener noreferrer">ra.min.css</a> file your css directory and add css link to your html page head section. That's all. Please don't forget the HTML5 meta tags for mobile compatibility. Your starter template should look similar to the following template.
						</p>
						<br />
						<figure>
							<button type="button" data-role="clipboard" data-target="code-starter">Copy</button>
							<pre className="language-html"><code id="code-starter"></code></pre>
						</figure>
					</main>
				</article>
				<br />
				<br />
				<article>
					<header>
						<h4>Essentials</h4>
						<br />
					</header>
					<main>
						<p>
							We all agree that as projects grow, development and maintenance costs are increasing. To keep our HTML code clean and robust, we need to understand how to use the HTML5 semantic tags. We will not add div anywhere like any other popular CSS frameworks that develop a project with RA-CSS.</p>
						<br />
						<p>
							Now, let's change our perspective a bit. While
							there are a lot of different types of HTML elements supported by modern browsers and mobile devices, why do we
							only use DIV? The answer is actually very simple, because we can do the same thing by using only one element type. As much
							as it makes sense, it's not true. The first time you look at the code, it means something. In addition, in terms
							of SEO, we should use HTML elements in accordance with their goals. This will reduce the number of CSS class we
									will add to the code. Now let's have a look at semantic HTML elements.</p>
						<br />
						<figure className="border padding">
							<figcaption className="">body</figcaption>
							<header className="padding margin-top border">
								header
							</header>
							<main className="padding margin-top border">
								main
							</main>
							<footer className="padding margin-top border">
								footer
							</footer>
						</figure>
						<br />
						<figure>
							<button type="button" data-role="clipboard" data-target="code-body">Copy</button>
							<pre className="language-html"><code id="code-body"></code></pre>
						</figure>
						<br />
						<p>
							As can be seen from the shape, we will always create our main lines with the <var>header</var>, <var>main</var> and <var>footer</var> elements. We will not use this structure for only the <var>body</var>, also we can use this structure in any container element such as <var>article</var>, <var>section</var>, <var>form</var> etc.
						</p>
						<br />
						<p>
							Let's assume you're publishing an article or preparing a sign-in form. It sounds good to use the header element for the title, the main element for the main content, and the footer element for the extra information and elements.
						</p>
						<br />
						<p>
							Below are two sample templates for article and sign-in form. If you are creating a simple blog, perhaps you may have enough heading and paragraph elements in the sheet, but in this example we will think about a slightly more complex blog example. For this reason, when you have the article element <var>header-main-footer</var> structure will be more meaningful to use.
						</p>
						<br />
						<figure className="border padding">
							<figcaption className="">article</figcaption>
							<header className="padding margin-top border">
								header
							</header>
							<main className="padding margin-top border">
								main
							</main>
							<footer className="padding margin-top border">
								footer
							</footer>
						</figure>
						<figure className="margin-top">
							<button type="button" data-role="clipboard" data-target="code-article">Copy</button>
							<pre className="language-html"><code id="code-article"></code></pre>
						</figure>
						<figure className="margin-top border padding">
							<figcaption className="">form</figcaption>
							<header className="padding margin-top border">
								header
							</header>
							<main className="padding margin-top border">
								main
									</main>
							<footer className="padding margin-top border">
								footer
							</footer>
						</figure>
						<figure className="margin-top">
							<button type="button" data-role="clipboard" data-target="code-form">Copy</button>
							<pre className="language-html"><code id="code-form"></code></pre>
						</figure>
					</main>
				</article>
			</section>
		)
	}
}

export default Docs
