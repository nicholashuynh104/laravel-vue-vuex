<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div>
                    Students Data
                    <el-button align="right" type="default" @click="create" >Add Student</el-button>
                </div>
            </div>
            <div>
                <el-table
                    :data = "tableData"
                    :stripe = "true"
                    :border = "true"
                    :height = "400"
                    style = "width:100%"
                    >
                    <el-table-column
                        v-for="(column) in tableColumns"
                        :key="column.label"
                        :prop="column.prop"
                        :label="column.label"
                        :column-key="column.prop"
                        :min-width="column.minWith"
                        :sortable="column.sortable"
                        :align="column.align"
                        :header-align="column.align"
                        :fixed="column.fixed || null"
                        :formatter="column.formatter || null"
                    >
                    </el-table-column>
                    <el-table-column align="right">
                        <template slot="header" slot-scope="scope">
                            <el-input v-model="search" size="mini" placeholder="Type to search"/>
                        </template>
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'student-table-component',
        mounted() {
            const loading = this.$loading({
                lock: true,
                text: "loading",
                spinner: 'el-icon-loading',
                backgroud: 'rgba(255, 255, 255,0.85)',
            });

            this.$store.dispatch('getStudents');
            loading.close();
        },
        computed: {
            ...mapGetters({
                tableData: "tableData"
            })
        },
        data() {
            return {
                tableColumns: [
                    {
                        prop: "id",
                        label: "ID",
                        minWidth: 40,
                        sortable: true,
                        hidden: false,
                        algin: "center",
                        fixed: true,
                    },
                    {
                        prop: "name",
                        label: "Name",
                        minWidth: 40,
                        sortable: true,
                        hidden: false,
                        algin: "center",
                        fixed: true,
                    },
                    {
                        prop: "class",
                        label: "Class",
                        minWidth: 40,
                        sortable: true,
                        hidden: false,
                        algin: "center",
                        fixed: true,
                    },
                    {
                        prop: "section",
                        label: "Section",
                        minWidth: 40,
                        sortable: true,
                        hidden: false,
                        algin: "center",
                        fixed: true,
                    },
                    {
                        prop: "email",
                        label: "Email",
                        minWidth: 40,
                        sortable: true,
                        hidden: false,
                        algin: "center",
                        fixed: true,
                    }
                ]
            }
        },
        methods: {
            create() {
                window.location.href = "/add-student"
            }
        }
    }
</script>
