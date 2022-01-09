<template>
	<div class="auth-wrapper">
		<form class="auth-form form-auth-style">
			<input v-model="email" class="auth-input input-auth" type="email" name="loginEmail" placeholder="Email">

			<input v-model="password" class="auth-input input-auth" type="password" name="password" placeholder="Password">

			<router-link class="auth-link" to="/sign-up">Нет аккаунта? Зарегистрируйся!</router-link>
		</form>
	</div>
</template>

<script>
export default {
	name: "signIn",
	data() {
		return {
			email: '',
			password: ''
		}
	}

}
</script>

<style>

.auth-wrapper {
	display: flex;
	justify-content: center;
	padding: 0 40px;
}

.auth-form {
	padding: 35px;
	height: auto;
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.form-auth-style {
	border-radius: 25px;
	background-color: #434343;
}

.auth-input {
	width: 100%;
	padding: 0 10px 0 10px;
	line-height: 40px;
	font-size: 18px;
	min-width: 300px;
	max-width: 450px;
}

.input-auth {
	color: #3e9abc;
	border: 0;
	border: none;
	outline: none;
	background-color: #434343;
	margin-bottom: 10px;
	border-bottom: 1px solid #555555;
	transition: border-bottom-color .2s ease;
}

.input-auth:hover {
	border-bottom: 1px solid #3e9abc;
}

.auth-link {
	text-decoration: none;
	color: white;
	transition: color .2s ease;
}

.auth-link:hover {
	color: #3e9abc;
}

</style>
