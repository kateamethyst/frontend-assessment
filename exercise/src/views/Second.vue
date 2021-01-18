<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-sm-12">
        <div class="shadow-sm border rounded --display-desktop">
          <tab
            :tabs="data"
            :activeTab="activeTab"
          >
          </tab>
        </div>
        <div class="shadow-sm border rounded --display-mobile">
          <accordion :accordions="data" :activeTab="0"></accordion>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from '../components/Tab.vue';
import Accordion from '../components/Accordion.vue';
import jsonData from '../../../data.json';
export default {
  components: {
    Tab,
    Accordion
  },
  data () {
    return {
      data: jsonData,
      activeTab: jsonData[0].content,
    }
  },
}
</script>
