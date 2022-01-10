<template>
	<div class="todo-list list-todo">
		<div class="todo-item item-todo">
			<h2 class="item-header">Do todo some todos</h2>
			<btn-delete>Удалить</btn-delete>
			<div class="todo-body">
				<span class="item-text">
				<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur consequuntur eligendi eos est ex fugit ipsa ipsum minus odio provident, quae quasi quisquam repudiandae sapiente ullam vel voluptatum? In.</span><span>Assumenda, consectetur eaque hic illo incidunt, itaque labore laborum natus placeat repellendus tempora veniam? Amet consequatur dignissimos id illo odio porro, possimus praesentium saepe, similique sit suscipit totam unde veritatis!</span><span>Alias animi commodi consectetur deleniti distinctio earum error est impedit inventore iure iusto laboriosam laborum magnam, minus molestias necessitatibus optio possimus provident quaerat, quas saepe sed suscipit, ut veniam voluptatem!</span><span>A, adipisci aliquid aperiam atque blanditiis consequuntur culpa cumque debitis doloribus ea eaque eveniet ex fugiat illo in ipsa molestiae molestias mollitia non porro quam quibusdam sit, unde, ut voluptate?</span><span>Alias animi atque commodi delectus dolor earum, harum minima porro possimus reprehenderit, suscipit unde veniam. Amet, animi atque expedita facere fugiat ipsum, odit qui ratione rem reprehenderit ut veniam veritatis.</span><span>Assumenda autem culpa debitis, enim error, esse, exercitationem iste nihil nulla officia pariatur quo quod repudiandae sapiente vitae voluptas voluptatem voluptatibus voluptatum. Aliquam animi distinctio illo inventore omnis possimus sequi!</span><span>Dignissimos non numquam, omnis quo repudiandae suscipit. Amet, atque dignissimos doloremque dolorum eos fuga fugiat hic incidunt laborum molestiae nesciunt, nisi placeat quas quasi, qui repellendus saepe similique ullam veritatis!</span><span>Asperiores blanditiis consequuntur cumque deserunt eligendi, magni neque, nulla quis quisquam reiciendis sunt voluptatum. Esse fugit hic, ipsum minima minus molestiae omnis placeat praesentium quaerat repudiandae rerum sed unde voluptas!</span><span>Ad aliquam aperiam architecto asperiores commodi, cum cupiditate dolore ducimus eligendi, error facere inventore nemo nisi nostrum officia perferendis praesentium quasi quis recusandae repudiandae sed temporibus tenetur vel voluptate voluptatibus?</span><span>Amet dolor eligendi ex excepturi explicabo fugit harum impedit iste, iure labore nisi obcaecati pariatur quibusdam! Architecto consequuntur iste nostrum optio? Deserunt distinctio, error mollitia perferendis quo rem saepe sed?</span>
			</span>
				<span class="item-date">03.05.2021</span>
			</div>
		</div>
	</div>
</template>

<script>
import BtnDelete from "@/components/UI/btnDelete";
export default {
	name: "todoList",
	components: {BtnDelete}
}
</script>

<style scoped>
.todo-list {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 50px;
}

.todo-item {
	display: flex;
	flex-direction: column;
	padding: 20px;
	margin-top: 40px;
}
.todo-item:first-child {
	margin-top: 0;
}

.item-todo {
	border-radius: 15px;
	background-color: #0f6674;
}

.item-header {
	color: whitesmoke;
	align-self: start;
}

.item-text {
	color: #e0e0e0;
	margin: 10px 0 10px 0;

}

.item-date {
	color: #08414b;
	font-style: italic;
	align-self: end;
}
</style>
