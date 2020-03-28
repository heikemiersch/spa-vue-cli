<template>
  <div>
    <h1>{{ rockets }}</h1>
    <div class="button-box">
      <a href="#" class="button">Rockets</a>
      <a href="#" class="button">History</a>
      <a href="#" class="button">Home</a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      rockets: ""
    };
  },
  methods: {
    fetchRocketsData: function() {
      let urlArray = [
        "https://api.spacexdata.com/v3/rockets",
        "https://api.spacexdata.com/v3/dragons"
      ];

      Promise.all(urlArray.map(url => fetch(url).then(resp => resp.json())))
        .then(data => {
          console.log(data);
          let rockets = data[0];
          let dragons = data[1];
          console.log(dragons);
        })
        .catch(function(error) {
          console.log(error, "<-- error");
        });
    }
  },
  created: function() {
    this.fetchRocketsData();
  }
};
</script>

<style></style>
