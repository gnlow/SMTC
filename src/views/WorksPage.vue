<template>
	<Main title='참여 작품 모음' subtitle="어떤 멋진 작품들이 제출되었을까요?" id="area3" class="worksarea">
		<h1>
			1차
		</h1>
		<h1>
			2차
		</h1>
		<Thumb works-id="5bece16922321f320de51da8"/>
		
	</Main>
</template>

<script>
	import Main from '../components/Main.vue'
	import Thumb from '../components/Thumb.vue'

	export default {
		name: 'WorksPage',
		components: {
			Main, 
			Thumb
		}
	}
</script>