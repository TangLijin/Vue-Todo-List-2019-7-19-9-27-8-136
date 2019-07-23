<template>
    <div id="Footer">
        <ul class="filters">
            <li @click="selectAllItems" :class="{filterButton: clickAll}">ALL</li>
            <li @click="selectActiveItems" :class="{filterButton: clickActive}">Active</li>
            <li @click="selectCompleteItems" :class="{filterButton: clickComplete}">Complete</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Footer",
    data() {
    return {
      clickAll: true,
      clickActive: false,
      clickComplete: false
    }
  },
  methods: {
    selectAllItems: function() {
      const filterTodolistItem = (list) => {
        return list;
      }
      this.clickAll = true;
      this.clickActive = false;
      this.clickComplete = false;
      this.$emit('getChildStatus', filterTodolistItem);
    },
    selectActiveItems: function() {
      const filterTodolistItem = (list) => {
        return list.filter(item => !item.checked);
      }
      this.clickAll = false;
      this.clickActive = true;
      this.clickComplete = false;
      this.$emit('getChildStatus', filterTodolistItem);
    },
    selectCompleteItems: function() {
      const filterTodolistItem = (list) => {
        return list.filter(item => item.checked);
      }
      this.clickAll = false;
      this.clickActive = false;
      this.clickComplete = true;
      this.$emit('getChildStatus', filterTodolistItem);
    }
  }
   
}
</script>
