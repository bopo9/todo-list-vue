<template>
	<button  class="btn btn-submit">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "btnDelete"
}
</script>

<style scoped>
.btn {
	position: absolute;
	align-self: end;
	line-height: 40px;
	padding: 0 25px;
}

.btn-submit {
	color: #1c7430;
	background-color: transparent;
	outline: none;
	transition: all .2s ease;
	cursor: pointer;
	border: 1px solid transparent;
	font-size: 16px;
	text-transform: uppercase;
}

.btn-submit:hover {
	border-bottom: 1px solid #1ADBA2;
	border-radius: 20%;
	color: #1ADBA2;
}
</style>
