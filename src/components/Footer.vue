<template>
	<div class="footer-container">
		<footer class="footer">
			<nav>
				<div class="logo-container">
					<img src="@/assets/images/logo-footer.webp" alt="logo" class="logo" />
				</div>
				<div class="our-services">
					<h4>{{ $t('nav.our-services') }}</h4>
					<ul>
						<li>
							<g-link :to="$tp('/employee')"> {{ $t('nav.employees') }} </g-link>
						</li>
						<li>
							<g-link :to="$tp('/employer')"> {{ $t('nav.employers') }} </g-link>
						</li>
						<li>
							<g-link :to="$tp('/business-litigation')">
								{{ $t('nav.ba') }}
							</g-link>
						</li>
					</ul>
				</div>
				<div class="quick-links">
					<h4>{{ $t('nav.ql') }}</h4>
					<ul>
						<li>
							<g-link :to="$tp('/')">{{ $t('nav.home') }}</g-link>
						</li>
						<li>
							<g-link :to="$tp('/practice-areas')">{{ $t('nav.pa') }}</g-link>
						</li>
						<li>
							<g-link :to="$tp('/attorney-search')">{{ $t('nav.wwa') }}</g-link>
						</li>
						<li>
							<g-link :to="$tp('/contact-us')">{{ $t('nav.ca') }}</g-link>
						</li>
						<li>
							<g-link :to="$tp('/disclaimer')">{{ $t('nav.disclaimer') }}</g-link>
						</li>
					</ul>
				</div>
				<div class="contact">
					<h4>{{ $t('nav.ca') }}</h4>
					<ul>
						<li>
							<strong>{{ $t('index.contact-us.phone') }}: </strong>&nbsp;(323)
							289-2260, Ext. 1
						</li>
						<li>
							<strong>{{ $t('index.contact-us.fax') }}: </strong>&nbsp;(323) 642-5451
						</li>
						<li>
							<strong>{{ $t('index.contact-us.address') }}: </strong>&nbsp;725 S.
							Figueroa Street, Suite 3065, Los Angeles, CA 90017
						</li>
					</ul>
				</div>
			</nav>
			<hr />

			<aside class="aside">
				<p>
					© Lee Law Offices. All Rights Reserved. Built with
					<a href="http://foundations.design" target="_blank">Foundations.</a>
				</p>
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

      p, a
         color: white
         text-transform: uppercase
         font-variant: small-caps
         letter-spacing: 0.06em
         font-size: 12px
         margin-bottom: var(--space-md)

      a
         text-decoration: underline
         cursor: pointer
</style>
