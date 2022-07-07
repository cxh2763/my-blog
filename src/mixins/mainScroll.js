export default (refval = null) => {
  if (!refval) {
    return
  }
  return {
    mounted() {
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
      this.$refs[refval].addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      this.$bus.$emit("mainScroll");
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
      this.$refs[refval].removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refval]);
      },
      handleSetMainScroll(top) {
        this.$refs[refval].scrollTop = top;
      },
    }
  }
}