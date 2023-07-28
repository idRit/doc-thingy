<script>
  let short_term_patient_goals = '';
  let short_term_therapist_goals = '';

  let long_term_patient_goals = '';
  let long_term_therapist_goals = '';

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
  <h2>Rehabilitation Goals</h2>
  <h3>Short-Term Goals</h3>
  <label>
    Patient Goals:
    <textarea bind:value={short_term_patient_goals} rows="5"></textarea>
  </label>

  <label>
    Therapist Goals:
    <textarea bind:value={short_term_therapist_goals} rows="5"></textarea>
  </label>

  <h3>Long-Term Goals</h3>
  <label>
    Patient Goals:
    <textarea bind:value={long_term_patient_goals} rows="5"></textarea>
  </label>

  <label>
    Therapist Goals:
    <textarea bind:value={long_term_therapist_goals} rows="5"></textarea>
  </label>

  <button type="submit">Submit</button>
</form>
