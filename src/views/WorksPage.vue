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
				"5d3ae6c19788527fe2663b2b",
				"5bece16922321f320de51da8",
				"5bece16922321f320de51da8",
				"5bece16922321f320de51da8",
				"5bece16922321f320de51da8",
				"5bece16922321f320de51da8",
				"5bece16922321f320de51da8",
				"5bece16922321f320de51da8",
				]
			}
		}
	}
</script>