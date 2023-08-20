<script>
  export let type = 'chawl'; // Default to 'chawl'
  export let elavator_present = false; // Default to false
  export let floor = 1; // Default to 1
  export let need_for_stairs = '';

  export let isEdit = false;
  export let patientId = "";

  import { createDetails, updateDetails } from "../util/requests";
  import { createEventDispatcher } from "svelte";
  import { submit, handleSubmit } from "../stores/submitSync.store";

  const dispatch = createEventDispatcher();

  const unsubscribe = submit.subscribe((value) => {
    if (!value) return;

    const details = {
      housing: {
        type,
        elavator_present,
        floor,
        need_for_stairs,
      },
    };

    handleSubmit.update(val => {
      if (!val) val = {};
      val.sections = val.sections ? [...val.sections, 'housing'] : ['housing'];
      val.data = val.data ? {...val.data, ...details} : details;  
      return val;
    });
	});
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
    <input type="checkbox" bind:checked={elavator_present} />
  </label>

  <label>
    Floor Number:
    <input type="number" bind:value={floor} />
  </label>

  <label>
    Special Needs or Requirements for Stairs:
    <textarea bind:value={need_for_stairs} />
  </label>

  <!-- <button type="submit">Submit</button> -->
</form>
