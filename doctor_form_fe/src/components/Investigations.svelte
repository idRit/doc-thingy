<script>
  let ct_scan_date = '';
  let ct_scan_findings = '';

  let echo_2d_date = '';
  let echo_2d_findings = '';

  let ecg_date = '';
  let ecg_findings = '';

  let chest_xray_date = '';
  let chest_xray_findings = '';

  let abg_date = '';
  let abg_findings = '';

  let others_date = '';
  let others_findings = '';

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
  <h2>Investigations</h2>
  <label>
    CT Scan Date:
    <input type="date" bind:value={ct_scan_date} />
  </label>
  <label>
    CT Scan Findings:
    <textarea bind:value={ct_scan_findings} rows="5"></textarea>
  </label>

  <label>
    Echo 2D Date:
    <input type="date" bind:value={echo_2d_date} />
  </label>
  <label>
    Echo 2D Findings:
    <textarea bind:value={echo_2d_findings} rows="5"></textarea>
  </label>

  <label>
    ECG Date:
    <input type="date" bind:value={ecg_date} />
  </label>
  <label>
    ECG Findings:
    <textarea bind:value={ecg_findings} rows="5"></textarea>
  </label>

  <label>
    Chest X-ray Date:
    <input type="date" bind:value={chest_xray_date} />
  </label>
  <label>
    Chest X-ray Findings:
    <textarea bind:value={chest_xray_findings} rows="5"></textarea>
  </label>

  <label>
    ABG Date:
    <input type="date" bind:value={abg_date} />
  </label>
  <label>
    ABG Findings:
    <textarea bind:value={abg_findings} rows="5"></textarea>
  </label>

  <label>
    Others Date:
    <input type="date" bind:value={others_date} />
  </label>
  <label>
    Others Findings:
    <textarea bind:value={others_findings} rows="5"></textarea>
  </label>

  <button type="submit">Submit</button>
</form>
