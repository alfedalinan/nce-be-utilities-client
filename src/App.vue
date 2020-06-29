<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.vue-notifyjs.notifications {
  .alert {
    z-index: 10000;
  }
  .list-move {
    transition: transform 0.3s, opacity 0.4s;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active {
    transition: transform 0.2s ease-in, opacity 0.4s ease-in;
  }
  .list-leave-active {
    transition: transform 1s ease-out, opacity 0.4s ease-out;
  }

  .list-enter {
    opacity: 0;
    transform: scale(1.1);
  }
  .list-leave-to {
    opacity: 0;
    transform: scale(1.2, 0.7);
  }
}
.navbar.navbar-light {
  background-color: #e3543c !important;
}
.navbar .navbar-brand {
  color: #efefef !important;
}
.navbar .navbar-nav .nav-item .nav-link {
  color: #efefef !important;
}
.navbar .nav-link p {
  color: #efefef !important;
}
.btn {
 background: #e3543c !important; 
 border-color: #e3543c !important;
}
.content th { 
 background: #e3543c !important; 
 border-color: #e3543c !important;
 color: #efefef !important;
}
</style>
