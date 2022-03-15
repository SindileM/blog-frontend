<template>
  <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link active" href="#header">Home</a></li>
          <li><a class="nav-link" href="#about">About</a></li>
          <li><a class="nav-link" href="#resume">Blogs</a></li>
          <li><a class="nav-link" href="#services">Log-in</a></li>
          <li><a class="nav-link" href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style>
.navbar {
  padding: 0;
  margin-top: 35px;
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: right;
}
.navbar li {
  position: relative;
}
.navbar li + li {
  margin-left: 30px;
}
.navbar a, .navbar a:focus {
  display: flex;
  align-items: right center;
  justify-content: space-between;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: black;
  white-space: nowrap;
  transition: 0.3s;
  opacity: 60%;
}
.navbar a i, .navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}
.navbar a:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #18d26e;
  visibility: hidden;
  width: 0px;
  transition: all 0.3s ease-in-out 0s;
}
.navbar a:hover:before, .navbar li:hover > a:before, .navbar .active:before {
  visibility: visible;
  width: 25px;
}
.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
  color:black
}

</style>