<script>
  let o_a = '';
  let posture = '';
  let medication_pulmonary = '';
  let medication_others = '';

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
  <h2>O/A and Posture</h2>
  <label>
    O/A (On examination):
    <input type="text" bind:value={o_a} />
  </label>

  <label>
    Posture:
    <input type="text" bind:value={posture} />
  </label>

  <h2>Medication</h2>
  <label>
    Pulmonary Medication:
    <input type="text" bind:value={medication_pulmonary} />
  </label>

  <label>
    Other Medication:
    <input type="text" bind:value={medication_others} />
  </label>

  <button type="submit">Submit</button>
</form>
