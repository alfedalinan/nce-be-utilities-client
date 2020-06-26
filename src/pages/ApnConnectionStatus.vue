<template>

    <div class="row">

        <div class="col-lg-4 col-md-4 col-sm-4">

            <select class="form-control" v-model="key" @change="changeEnv($event)">
                <option value="">- Select Environment - </option>
                <option value="junyverse">Junyverse Sweden</option>
            </select>

        </div>
    
        <div class="col-lg-12 col-md-6 col-sm-12" style="margin-top: 15px;">
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
    component: {

    },
    data() {
        return {
            columns: [
                {
                    label: "Server",
                    field: "server"
                },
                {
                    label: "Type",
                    field: "type"
                },
                {
                    label: "Connection Status",
                    field: "connection_status"
                }
            ],
            rows: [
                {
                    server: "Junyverse Sweden",
                    type: "APN",
                    connection_status: "CONNECTED"
                },
                {
                    server: "Junyverse Sweden",
                    type: "Pushkit",
                    connection_status: "CONNECTED"
                }
            ],
            key: "",
            showSpin: false,
            showTable: false
        }
    },
    methods: {
        changeEnv(event) {
            this.showSpin = true;
            this.showTable = false;

            setTimeout(() => {
                this.showSpin = false;
                
                if (this.key != '') {
                    this.showTable = true;
                }

            }, 1500);
        }
    }
}
</script>