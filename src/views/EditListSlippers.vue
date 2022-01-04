<template>
  <div>
    <b-card :title="'Edit list slipper with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter name" id="input" ></b-form-input>

      <b-form-input v-model="color" placeholder="Enter color" id="input" ></b-form-input>

      <b-form-input v-model="size" placeholder="Enter size" id="input" ></b-form-input>

      <b-form-input v-model="shape" placeholder="Enter shape" id="input" ></b-form-input>

      <b-button id="saveBtn" variant="success" @click="saveSlipper">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      color: "",
      size: "",
      shape: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getSlipById();
  },
  methods: {
    getSlipById() {
      this.axios
        .get("https://localhost:5001/api/ListSlippers/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.color = response.data.color;
          this.size = response.data.size;
          this.shape = response.data.shape;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveSlipper() {
      let params = {
        id: this.id,
        name: this.name,
        color: this.color,
        size: this.size,
        shape: this.shape
      }

      this.axios
        .put("https://localhost:5001/api/ListSlippers/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/ListSlippers");
        })
        .catch(() => {
          alert("failed");
        });
    }
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