<template>
	<div class="footer-container">
		<footer class="footer">
			<nav>
				<div class="logo-container">
					<img src="@/assets/images/logo-footer.webp" alt="logo" class="logo" />
				</div>
				<div class="our-services">
					<h4>Our Services</h4>
					<ul>
						<li>
							<g-link :to="$tp('/employee')"> For Employees </g-link>
						</li>
						<li>
							<g-link :to="$tp('/employer')"> For Employers </g-link>
						</li>
						<li>
							<g-link :to="$tp('/business-litigation')">
								Business & Commercial Litigation
							</g-link>
						</li>
					</ul>
				</div>
				<div class="quick-links">
					<h4>Quick Links</h4>
					<ul>
						<li>
							<g-link :to="$tp('/')">Home</g-link>
						</li>
						<li>
							<g-link :to="$tp('/practice-areas')">Practice Areas</g-link>
						</li>
						<li>
							<g-link :to="$tp('/who-we-are')">Who We Are</g-link>
						</li>
						<li>
							<g-link :to="$tp('/contact-us')">Contact Us</g-link>
						</li>
						<li>
							<g-link :to="$tp('/disclaimer')">Disclaimer</g-link>
						</li>
					</ul>
				</div>
				<div class="contact">
					<h4>Contact</h4>
					<ul>
						<li><strong>Phone: </strong>&nbsp;(323) 289-2260, Ext. 1</li>
						<li><strong>Fax: </strong>&nbsp;(323) 642-5451</li>
						<li>
							<strong>Address: </strong>&nbsp;725 S. Figueroa Street, Suite 3065, Los
							Angeles, CA 90017
						</li>
					</ul>
				</div>
			</nav>
			<hr />

			<aside class="aside">
				<p>© Foundations. All Rights Reserved. 2019</p>
			</aside>
		</footer>
	</div>
</template>
<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.logo-container
    margin-top: var(--space-sm)
    margin-left: -.5rem
    opacity: .8

    h1
        font-variant: small-caps

.footer-container
    background-color: var(--color-b-f)
    border-top: 18px solid var(--color-p)

footer
    margin: var(--space-sm) var(--layout-margin) 0 var(--space-md)

    *
        color: white

    .logo
        margin: 0
        // margin: var(--space-sm) 0 0
        width: 200px
        @include lg
            // margin-top: var(--space-md)

    nav
        margin: 0 auto var(--space-md)
        max-width: var(--layout-max-width)

        .our-services, .quick-links, .contact
            margin-top: var(--space-sm)

        @include lg
            display: grid
            grid-template-rows: 1fr
            grid-template-columns: 3fr 2fr 2fr 3fr

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
