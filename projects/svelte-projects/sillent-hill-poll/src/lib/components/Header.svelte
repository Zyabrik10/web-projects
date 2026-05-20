<script lang="ts">
	import Link from './Link.svelte';
</script>

<header class="flex flex-col">
	<div class="up flex items-center justify-center p-10">
		<div
			style="
                min-width: 100px;
                width: 100%; 
                max-width: 150px;
                border-radius: 50%;
                position: relative;
                "
		>
			<div
				style="
                    top: 50%;
                    left: 50%;
                    position:absolute; 
                    width: 100%;
                    height: 100%;
                    
                    transform: translate(-50%, -50%);


                    border-radius: 50%; 
                    background: radial-gradient(
                        closest-side,
                        transparent,
                        rgb(55, 55, 55, 0.4) 95%,
                        rgb(50, 50, 50, 0.9) 100%);

                    backdrop-filter: blur(0.5px);
                "
			></div>
			<img
				style="
                display: block;
                height: auto;
                width: 100%; 
                border-radius: 50%;
                opacity: 0.5;
                "
				src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a8ec71c8-8e5a-431e-8f76-e0d41ccd94c6/diew8ea-fe5306d3-6457-49ce-94e0-9f7ef18b82f1.png"
				alt=""
			/>
		</div>
	</div>
	<nav class="nav w-full">
		<ul
			class="flex w-full items-center justify-center"
			style="
            background: 
	        linear-gradient(rgba(0, 0, 0, 1) 0%, rgb(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 1)),
            url(https://images6.alphacoders.com/339/thumb-1920-339517.jpg);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

        "
		>
			<li>
				<Link class="link" href="/">Current polls</Link>
			</li>
			<li>
				<Link class="link" href="/add-new-poll">Add new poll</Link>
			</li>
		</ul>
	</nav>
</header>

<style>
	.up {
		position: relative;
		background: url(https://image.api.playstation.com/vulcan/ap/rnd/202404/2513/e6dd4c57603c4ebb3e063e3d6696cfe5363859bf26368115.png);
		background-size: cover;
		background-position: 0 -300px;
		background-repeat: no-repeat;
	}

	.up::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1));
	}

	.nav {
		position: relative;
	}

	.nav::before {
		content: '';
		display: block;
		position: absolute;
		top: 100%;
		left: 0;

		width: 100%;
		height: 40%;

		pointer-events: none;

		background: linear-gradient(rgba(0, 0, 0, 1) 2%, transparent);
	}
</style>
