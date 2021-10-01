<template>
	<div class="social" :class="addStyle">
		<ul>
			<li>
				<a href="https://www.facebook.com/Lee-Law-Offices-128499176074416" target="_blank">
					<facebook-icon alt="fb-icon" />
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/company/lee-law-offices-ltd " target="_blank">
					<linkedin-icon alt="li-icon" />
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import EmailIcon from '@/assets/icons/email.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';

export default {
	props: {
		addStyle: {
			type: String,
			default: '',
		},
	},
	components: {
		EmailIcon,
		FacebookIcon,
		InstagramIcon,
		LinkedinIcon,
	},
};
</script>

<style lang="sass" scoped>
.social
   ul
      display: flex
      list-style: none
      flex-wrap: wrap
      padding: 0

      li:not(:last-child)
         // margin-bottom: var(--space-2xs)
         margin-right: var(--space-xs)

   ::v-deep svg
      *
         transition: var(--transition)
         fill: var(--color-p)
      &:hover
         *
            fill: var(--color-p)

   &.white ::v-deep svg
      *
         fill: #fff
         opacity: .7

      &:hover
         *
            opacity: 1

   &.contact //this class is added on contact page
      li:not(:last-child)
         margin-bottom: var(--space-2xs)
</style>