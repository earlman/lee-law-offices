<template>
	<Layout pageTitle="Home" pageSubtitle="">
        <section class="hero-container">
            <div class="hero">
                <div class="content">

                    <h1>The law is on your side. We are here to protect you.</h1>
                    <p>Call us today for a free consultation! 630-444-5656. Se habla español.</p>
                    <button class="contact-us">Contact Us</button>
                    
                </div>
            </div>
        </section>

		<section class="practice-areas">
			<h2>Practice Areas</h2>
			<div class="areas-grid">
				<div class="harassment">
                    <h3>Harassment</h3>
					<p>
						Are you
						<em>
							<b>
								being treated in a way that is offensive, humiliating, intimidating,
								or threatening at work</b
							>
						</em>
						because of your race, color, national origin, gender, sexual orientation,
						being pregnant, age, religion, or disability? Does your supervisor create a
						“culture of fear” or “fraternity culture” at work? You hate to go to work
						because you are being constantly harassed at work? Enough is enough. It is
						time to stand up against your harasser.
					</p>
				</div>
				<div class="discrimination">
                    <h3>Discrimination</h3>
					<p>
						Are you being
						<em>
							<b> treated less favorably </b>
						</em>
						at work because of your race, gender, age, religion, pregnant, or
						disability? Stop getting screwed over. It is time to stand up for your
						rights.
					</p>
				</div>
				<div class="wagehour">
                    <h3>Wage & Hour</h3>
					<p>
						Are you
						<em>
							<b> unsure if </b>
						</em>

						you are receiving all your wages? You are entitled to receiving the minimum
						wage, overtime, meal and rest breaks, and back wages. It is never too late
						to claim what you have earned.
					</p>
				</div>
				<div class="wrongfultermination">
                    <h3>Termination</h3>
					<p>
						Did you
						<em>
							<b> get fired </b>
						</em>

						after asking for your unpaid wages, filing your worker’s compensation claim,
						or reporting harassment? Did you
						<em>
							<b> quit </b>
						</em>
						because you could no longer tolerate harassment or discrimination? You
						deserve better. It is time to claim your lost wages.
					</p>
				</div>
			</div>
		</section>
		<section class="free-consultation">
            <h2>Free Consultation</h2>
            <form action="">

                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="phone" placeholder="Phone"/>
                <input type="text" name="email" placeholder="Name"/>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Briefly Explain your situation."></textarea>
                <button type="submit" class="contact-us">Contact Us</button>
            </form>
        </section>
		<section class="contact-us">
            <h2>Contact Us</h2>
        </section>
	</Layout>
</template>


<script>
export default {
	metaInfo: {
		title: 'Home',
	},
	data() {
		return {};
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

section
    margin-bottom: var(--space-lg)

@include md
    .hero-container 
        background-image: url(~@/assets/images/hero.png)
        background-position: 100% 100%
        min-height: 70vh
        background-repeat: no-repeat
        background-size: auto 100%


.hero
    display: grid
    grid-template-rows: 1fr 3fr 1fr
    max-width: var(--layout-max-width)

.content
    margin: auto
    background-color: var(--color-b)
    padding: var(--space-sm)
    // opacity: .6

    @include md
        padding: var(--space-md)
        min-width: 300px
        max-width: 800px
        grid-row: 2
            
.practice-areas
    max-width: var(--layout-max-width)
    margin: 0 auto var(--space-lg) 

    .areas-grid
        display: grid
        grid-template-columns: 1fr 1fr


button.contact-us
    width: max-content


.free-consultation 
    max-width: var(--layout-max-width)
    margin: 0 auto var(--space-lg) 

//this is the section lol
.contact-us
    max-width: var(--layout-max-width)
    margin: 0 auto var(--space-lg) 
form
    display: grid
    max-width: 600px

</style>
