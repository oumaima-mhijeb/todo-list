<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-item navbar-brand" href="#">Todo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/"
              ><a class="navbar-item nav-link active" aria-current="page"
                >Home</a
              ></router-link
            >
    
          </li>
          <li class="nav-item">
            <router-link to="/about">
              <a class="navbar-item nav-link">About</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav-bar",
};
</script>

<style>
.navbar-item {
  color: white !important;
  /* font-weight: bold !important; */
}
.navbar {
  background-color: #008b8b !important;
}
</style>