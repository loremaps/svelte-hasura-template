<script>
  import { setClient } from "svelte-apollo";
  import { client } from "./apollo.js";

  import Profile from "./Profile.svelte";

  setClient(client);
</script>

<h1>Hello</h1>

<Profile />
