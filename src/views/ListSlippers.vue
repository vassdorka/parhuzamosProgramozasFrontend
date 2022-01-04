<template>
  <div>
      <a class="btn btn-success" id="btn-btn-succ" href="addListSlippers" role="button">Add New</a>
    <b-list-group v-for="listSlippers in listSlippers" :key="listSlippers.id">
      <b-list-group-item id="list">
        <div id="infos">
          Name: {{ listSlippers.name }}
          <small class="text-secondary"> color: {{ listSlippers.color }} </small>
          <small class="text-secondary"> size: {{ listSlippers.size }} </small>
          <small class="text-secondary"> shape: {{ listSlippers.shape }} </small>
        </div>
        <div id="buttons">
          <b-button variant="light" @click="editSlipper(listSlippers.id)" class="mr-2">
            Edit
          </b-button>
          <b-button variant="dark" @click="deleteSlipper(listSlippers.id)">
            Delete
          </b-button>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listSlippers: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/ListSlippers")
        .then((response) => {
          this.listSlippers = response.data;
        });
    },
    editSlipper(id) {
      this.$router.push("editListSlippers/" + id)
    },
    deleteSlipper(id) {
      this.axios
        .delete("https://localhost:5001/api/ListSlippers/" + id)
        .then(() => {
          this.updateList();
          alert("success");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>
<style>
#btn-btn-succ {
  margin-top: 5px;
  margin-bottom: 25px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
}
#btn-btn-dark:hover {
  opacity: 0.8;
  transition: 0.1s;
}
#list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
}
#infos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
#buttons {
  display: flex;
  flex-direction: column;
  margin-left: 25px;
}
.mr-2 {
  margin-bottom: 5px;
}
</style>

<style lang="scss" scoped>
</style>