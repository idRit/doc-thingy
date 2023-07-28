<script>
  let current_activity_levels = '';
  let problematic_adls = '';

  // Function to handle form submission
  function handleSubmit() {
    // You can add your logic here to handle the form submission.
    // For example, you can send the data to a server or perform client-side validation.
    // Since this is a front-end only component, we won't be implementing the form submission logic here.
  }
</script>

<style>
  /* Add your custom CSS styles here if needed */
</style>

<form on:submit|preventDefault={handleSubmit}>
  <h2>Physical Activities</h2>
  <label>
    Current Activity Levels:
    <textarea bind:value={current_activity_levels} rows="5"></textarea>
  </label>

  <label>
    Problematic ADLs (Activities of Daily Living):
    <textarea bind:value={problematic_adls} rows="5"></textarea>
  </label>

  <button type="submit">Submit</button>
</form>
