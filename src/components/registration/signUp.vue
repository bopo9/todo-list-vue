<template>
	<div class="auth-wrapper">
		<form class="auth-form form-auth-style">
			<input v-model="nickname" class="auth-input input-auth" type="text" name="loginName" placeholder="Nickname">

			<input v-model="email" class="auth-input input-auth" type="email" name="loginEmail" placeholder="Email">

			<input v-model="password" class="auth-input input-auth" type="password" name="password" placeholder="Password">

			<input v-model="confirmPassword" class="auth-input input-auth" type="password" name="confirmPassword" placeholder="Confirm Password">
			<router-link class="auth-link" to="/sign-in">Есть аккаунта? Залогинься!</router-link>
		</form>
	</div>
</template>

<script>
export default {
	name: "signUp",
	data() {
		return {
			nickname: '',
			email: '',
			password: '',
			confirmPassword: '',
		}
	}

}
</script>

<style>

</style>
