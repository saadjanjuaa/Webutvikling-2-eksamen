<template>

	<page-header></page-header>

	<div class="container">
		<router-view></router-view>
	</div>
  
</template>


<script>
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import PageHeader from './components/shared/PageHeader.vue'

export default {
	name: 'App',
  components: {
    PageHeader,
  }
}
</script>


<style>

@font-face {
  font-family: circularStd;
	src: url(@/assets/CircularStd-Medium.ttf);
}

* {
  font-family: circularStd;
}

</style>
