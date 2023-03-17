<script>

    let authenticated = false;

</script>


<div class="navbar bg-base-200 p-2 fixed">
    <div class="navbar-start">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <div class="dropdown">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a>Item 1</a></li>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <li tabindex="0">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="justify-between">
              Parent
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
            </a>
            <ul class="p-2">
              <li><a href="/">Submenu 1</a></li>
              <li><a href="/">Submenu 2</a></li>
            </ul>
          </li>
          <li><a href="/">Item 3</a></li>
        </ul>
      </div>
      <a href="/" class="btn btn-ghost normal-case text-xl">Macro Monkeys</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/levels">Levels</a></li>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <li tabindex="0">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a>
            Parent
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><a href="/">Submenu 1</a></li>
            <li><a href="/">Submenu 2</a></li>
          </ul>
        </li>
        <li><a href="/">Item 3</a></li>
      </ul>
    </div>
    <div class="navbar-end">
        {#if authenticated}
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div class="dropdown dropdown-end">
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="https://www.w3schools.com/howto/img_avatar.png" />
              </div>
            </label>
            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li><a href="/" >Profile</a></li>
              <li><a href="/" >Settings</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
          </div>
        {:else}
            <a href="/login" class="btn btn-ghost">Login</a>
            <a href="/signup" class="btn btn-primary">Signup</a>
          {/if}
    </div>
  </div>