<template>
  <div class="tab">
    <ul class="tab__menu">
      <li
        v-for="tab in tabs" 
        :key="tab.title" 
        :class="selectedTab === tab.content ? 'tab__item tab__item--active' : 'tab__item'"
      >
        <button class="btn tab__button" @click="handleOnClickTab(tab.content)">{{tab.title}}</button>
      </li>
    </ul>
    <div class="tab__content" id="pills-tabContent">
      <div class="tab__pane p-4" v-html="selectedTab"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    activeTab: {
      type: [String, Number, Object],
      required: true,
    },
  },
  data () {
    return {
      selectedTab: '',
    }
  },
  methods: {
    handleOnClickTab (selectedTab) {
      this.selectedTab = selectedTab;
    }
  },
  mounted () {
    this.selectedTab = this.activeTab;
  }
}
</script>