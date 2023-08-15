<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { getList, getOne } from "../util/requests"

  const dispatch = createEventDispatcher();

  let patients = [];

  onMount(async () => {
    patients = (await getList()).map(patient => ({
      id: patient._id,
      name: patient.general.name,
      age: patient.general.age,
      sex: patient.general.sex,
    }));

    console.log('patients: ', patients);
  });

  let searchText = '';
  
  // Function to handle the search bar input
  async function handleSearch(event) {
    searchText = event.target.value.toLowerCase();
    patients = (await getList(searchText.length ? searchText : 'all')).map(patient => ({
      id: patient._id,
      name: patient.general.name,
    }));
  }

  // Function to handle the "Edit" button click
  async function handleEdit(patientId) {
    // Implement your logic to handle the edit action here
    console.log('Edit patient with ID:', patientId);

    const patient = await getOne(patientId);

    dispatch('edit', {
      patientId,
      patient
    });
  }

  // Function to handle the "Create" button click
  function handleCreate() {
    // Implement your logic to handle the create action here
    console.log('Create new patient');

    dispatch('create', {});
  }
</script>

<style>
  /* Add your custom styles here */
</style>

<main>
  <!-- Search bar -->
  <input
    type="text"
    placeholder="Search patient..."
    on:input={handleSearch}
  />

  <!-- Table of contents -->
  <table>
    <thead>
      <tr>
        <th>Patient Name</th>
        <th>Patient Age</th>
        <th>Patient Sex</th>
        <th>Patient E-Mail</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#each patients as patient}
        <tr key={patient.id}>
          <td>{patient.name}</td>
          <td>{patient.age}</td>
          <td>{patient.sex}</td>
          <td>
            <a href="#" on:click={() => handleEdit(patient.id)}>Edit</a>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <!-- Create button -->
  <button on:click={handleCreate}>Create</button>
</main>
