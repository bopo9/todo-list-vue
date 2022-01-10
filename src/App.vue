<template>
  <div id="app" >
    <div class="container">
		<router-view></router-view>
	</div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      isAuth: false
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
	display: flex;
	justify-content: center;
	width: 100vw;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.container {
	width: 100%;
	max-width: 1024px;
	padding: 0 20px 0 20px
}
</style>
