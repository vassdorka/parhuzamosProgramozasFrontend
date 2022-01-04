<template>
  <div>
    <b-card title="Add list slippers">

      <b-form-input v-model="name" placeholder="Enter name" id="input" ></b-form-input> 

      <b-form-input v-model="color" placeholder="Enter color" id="input"></b-form-input>

      <b-form-input v-model="size" placeholder="Enter size" id="input"></b-form-input>

      <b-form-input v-model="shape" placeholder="Enter shape" id="input"></b-form-input>

      <b-button id="saveBtn" variant="success" @click="saveSlipper" >Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      color: "",
      size: "",
      shape: "",
    };
  },
  methods: {
    saveSlipper() {
      let params = {
        name: this.name,
        color: this.color,
        size: this.size,
        shape: this.shape
      }

      this.axios
        .post("https://localhost:5001/api/ListSlippers", params)
        .then(() => {
          alert("success");
          this.$router.push("listSlippers");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style>
.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#input {
  width: 20%;
  margin: 10px;
}
#saveBtn {
  margin-top: 20px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>

<style lang="scss" scoped>
</style>