<template>
	<form class="todo-form form-todo">
		<input class="todo-input input-todo" v-model="todoInput" type="text" placeholder="todo's">
		<slot></slot>
	</form>
</template>

<script>
export default {
	name: "todoForm"
}
</script>

<style scoped>

.todo-form {
	position: static;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.form-todo {
	background-color: #2e3436;
	padding: 30px;
	border-radius: 25px;
}

.todo-input {
	line-height: 40px;
	width: 100%;
	min-width: 320px;
	max-width: 520px;
}

.input-todo {
	padding: 0 15px;
	font-size: 18px;
	color: #3e9abc;
	border: 0;
	border: none;
	outline: none;
	background-color: transparent;
	margin-bottom: 10px;
	border-bottom: 2px solid #3b4345;
	transition: border-bottom-color .2s ease;
}

.input-todo:hover {
	border-bottom: 2px solid #3e9abc;
}

</style>
