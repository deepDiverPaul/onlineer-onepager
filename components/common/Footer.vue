<template>
  <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded relative">
    <div class="grid grid-flow-col gap-4">
      <NuxtLink to="/imprint">Impressum</NuxtLink>
      <NuxtLink to="/privacy">Datenschutz</NuxtLink>
      <NuxtLink to="/terms">AGB</NuxtLink>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="https://twitter.com/paulspenke" target="_blank" title="Twitter">
          <icon name="simple-icons:twitter" size="1rem" />
        </a>
        <a href="https://github.com/deepDiverPaul" target="_blank" title="Github">
          <icon name="simple-icons:github" size="1rem" />
        </a>
        <a href="https://www.linkedin.com/in/paul-spenke-70104913b/" target="_blank" title="LinkedIn">
          <icon name="simple-icons:linkedin" size="1rem" />
        </a>
      </div>
    </div>
    <div class="pb-12">
      <p>Copyright © 2022 - Paul Spenke</p>
    </div>
    <designWaves position="bottom" />
  </footer>
</template>