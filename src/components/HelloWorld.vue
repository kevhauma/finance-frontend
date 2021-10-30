<template>
  <div>
    <vs-row :w="12" justify="center">
      <vs-card>
        <template #title>
          <h3>Pot with a plant</h3>
        </template>
        <template #img>
          <img src="https://vuesax.com/foto5.png" alt="" />
        </template>
        <template #text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </template>
        <template #interactions> </template>
      </vs-card>
    </vs-row>
    <vs-row :w="12" justify="center">
      <vs-button> Default </vs-button>
      <vs-button flat> flat </vs-button>
      <vs-button border> border </vs-button>
      <vs-button shadow> shadow </vs-button>
      <vs-button relief> relief </vs-button>
    </vs-row>
    <vs-row :w="12" justify="center">
      <vs-button gradient> Default </vs-button>
      <vs-button flat gradient> flat </vs-button>
      <vs-button border gradient> border </vs-button>
      <vs-button shadow gradient> shadow </vs-button>
      <vs-button relief gradient> relief </vs-button>
    </vs-row>
    <vs-row :w="12" justify="center">
      <vs-button success> Default </vs-button>
      <vs-button success flat> flat </vs-button>
      <vs-button success border> border </vs-button>
      <vs-button success shadow> shadow </vs-button>
      <vs-button success relief> relief </vs-button>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({ active: 0 }),
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
