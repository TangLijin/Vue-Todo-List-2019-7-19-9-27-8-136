<template>
  <div v-bind:class="{checkClass:checked}">
    <input type="checkbox" v-model="checked" v-on:change="handleSelect" />
    <span
      :contenteditable="true"
      @blur="editName"
      @keydown.enter="updateTaskName"
    >{{changeField}}</span>
  </div>
</template>
<script>
export default {
  name: "TodoListItem",
  props: {
    listItem: Object
  },
  data: function() {
    return {
      checked: this.listItem.checked,
      changeField: this.listItem.value
    };
  },
  methods: {
    handleSelect: function() {
      this.$emit("handle-select", this.checked, this.listItem.id);
    },
    editName: function(event) {
      this.isNameEdiable = true;
      this.changeField = event.target.innerText;
      this.$emit("update-task-name", this.changeField, this.listItem.id);
    },
    updateTaskName: function() {
      this.$el.querySelector("span").blur();
      this.$emit("update-task-name", this.changeField, this.listItem.id);
    }
  }
};
</script>

