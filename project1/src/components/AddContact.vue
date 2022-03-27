<template> 
<div class="container">
    <div class="row">
        <div class="col-md-6">

            <div class="alert alert-danger mt-4" v-if="errors.length">
                   <ul class="mb-0">
                       <li v-for="(error, index) in errors" :key="index">
                              {{error}}
                       </li>
                   </ul>
            </div>
            <form @submit.prevent= "save_contact" novalidate>
                <fieldset>
                    <div class="form-group">
                        <div class="form-label mt-4">Name</div>
                        <input type="text" class="form-control" placeholder="Enter name" v-model="contact.name">
                    </div>
                      <div class="form-group">
                        <div class="form-label mt-4">Email</div>
                        <input type="email" class="form-control" placeholder="Enter email" v-model="contact.email">
                    </div>
                      <div class="form-group">
                        <div class="form-label mt-4">Designation</div>
                        <input type="text" class="form-control" placeholder="Enter designation" v-model="contact.designation">
                    </div>
                      <div class="form-group">
                        <div class="form-label mt-4">Contact_no</div>
                        <input type="text" class="form-control" placeholder="Enter contact no" v-model="contact.contact_no">
                    </div>
                    <button class="btn btn-primary mt-4">Submit</button>
                </fieldset>
            </form>
        </div>
    </div>
</div>
</template>

<script> 
import axios from "axios";
export default {
    name: 'AddContact',
    data() {
        return {
            contact: {},
            name : '',
            email : '',
            designation: '',
            contact_no: '',
            errors: []
        }
    },
    methods: {
       async save_contact() {
             this.errors = [];
             if (!this.contact.name) {
                 this.errors.push("Name is required")
                 console.log(this.errors)
             }
             if (!this.contact.email) {
                 this.errors.push("Email is required")
             }
             if (!this.contact.designation) {
                 this.errors.push("Designation is required")
             }
             if (!this.contact.contact_no) {
                 this.errors.push("Contact No is required")
             }
             
             if (!this.errors.length) {
                 let formData = new FormData()
                 formData.append('name', this.contact.name)
                 formData.append('email', this.contact.email)
                 formData.append('designation', this.contact.designation)
                 formData.append('contact_no', this.contact.contact_no)
                 let url = 'http://127.0.0.1:8000/api/save_contact';
                 await axios.post(url,formData).then((response) => {
                     console.log(response)
                     if(response.status == 200){
                         this.contact.name = ''
                         this.contact.email = ''
                         this.contact.designation = ''
                         this.contact.contact_no = ''
                         alert(response.data.message)
                     }else {
                         console.log('error')
                     }
                 }).catch(error => {
                     this.errors.push(error.response)
                 })
                 
             }

        }
    }
}
</script>