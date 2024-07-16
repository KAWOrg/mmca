<template>
  컴포넌트를 갈아끼울 탭
  <nav>
    <router-link to="/">서울</router-link> |
    <router-link to="/">과천</router-link> |
    <router-link to="/">덕수궁</router-link> |
    <router-link to="/">청주</router-link>
  </nav>

  페이지 이동할 네비바
  <nav>
    <router-link to="/exhibit">전시</router-link> |
    <router-link to="/edu">교육</router-link> |
    <router-link to="/event">이벤트</router-link> |
    <router-link to="/digital">디지털 미술관</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
