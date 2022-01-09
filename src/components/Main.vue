<template>
	<div class="todo-wrapper">
		<form class="todo-form">
			<input class="todo-input input-todo" v-model="todoInput" type="text" >
		</form>
	</div>
</template>

<script>
export default {
	name: "Main",
	data() {
		return {
			todoInput: '',
		}
	}

}
</script>

<style scoped>
.todo-wrapper {
	width: 100%;
}
</style>
