<template>
  <div>
    <h1>{{ companyInfo }}</h1>
    <div class="button-box">
      <!-- <li><router-link to="/"></router-link></li> -->
      <a href="#" class="button">Rockets</a>
      <a href="#" class="button">History</a>
      <a href="#" class="button">Chat</a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      companyInfo: ""
    };
  },
  methods: {
    fetchSummaryData: function() {
      fetch("https://api.spacexdata.com/v3/info", {
        method: "GET"
      })
        .then(response => response.json())
        .then(info => {
          console.log(info.summary);
          this.companyInfo = info.summary;
        })
        .catch(function(error) {
          console.log(error, "<-- error");
        });
    }
  },

  created: function() {
    this.fetchSummaryData();
  }
};
</script>

<style>
h1 {
  margin: 70px;
  font-size: 30px;
}
.button-box {
  display: flex;
  justify-content: center;
}
a.button {
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  /* font-family: "Roboto", sans-serif; */
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
}
a.button:hover {
  color: #0c0c0c;
  background: #ffffff;
}
@media all and (max-width: 30em) {
  a.button {
    display: block;
    margin: 0.4em auto;
  }
}
</style>
