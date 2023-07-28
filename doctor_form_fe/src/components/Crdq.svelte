<script>
  // Initialize the arrays for the "crdq" fields
  let being_angry_or_upset = Array(3).fill({ date: '', presence: false });
  let shower = Array(3).fill({ date: '', presence: false });
  let bending = Array(3).fill({ date: '', presence: false });
  let carrying = Array(3).fill({ date: '', presence: false });
  let dressing = Array(3).fill({ date: '', presence: false });
  let eating = Array(3).fill({ date: '', presence: false });
  let walking = Array(3).fill({ date: '', presence: false });
  let housework = Array(3).fill({ date: '', presence: false });
  let hurrying = Array(3).fill({ date: '', presence: false });
  let lying_flat = Array(3).fill({ date: '', presence: false });

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
  <h2>CRDQ (COPD Rapid Assessment Questionnaire)</h2>
  <h3>Being Angry or Upset</h3>
  {#each being_angry_or_upset as item, index}
    <label>
      Date {index + 1}:
      <input type="date" bind:value={item.date} />
    </label>
    <label>
      Presence:
      <input type="checkbox" bind:group={being_angry_or_upset[index].presence} />
    </label>
  {/each}

  <!-- Repeat the above pattern for other CRDQ fields -->
  <!-- ... -->

  <h3>Shower</h3>
  {#each shower as item, index}
    <label>
      Date {index + 1}:
      <input type="date" bind:value={item.date} />
    </label>
    <label>
      Presence:
      <input type="checkbox" bind:group={shower[index].presence} />
    </label>
  {/each}

  <h3>Bending</h3>
  {#each bending as item, index}
    <label>
      Date {index + 1}:
      <input type="date" bind:value={item.date} />
    </label>
    <label>
      Presence:
      <input type="checkbox" bind:group={bending[index].presence} />
    </label>
  {/each}

  <h3>Carrying</h3>
  {#each carrying as item, index}
    <label>
      Date {index + 1}:
      <input type="date" bind:value={item.date} />
    </label>
    <label>
      Presence:
      <input type="checkbox" bind:group={carrying[index].presence} />
    </label>
  {/each}

  <h3>Dressing</h3>
  {#each dressing as item, index}
    <label>
      Date {index + 1}:
      <input type="date" bind:value={item.date} />
    </label>
    <label>
      Presence:
      <input type="checkbox" bind:group={dressing[index].presence} />
    </label>
  {/each}

  <h3>Eating</h3>
  {#each eating as item, index}
    <label>
      Date {index + 1}:
      <input type="date" bind:value={item.date} />
    </label>
    <label>
      Presence:
      <input type="checkbox" bind:group={eating[index].presence} />
    </label>
  {/each}

  <h3>Walking</h3>
  {#each walking as item, index}
    <label>
      Date {index + 1}:
      <input type="date" bind:value={item.date} />
    </label>
    <label>
      Presence:
      <input type="checkbox" bind:group={walking[index].presence} />
    </label>
  {/each}

  <h3>Housework</h3>
  {#each housework as item, index}
    <label>
      Date {index + 1}:
      <input type="date" bind:value={item.date} />
    </label>
    <label>
      Presence:
      <input type="checkbox" bind:group={housework[index].presence} />
    </label>
  {/each}

  <h3>Hurrying</h3>
  {#each hurrying as item, index}
    <label>
      Date {index + 1}:
      <input type="date" bind:value={item.date} />
    </label>
    <label>
      Presence:
      <input type="checkbox" bind:group={hurrying[index].presence} />
    </label>
  {/each}

  <h3>Lying Flat</h3>
  {#each lying_flat as item, index}
    <label>
      Date {index + 1}:
      <input type="date" bind:value={item.date} />
    </label>
    <label>
      Presence:
      <input type="checkbox" bind:group={lying_flat[index].presence} />
    </label>
  {/each}

  <button type="submit">Submit</button>
</form>
