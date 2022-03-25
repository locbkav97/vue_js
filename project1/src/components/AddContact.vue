<template> 
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <form>
                <fieldset>
                    <div class="form-group">
                        <div class="form-label mt-4">Name</div>
                        <input type="text" class="form-control" placeholder="Enter name">
                    </div>
                      <div class="form-group">
                        <div class="form-label mt-4">Email</div>
                        <input type="email" class="form-control" placeholder="Enter email">
                    </div>
                      <div class="form-group">
                        <div class="form-label mt-4">Designation</div>
                        <input type="text" class="form-control" placeholder="Enter designation">
                    </div>
                      <div class="form-group">
                        <div class="form-label mt-4">Contact_no</div>
                        <input type="text" class="form-control" placeholder="Enter contact no">
                    </div>
                    <button class="btn btn-primary mt-4">Submit</button>
                </fieldset>
            </form>
        </div>
    </div>
</div>
</template>

<script> 
export default {
    name: 'AddContact'
}
</script>