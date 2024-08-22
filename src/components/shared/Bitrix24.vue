<template>
  <div></div>
</template>

<script>
export default {
  name: "BitrixWidget",
  mounted() {
    (function (w, d, u) {
      var s = d.createElement("script");
      s.async = true;
      s.src = u + "?" + ((Date.now() / 60000) | 0);
      var h = d.getElementsByTagName("script")[0];
      h.parentNode.insertBefore(s, h);
    })(
      window,
      document,
      "https://cdn.bitrix24.com/b27826473/crm/site_button/loader_100_uvbia4.js"
    );
  },
};
</script>