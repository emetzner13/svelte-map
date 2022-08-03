<div id="notfound">
	<div class="notfound">
		<div class="notfound-404">
			<slot name="phrase" />
			<slot name="alert" />
		</div>
		<slot name="message" />
	</div>
</div>

<style>
	#notfound {
		position: relative;
		height: calc(100vh - 4rem);
	}

	#notfound .notfound {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	.notfound {
		max-width: 520px;
		width: 100%;
		line-height: 1.4;
		text-align: center;
	}

	.notfound .notfound-404 {
		position: relative;
		height: 240px;
	}

	:global(.notfound .notfound-404 h1) {
		font-family: montserrat, sans-serif;
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		font-size: 252px;
		font-weight: 900;
		margin: 0;
		color: var(--color-tertiary);
		text-transform: uppercase;
		letter-spacing: -40px;
		margin-left: -20px;
	}

	:global(.notfound .notfound-404 h1 > span) {
		text-shadow: -8px 0 0 var(--color-secondary);
	}

	:global(.notfound .notfound-404 h3) {
		font-family: cabin, sans-serif;
		position: relative;
		font-size: 16px;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--color-tertiary);
		margin: 0;
		letter-spacing: 3px;
		padding-left: 6px;
	}

	:global(.notfound h2) {
		font-family: cabin, sans-serif;
		font-size: 20px;
		font-weight: 400;
		text-transform: uppercase;
		color: var(--color-tertiary);
		margin-top: 0;
		margin-bottom: 25px;
	}

	@media only screen and (max-width: 767px) {
		.notfound .notfound-404 {
			height: 200px;
		}

		:global(.notfound .notfound-404 h1) {
			font-size: 180px;
		}
	}

	@media only screen and (max-width: 480px) {
		.notfound .notfound-404 {
			height: 162px;
		}

		:global(.notfound .notfound-404 h1) {
			font-size: 130px;
			height: 130px;
			line-height: 130px;
		}

		:global(.notfound h2) {
			font-size: 16px;
		}
	}
</style>
