<script>
  let diagnosisComorbiditiesData = [
    {
      diagnosis: {
        type: 'COPD',
        enum: ['COPD', 'Interstitial Lung Disease', 'Bronchiectasis', 'Asthma'],
      },
      comorbodities: [
        {
          metabolic_disease_medication: {
            type: '',
          },
        },
        {
          heart_disease_medication: {
            type: '',
          },
        },
        {
          neurological_disease_medication: {
            type: '',
          },
        },
      ],
      selectedDiagnosis: '',
    },
    {
      diagnosis: {
        type: 'Post-TB sequale',
        enum: ['Post-TB sequale', 'Obstructive sleep apnoea', 'Respiratory Failure', 'Lung cancer'],
      },
      comorbodities: [
        {
          musculoskeletal_disorder_medication: {
            type: '',
          },
        },
        {
          h_o_surgery_medication: {
            type: '',
          },
        },
        {
          psychological_disorder_medication: {
            type: '',
          },
        },
      ],
      selectedDiagnosis: '',
    },
    {
      diagnosis: {
        type: 'Post-PTCA',
        enum: ['Post-PTCA', 'Post-CABG', 'Post-COVID', 'Pulmonary Hypertension'],
      },
      comorbodities: [
        {
          cancer_medication: {
            type: '',
          },
        },
        {
          gastro_oesophagal_reflux_disease_medication: {
            type: '',
          },
        },
        {
          peripheral_vascular_disease_medication: {
            type: '',
          },
        },
        {
          skin_disease_medication: {
            type: '',
          },
        },
        {
          myopathy_neuropathy_medication: {
            type: '',
          },
        },
      ],
      selectedDiagnosis: '',
    },
  ];

  function handleSubmit() {
    console.log('Form Data:', diagnosisComorbiditiesData);
    // You can add your logic here to handle the form submission.
    // For example, you can send the data to a server or perform client-side validation.
  }
</script>

<style>
  /* Add your custom CSS styles here if needed */
</style>

<form on:submit|preventDefault={handleSubmit}>
  {#each diagnosisComorbiditiesData as item, index}
    <div>
      <h3>Diagnosis {index + 1}</h3>
      <select value={item.selectedDiagnosis} on:change={(e) => item.selectedDiagnosis = e.target.value}>
        {#each item.diagnosis.enum as diagnosis}
          <option value={diagnosis}>{diagnosis}</option>
        {/each}
      </select>

      {#if item.selectedDiagnosis}
        <h4>Comorbidities</h4>
        {#each item.comorbodities as comorbidity, comorbidityIndex}
          <select value={comorbidity.type} on:change={(e) => comorbidity.type = e.target.value}>
            {#each Object.keys(comorbidity) as key}
              {#if key !== 'type'}
                <option value={key}>{key}</option>
              {/if}
            {/each}
          </select>
        {/each}
      {/if}
    </div>
  {/each}

  <button type="submit">Submit</button>
</form>
