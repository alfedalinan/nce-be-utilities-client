<template>
    <div class="row">
        <!-- <div class="col-xl-3 col-lg-3 col-md-2">
          <select class="form-control">
              <option value="">- Select Environment -</option>
              <option value="junyverse">Junyverse Sweden</option>
          </select>
      </div> -->
        <div class="col-xl-3 col-lg-3 col-md-3">
          <input type="text" class="form-control" placeholder="Sender" />
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3">
          <input type="text" class="form-control" placeholder="Receiver" />
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2">
          <button v-on:click="fetchData()" class="btn btn-eh" type="button">Check</button>
        </div>

        <div class="col-12" id="userSettings" >
            <div class="spin-container" v-if="showSpin" >
            <img src="@/assets/img/loaders/vue-spin.gif" class="generic-spin" />
        </div>

        <vue-good-table v-if="showTable"
        :columns="columns" 
        :rows="rows">
        </vue-good-table>

      </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {
        showTable: true,
        showSpin: false
    },
    data() {
        return {
            columns: [
                {
                    label: "Sender",
                    field: "sender"
                },
                {
                    label: "Receiver",
                    field: "receiver"
                },
                {
                    label: "Date Sent",
                    field: "date"
                },
                {
                    label: "Status",
                    field: "status"
                }
            ],
            rows: [
                {
                    sender: "80030111976",
                    receiver: "82480349148",
                    status: "Pending",
                    date: `${new Date().toString().substr(4,21)}`
                },
                {
                    sender: "80030111976",
                    receiver: "82480349148",
                    status: "Pending",
                    date: `${new Date().toString().substr(4,21)}`
                },
                {
                    sender: "80030111976",
                    receiver: "82480349148",
                    status: "Pending",
                    date: `${new Date().toString().substr(4,21)}`
                },
                
            ],
        }
    },
    mounted() {
        
    },
    methods: {
        fetchData() {
            this.showSpin = true;
            this.showTable = false;

            setTimeout(() => {
                this.showSpin = false;
                this.showTable = true;
            }, 1500);
        }
    }
}

</script>