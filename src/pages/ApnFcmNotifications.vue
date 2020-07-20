<template>
    <div class="row">
        <!-- <div class="col-xl-3 col-lg-3 col-md-2">
          <select class="form-control">
              <option value="">- Select Environment -</option>
              <option value="junyverse">Junyverse Sweden</option>
          </select>
      </div> -->
        <div class="col-xl-3 col-lg-3 col-md-3">
          <input type="text" class="form-control" placeholder="Enter Apollo ID" />
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
                    label: "ID",
                    field: "id"
                },
                {
                    label: "Body",
                    field: "body"
                },
                {
                    label: "Date",
                    field: "date"
                },
                {
                    label: "Status",
                    field: "status"
                },
                {
                    label: "Reason",
                    field: "reason"
                }
            ],
            rows: [
                {
                    id: "80030111976", 
                    // payload: '{"aps":{"alert":{"title":"Isler","body":"Jffu"},"sound":"message_incoming.wav","type":"SMS","name":"82761297184","ts":Date.now(),"v":1,"category":"SMS","d_list":"","member":"","orig_dlist":"","batch":null,"contact_name":null}}',
                    body: "Debug0",
                    status: 2,
                    date: `${new Date().toString().substr(4,21)}`,
                    reason: "Sent to Recipient"
                },
                {
                    id: "80030111976", 
                    // payload: '{"aps":{"alert":{"title":"Isler","body":"Jffu"},"sound":"message_incoming.wav","type":"SMS","name":"82761297184","ts":Date.now(),"v":1,"category":"SMS","d_list":"","member":"","orig_dlist":"","batch":null,"contact_name":null}}',
                    body: "Debug1",
                    status: 2,
                    date: `${new Date().toString().substr(4,21)}`,
                    reason: "Sent to Recipient"
                },
                {
                    id: "80030111976", 
                    // payload: '{"aps":{"alert":{"title":"Isler","body":"Jffu"},"sound":"message_incoming.wav","type":"SMS","name":"82761297184","ts":Date.now(),"v":1,"category":"SMS","d_list":"","member":"","orig_dlist":"","batch":null,"contact_name":null}}',
                    body: "Debug2",
                    status: 2,
                    date: `${new Date().toString().substr(4,21)}`,
                    reason: "Sent to Recipient"
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