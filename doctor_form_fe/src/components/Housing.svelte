<script>
  export let type = 'chawl'; // Default to 'chawl'
  export let elavator_present = false; // Default to false
  export let floor = 1; // Default to 1
  export let need_for_stairs = '';

  export let isEdit = false;
  export let patientId = "";

  import { createDetails, updateDetails } from "../util/requests";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // Function to handle form submission
  function handleSubmit() {
    const details = {
      housing: {
        type,
        elavator_present,
        floor,
        need_for_stairs,
      },
    };

    if (isEdit) {
      updateDetails("housing", patientId, details.housing).then((result) => {
        console.log("res: ", result);
        dispatch("edit", {
          result,
        });
      });
    } else
      createDetails(details.housing).then((result) => {
        console.log("res: ", result);
        dispatch("edit", {
          result,
        });
      });

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

  <button type="submit">Submit</button>
</form>
