<script>
  let dyspnoea_intensity = '';
  let dyspnoea_aggravating_factors = '';
  let dyspnoea_variation_seasonal = '';
  let dyspnoea_variation_positional = '';
  let dyspnoea_variation_pnd = '';
  let dyspnoea_variation_orthopnoea = '';

  let cough_type = 'non-productive';
  let cough_sputum_presence = false;
  let cough_sputum_colour = '';
  let cough_sputum_odour = '';
  let cough_sputum_amount = '';
  let cough_variation_seasonal = '';
  let cough_variation_positional = '';

  let non_productive_cough_activity_related = false;
  let non_productive_cough_activities = '';
  let non_productive_cough_reduced_on_oxygen = false;

  let other_symptoms_chest_tightness = false;
  let other_symptoms_joint_pain = false;
  let other_symptoms_numb_feet = false;
  let other_symptoms_urinary_incontinence = false;
  let other_symptoms_syncope_pre_syncope = false;
  let other_symptoms_vertigo = false;
  let other_symptoms_anxiety = false;
  let other_symptoms_depression = false;

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
  <h2>Dyspnoea</h2>
  <label>
    Intensity:
    <input type="text" bind:value={dyspnoea_intensity} />
  </label>

  <label>
    Aggravating Factors:
    <input type="text" bind:value={dyspnoea_aggravating_factors} />
  </label>

  <label>
    Seasonal Variation:
    <input type="text" bind:value={dyspnoea_variation_seasonal} />
  </label>

  <label>
    Positional Variation:
    <input type="text" bind:value={dyspnoea_variation_positional} />
  </label>

  <label>
    PND (Paroxysmal Nocturnal Dyspnoea):
    <input type="text" bind:value={dyspnoea_variation_pnd} />
  </label>

  <label>
    Orthopnoea:
    <input type="text" bind:value={dyspnoea_variation_orthopnoea} />
  </label>

  <h2>Cough</h2>
  <label>
    Type of Cough:
    <select bind:value={cough_type}>
      <option value="non-productive">Non-Productive</option>
      <option value="productive">Productive</option>
    </select>
  </label>

  <label>
    Sputum Presence:
    <input type="checkbox" bind:checked={cough_sputum_presence} />
  </label>

  {#if cough_sputum_presence}
    <label>
      Sputum Colour:
      <input type="text" bind:value={cough_sputum_colour} />
    </label>

    <label>
      Sputum Odour:
      <input type="text" bind:value={cough_sputum_odour} />
    </label>

    <label>
      Sputum Amount:
      <input type="text" bind:value={cough_sputum_amount} />
    </label>
  {/if}

  <label>
    Seasonal Variation:
    <input type="text" bind:value={cough_variation_seasonal} />
  </label>

  <label>
    Positional Variation:
    <input type="text" bind:value={cough_variation_positional} />
  </label>

  <h2>Non-Productive Cough Details</h2>
  <label>
    Activity-Related:
    <input type="checkbox" bind:checked={non_productive_cough_activity_related} />
  </label>

  {#if non_productive_cough_activity_related}
    <label>
      Activities:
      <input type="text" bind:value={non_productive_cough_activities} />
    </label>
  {/if}

  <label>
    Reduced on Oxygen:
    <input type="checkbox" bind:checked={non_productive_cough_reduced_on_oxygen} />
  </label>

  <h2>Other Symptoms</h2>
  <label>
    Chest Tightness:
    <input type="checkbox" bind:checked={other_symptoms_chest_tightness} />
  </label>

  <label>
    Joint Pain:
    <input type="checkbox" bind:checked={other_symptoms_joint_pain} />
  </label>

  <label>
    Numb Feet:
    <input type="checkbox" bind:checked={other_symptoms_numb_feet} />
  </label>

  <label>
    Urinary Incontinence:
    <input type="checkbox" bind:checked={other_symptoms_urinary_incontinence} />
  </label>

  <label>
    Syncope/Pre-syncope:
    <input type="checkbox" bind:checked={other_symptoms_syncope_pre_syncope} />
  </label>

  <label>
    Vertigo:
    <input type="checkbox" bind:checked={other_symptoms_vertigo} />
  </label>

  <label>
    Anxiety:
    <input type="checkbox" bind:checked={other_symptoms_anxiety} />
  </label>

  <label>
    Depression:
    <input type="checkbox" bind:checked={other_symptoms_depression} />
  </label>

  <button type="submit">Submit</button>
</form>
