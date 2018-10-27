<template>
  <div 
    class="moon"
  >

  </div>
</template>

<script>
export default {
  name: "Moon"
};
</script>

<style lang="scss" scoped>
.moon {
  position: absolute;
  height: 100px;
  width: 100px;
  background-image: url("https://3dexport.com/items/2015/02/20/385337/100201/moon_texture_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1258985_o.png");
  background-size: cover;
  box-shadow: 0px 0px 12px 4px white;
  filter: brightness(1.5);
  z-index: 1;
  right: 10%;
  top: 15%;
  border-radius: 100px;
}
</style>
