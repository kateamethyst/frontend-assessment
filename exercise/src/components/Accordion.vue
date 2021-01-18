<template>
  <div class="accordion">
    <div class="accordion__content" v-for="(accordion, index) in data" :key="accordion.title">
      <div :class="`accordion__header ${accordion.is_active ? 'accordion__header-active' : ''}`">
        <button class="accordion__title" type="button" @click="toggle(index)">
          {{accordion.title}}
        </button>
      </div>
      <div v-if="accordion.is_active" class="accordion__collapse">
        <div class="accordion__body" v-html="accordion.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    accordions: {
      type: Array,
      required: true,
    },
    activeTab: {
      type: [String, Number, Object],
      required: true,
    }
  },
  data () {
    return {
      data: [],
      selectedTab: '',
    }
  },
  methods: {
    toggle (selectedTab) {
      this.data = this.data.map((data, index) => {
        if (selectedTab === index) {
          return {
            ...data,
            is_active: !data.is_active,
          }
        }
        return {
          ...data,
          is_active: false,
        }
      })
    },
  },
  mounted () {
    this.selectedTab = this.activeTab;
    this.data = this.accordions.map(accordion => {
      return {
        ...accordion,
        is_active: false,
      }
    });
    // set the first accordion to active
    this.data[0].is_active = true;
  }
}
</script>