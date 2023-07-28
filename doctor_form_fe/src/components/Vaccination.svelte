<script>
  let influenza_taken = false;
  let influenza_date = '';

  let pneumonia_taken = false;
  let pneumonia_date = '';

  let covid_taken = false;
  let covid_date = '';

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
  <h2>Vaccination Details</h2>

  <label>
    Influenza Vaccination Taken:
    <input type="checkbox" bind:checked={influenza_taken} />
  </label>

  {#if influenza_taken}
    <label>
      Date of Influenza Vaccination:
      <input type="date" bind:value={influenza_date} />
    </label>
  {/if}

  <label>
    Pneumonia Vaccination Taken:
    <input type="checkbox" bind:checked={pneumonia_taken} />
  </label>

  {#if pneumonia_taken}
    <label>
      Date of Pneumonia Vaccination:
      <input type="date" bind:value={pneumonia_date} />
    </label>
  {/if}

  <label>
    COVID-19 Vaccination Taken:
    <input type="checkbox" bind:checked={covid_taken} />
  </label>

  {#if covid_taken}
    <label>
      Date of COVID-19 Vaccination:
      <input type="date" bind:value={covid_date} />
    </label>
  {/if}

  <!-- Other symptom fields from the previous form -->
  <!-- ... -->

  <button type="submit">Submit</button>
</form>
