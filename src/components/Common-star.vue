<script>
import { withHooks } from "vue-hooks";
import { useRandomStyles } from "@/hooks/useRandomStyles";

const CommonStar = withHooks(h => {
  const randomStyles = useRandomStyles();

  return h("div", {
    class: {
      star: true
    },
    style: {
      ...randomStyles.styles,
      backgroundColor: "white",
      position: "absolute",
      borderRadius: "100%"
    }
  });
});

export default CommonStar;
</script>