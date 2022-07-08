<template>
  <v-container>
    1. Run vessel segmentation: <br><br>
    <button class="btn">
    <img 
    src="@src/components/icons/thumbnail_pokoncna_ozilje_mra.png"
    alt="MRA vessel segmentation"
    class="image-fit"
    width="200" 
    height="140"
    />
    </button>

    <button class="btn">
    <img 
    src="@src/components/icons/thumbnail_pokoncna_ozilje_cta.png"
    alt="CTA vessel segmentation"
    class="image-fit"
    width="200" 
    height="140"
    />
    </button>
    <br><br>
    2. Run aneurysm detection and segmentation: <br><br>
    <button class="btn">
    <img 
    src="@src/components/icons/thumbnail_pokoncna_anevrizma_det.png"
    alt="Aneurysm detection"
    class="image-fit"
    width="200" 
    height="140"
    />
    </button>

    <button class="btn">
    <img 
    src="@src/components/icons/thumbnail_pokoncna_anevrizma_seg.png"
    alt="Aneurysm segmentation"
    class="image-fit"
    width="200" 
    height="140"
    />
    </button>

  </v-container>
</template>

<style-scoped>
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

</style>