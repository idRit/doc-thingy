<script>
  let type = 'chawl'; // Default to 'chawl'
  let elevator_present = false; // Default to false
  let floor = 1; // Default to 1
  let need_for_stairs = '';

  // Function to handle form submission
  function handleSubmit() {
    const housing = {
      housing: {
        type,
        elevator_present,
        floor,
        need_for_stairs,
      },
    };

    console.log(housing);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Type of Housing:
    <select bind:value={type}>
      <option value="chawl">Chawl</option>
      <option value="flat">Flat</option>
      <option value="apartment">Apartment</option>
      <option value="bunglow">Bunglow</option>
    </select>
  </label>

  <label>
    Elevator Present:
    <input type="checkbox" bind:checked={elevator_present} />
  </label>

  <label>
    Floor Number:
    <input type="number" bind:value={floor} />
  </label>

  <label>
    Special Needs or Requirements for Stairs:
    <textarea bind:value={need_for_stairs} />
  </label>

  <button type="submit">Submit</button>
</form>
