<template>
    <div class="row">
      <!-- <div class="col-xl-4 col-lg-4 col-md-4">
          <select class="form-control">
              <option value="">- Select Environment -</option>
              <option value="junyverse">Junyverse Sweden</option>
          </select>
      </div> -->
      <div class="col-xl-6 col-lg-6 col-md-6">
          <input-tag v-model="tags" placeholder="Enter ID or MSISDN (GSM)"></input-tag>
      </div>
      <div class="col-xl-2 col-lg-2 col-md-2">
          <button v-on:click="fetchData()" class="btn btn-eh" type="button">Submit</button>
      </div>

      <div class="col-12" id="userSettings" >
        <div class="spin-container" v-if="showSpin" >
            <img src="@/assets/img/loaders/vue-spin.gif" class="generic-spin" />
        </div>
        <!-- <card :title="table1.title" :subTitle="table1.subTitle" v-if="showTable">
          <div slot="raw-content" class="table-responsive">
            <paper-table type="hover" :data="table1.data" :columns="table1.columns">
            </paper-table>
          </div>
        </card> -->
        
        <vue-good-table v-if="showTable"
        :columns="columns" 
        :rows="rows">

            <template slot="table-column" slot-scope="props">
                <span v-for="(column, index) in props" :key="index">
                    {{ column.label }}
                </span>
            </template>

            <template slot="table-row" slot-scope="props">
                 <span v-if="typeof props.row[ props.column.field ] == 'object'">
                     <span v-for="(value, prop) in props.row[ props.column.field ]" :key="prop">
                         <b>{{ prop.replace('_', ' ').toUpperCase() }}:</b> {{ props.row[ props.column.field ][prop] }} <br>
                     </span>
                 </span>
            </template>
        </vue-good-table>

      </div>
    </div>
</template>

<script>
// const tableColumns = ["Apollo ID", "MSISDN", "Connection Status", "Access Code", "Code Date", "Push Notification Tokens", "Token Status"];
// const tableData = [
//   {
//     name: "82480349148",
//     msisdn: "639260458637",
//     status: "ONLINE",
//     code: "4089",
//     code_date: "2020-06-24",
//     tokens: "FCM:\n2DEHA23124",
//     valid: "Valid"
//   },
//   {
//     name: "80030111976",
//     msisdn: "639496957584",
//     status: "OFFLINE",
//     code: "3458",
//     code_date: "2020-06-29",
//     tokens: "APN: 2DEHA23124 | Pushkit: 24fhfdskahfa",
//     valid: "--"
//   }
// ];

import InputTag from 'vue-input-tag';

import config from '../config/app';

export default {
    components: {
        InputTag
    },
    props: {
        showTable: false,
        showSpin: false
    },
    data() {
        return {
            tag: '',
            tags: [],
            // table1: {
            //     title: "Results for: ",
            //     subTitle: "82480349148, 80030111976",
            //     columns: [...tableColumns],
            //     data: [...tableData]
            // },

            // columns: [
            //     {
            //         label: "Information",
            //         field: "info"
            //     },
            //     {
            //         label: "82480349148",
            //         field: "82480349148"
            //     },
            //     {
            //         label: "80030111976",
            //         field: "80030111976"
            //     }
            // ],
            // rows: [
            //     {
            //         info: "Verification Code",
            //         "82480349148": {},
            //         "80030111976": {}
            //     },
            //     {
            //         info: "Account Information",
            //         "82480349148": {},
            //         "80030111976": {}
            //     }
            // ]

            columns: [],
            rows: [],
        };
    },
    methods: {
        fetchData() {

            var col = [];
            var row = [];

            // Fields Expected 
            var reverseFields = config.userSettingsFields;

            this.showSpin = true;
            this.showTable = false;

            setTimeout(() => { 
                this.showSpin = false;
                this.showTable = true;
            }, 1500);

            // Your sample data fetched from server
            var rows = [
                {
                    id: {
                        name: "82480349148",
                        status: "OFFLINE"
                    },
                    verification_code: {
                        code: "9456",
                        created: "2020-06-22 08:31:43"
                    },
                    account_info: {
                        id: "82480349148",
                        first_name: "Pids",
                        last_name: "Juny",
                        contact_phone: "639260458637",
                        email: "pids@juny.com",
                        created: "2020-06-11 09:41:01",
                        reg_status: "Registered",
                        expiry: " 2021-06-11 09:41:05"
                    },
                    last_known_device: {
                        os_version: "28",
                        os: "Android",
                        app_version: "1.0.0.0",
                        network: 1,
                        roaming: 0,
                        country: "ph",
                        updated: "2020-06-22 08:46:10"
                    }

                },
                {
                    id: {
                        name: "80030111976",
                        status: "ONLINE"
                    },
                    verification_code: {
                        code: "2375",
                        created: "2020-06-22 08:51:43"
                    },
                    account_info: {
                        id: "80030111976",
                        first_name: "Pey",
                        last_name: "Juny",
                        contact_phone: "639260458637",
                        email: "pey@juny.com",
                        created: "2020-06-11 09:41:01",
                        reg_status: "Registered",
                        expiry: " 2021-06-11 09:51:05"
                    },
                    last_known_device: {
                        os_version: "12.7",
                        os: "iOS",
                        app_version: "1.0.0.0",
                        network: 1,
                        roaming: 0,
                        country: "ph",
                        updated: "2020-06-22 08:49:10"
                    }
                },
                {
                    id: {
                        name: "83441112586",
                        status: "OFFLINE"
                    },
                    verification_code: {
                        code: "1125",
                        created: "2020-06-22 08:53:50"
                    },
                    account_info: {
                        id: "80030111976",
                        first_name: "Pey",
                        last_name: "Juny",
                        contact_phone: "639260458637",
                        email: "pids@juny.com",
                        created: "2020-06-11 09:41:01",
                        reg_status: "Registered",
                        expiry: " 2021-06-11 09:51:05"
                    },
                    last_known_device: {
                        os_version: "12.7",
                        os: "iOS",
                        app_version: "1.0.0.0",
                        network: 1,
                        roaming: 0,
                        country: "ph",
                        updated: "2020-06-22 08:49:15"
                    }
                }
            ];

            // First Column
            col.push({
                label: "Information",
                field: "info"
            });

            for (let index = 0; index < rows.length; index++) {

                // The rest of column (Apollo IDs of the user)
                col.push({
                    label: `${rows[index].id.name} (${rows[index].id.status})`,
                    field:  `${rows[index].id.name}`
                });
                // COLUMN COMPLETED HERE

            }

            for (let j = 0; j < reverseFields.length; j++) {
                
                var rowObjects = {};
                var reverseRowKey = ''

                for (let key in reverseFields[j]) {
                    reverseRowKey = key;
                    rowObjects['info'] = reverseFields[j][key];
                }

                for (let index = 0; index < rows.length; index++) {
                    
                    rowObjects[ rows[index].id.name ] = rows[index][ reverseRowKey ];

                }
                
                row.push(rowObjects);
            }

            this.columns = col;
            this.rows = row;

            console.log('columns: ', col)
            console.log('rows: ', row)
        }
    },
    mounted() {
    }
}
</script>
<style>

.generic-spin {
    width: 35%;
}
.spin-container {
    text-align: center;
}
#userSettings { 
    margin-top: 15px;
    min-height: 200px;
}
.pre {
    white-space:pre-line;
}
</style>