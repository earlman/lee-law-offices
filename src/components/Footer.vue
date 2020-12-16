<template>
	<div class="footer-container">
		<footer class="footer">
			<nav>
				<div class="logo">Lee Law Offices</div>
				<div class="our-services">
					<h4>Our Services</h4>
					<ul>
						<li>
							<g-link>Harrassment</g-link>
						</li>
						<li>
							<g-link>Discrimination</g-link>
						</li>
						<li>
							<g-link>Wage & Hour</g-link>
						</li>
						<li>
							<g-link>Termination</g-link>
						</li>
					</ul>
				</div>
				<div class="quick-links">
					<h4>Quick Links</h4>
					<ul>
						<li>
							<g-link> Business Litigation </g-link>
						</li>
						<li>
							<g-link> Employment Law Defense </g-link>
						</li>
					</ul>
				</div>
				<div class="contact">
					<h4>Contact</h4>
					<ul>
						<li><strong>Phone: </strong>&nbsp;323-289-2260</li>
						<li><strong>Fax: </strong>&nbsp;323-289-2261</li>
						<li>
							<strong>Address: </strong>&nbsp;725 S. Figueroa Street, Suite 3065, Los
							Angeles, CA 90017
						</li>
					</ul>
				</div>
			</nav>
			<hr />

			<aside class="aside">
				<p>© foundations.dev. All Rights Reserved. 2019</p>
			</aside>
		</footer>
	</div>
</template>
<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.footer-container
    background-color: var(--color-b-alt)
    border-top: 30px solid var(--color-p)

footer
    margin: var(--space-sm) var(--layout-margin) 0 var(--space-md)

    *
        color: white
        margin: 0

    .logo
        margin-right: var(--space-md)
        margin-bottom: var(--space-sm)

        width: 200px

    nav
        margin: 0 auto var(--space-md)
        max-width: var(--layout-max-width)

        .our-services, .quick-links, .contact
            margin-top: var(--space-sm)

        @include lg
            display: grid
            grid-template-rows: 1fr
            grid-template-columns: 1fr 1fr 1fr 1fr

            ul
                margin-right: var(--space-lg)
        h4
            margin-bottom: var(--space-2xs)

        ul
            margin-bottom: var(--space-sm)
            list-style-type: none

            *
                font-size: var(--d-sm)

            a
                font-weight: 400

    hr
        margin: auto
        max-width: var(--layout-max-width)
        margin-bottom: var(--space-sm)
        opacity: .1

    .aside
        display: grid
        place-items: center

        *
            all: initial

        p
            color: white
            text-transform: uppercase
            font-variant: small-caps
            letter-spacing: 0.06em
            font-size: 12px
            margin-bottom: var(--space-md)
</style>
