<template>
	<Main title='참여 작품 모음' subtitle="어떤 멋진 작품들이 제출되었을까요?" id="area3" class="worksarea">
		<h1>
			1차
		</h1>
		<h1>
			2차
		</h1>
		<ThumbRail :works="works"></ThumbRail>
		
	</Main>
</template>

<script>
	import Main from '../components/Main.vue'
	import ThumbRail from '../components/ThumbRail.vue'

	export default {
		name: 'WorksPage',
		components: {
			Main, 
			ThumbRail
		},
		data(){
			return {
				works: [
				"5cef7029d20f7b001aa1c519",
				"5ad6f3c658bfde9017d8b7a1",
				"5d25d3cac8a1bb6dfd0b13d2",
				"5a55c57222ba64561124ecf4",
				"5bde79e41a4d6eadcaa30de0",
				"5d2dd36a3f41f30dffb74ae6",
				"5d1b14f133d4eb57229a2621",
				"5d296b920b85a42daa433504",
				"5d37e712a2a97c5b3dfe4899",
				"5d2b16689dc64adfa7dec0a2",
				"5c3d580e0cc3ba4eb828a24a",
				"5ccd28c00492731d8d5f0919",
				"5be2757b593f0316339384da",
				"5b1f910188c771f2fdc17456",
				"5c74e96c4c5c543f065fca4e",
				"5d2c52d00a952aa01867f256",
				"5bdafe85d5d1acc298bc23bb",
				"5d27260fc28b773767d11ee0",
				"5c6e23ee67d58de31882fabe",
				"5d346924f9308d94d41bd910",
				"5d3a66c2960ccf277dc69f8d",
				"5c725aaba6fe4a001ada9a62",
				"5d35a49dc17cb3f83d574b39"
				]
			}
		}
	}
</script>