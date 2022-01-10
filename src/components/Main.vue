<template>
	<div class="todo-wrapper">
		<h1>Todo List</h1>
		<todo-form>
			<button-form>
				Добавить
			</button-form>
		</todo-form>
		<todo-list></todo-list>
	</div>
</template>

<script>
import TodoForm from "@/components/todoForm";
import TodoList from "@/components/todoList";
import ButtonForm from "@/components/UI/buttonForm";

export default {
	name: "Main",
	components: {ButtonForm, TodoList, TodoForm},
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
	display: flex;
	flex-direction: column;
	margin-top: 50px;
}
</style>
