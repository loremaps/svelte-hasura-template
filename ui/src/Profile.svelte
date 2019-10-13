<script>
  import { getClient, query } from "svelte-apollo";
  import { gql } from "apollo-boost";

  const client = getClient();

  const PROFILES_QUERY = gql`
    {
      profile {
        id
        name
      }
    }
  `;

  const profiles = query(client, { query: PROFILES_QUERY });
</script>

{#await $profiles}
  Loading...
{:then result}
  {#each result.data.profile as profile}
    <p>{profile.name}</p>
  {/each}
{:catch error}
  {error}
{/await}
