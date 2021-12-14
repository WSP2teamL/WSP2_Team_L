<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">홈</router-link>
      <router-link to="/list">공원 리스트</router-link>
      <router-link to="/search">지도 검색</router-link>
    </div>
    <hr class="line" />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: x-large;
  display: flex;
  text-align: center;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
  margin-left: 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.line {
  width: 25rem;
  margin: 0 auto;
  color: ;
}
</style>
