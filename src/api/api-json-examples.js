//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SEARCH API
hits: Array(10)
0:
highlights: []
index: "song"
result:
annotation_count: 69
api_path: "/songs/70324"
full_title: "Mercy by Kanye West (Ft. 2 Chainz, Big Sean & Pusha-T)"
header_image_thumbnail_url: "https://images.genius.com/8a79002727bdfaa640f2440d14e3353f.300x300x1.jpg"
header_image_url: "https://images.genius.com/8a79002727bdfaa640f2440d14e3353f.1000x1000x1.jpg"
->>>id: 70324
lyrics_owner_id: 104344
lyrics_state: "complete"
path: "/Kanye-west-mercy-lyrics"
primary_artist: {api_path: "/artists/72", header_image_url: "https://images.genius.com/d32d1b589a5cc45eb0f2b628980b4533.600x400x1.jpg", id: 72, image_url: "https://images.genius.com/ea7d95da1d379138d27c468680db90a0.683x683x1.jpg", is_meme_verified: false, …}
pyongs_count: 328
song_art_image_thumbnail_url: "https://images.genius.com/bc2ea98822653bf0fbb4cda313c705d2.300x300x1.jpg"
stats: {hot: false, unreviewed_annotations: 0, pageviews: 6237144}
title: "Mercy"
title_with_featured: "Mercy (Ft. 2 Chainz, Big Sean & Pusha-T)"
url: "https://genius.com/Kanye-west-mercy-lyrics"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//REFERENTS
{referents: Array(10)}
referents: Array(10)
0:
->>>annotatable: {api_path: "/songs/70324", client_timestamps: {…}, context: "Kanye West", id: 70324, image_url: "https://images.genius.com/bc2ea98822653bf0fbb4cda313c705d2.700x700x1.jpg", …}
          annotatable:
          api_path: "/songs/70324"
          client_timestamps: {updated_by_human_at: 1536587963, lyrics_updated_at: 1536587962}
          context: "Kanye West"
          id: 70324
      ->>>image_url: "https://images.genius.com/bc2ea98822653bf0fbb4cda313c705d2.700x700x1.jpg"
      ->>>link_title: "Mercy by Kanye West (Ft. 2 Chainz, Big Sean & Pusha-T)"
          title: "Mercy"
          type: "Song"
      ->>>url: "https://genius.com/Kanye-west-mercy-lyrics"
->>>annotations: [{…}]
annotations: Array(1)
0:
          api_path: "/annotations/13117484"
          authors: [{…}]
          body: {dom: {…}}
          comment_count: 0
          community: true
          cosigned_by: []
          current_user_metadata: {permissions: Array(1), excluded_permissions: Array(14), interactions: {…}, iq_by_action: {…}}
          custom_preview: null
          has_voters: true
          id: 13117484
          pinned: false
          rejection_comment: null
          share_url: "https://genius.com/13117484"
          source: null
          state: "accepted"
          url: "https://genius.com/13117484/Kanye-west-mercy/Now-we-out-in-paris-yeah-im-perrierin"
          verified: false
          verified_by: null
          votes_total: 3
annotator_id: 3357303
annotator_login: "RigmaRollin"
api_path: "/referents/13117484"
classification: "accepted"
->>>fragment: "Now we out in Paris, yeah, I'm Perrierin'"
id: 13117484
is_description: false
path: "/13117484/Kanye-west-mercy/Now-we-out-in-paris-yeah-im-perrierin"
range: {content: "Now we out in Paris, yeah, I'm Perrierin'"}
song_id: 70324
->>>url: "https://genius.com/13117484/Kanye-west-mercy/Now-we-out-in-paris-yeah-im-perrierin"
verified_annotator_ids: []




2: {tag: "p", children: Array(5)}

0: "Logic once said something very similar in an "
1: {tag: "a", attributes: {…}, children: Array(1)}
      attributes: {href: "https://youtu.be/GQmZKnrS3rI", rel: "noopener nofollow"}
      children: ["interview"]
tag: "a"
2: " with "
3: {tag: "a", attributes: {…}, children: Array(1)}
4: ":"

1st: MAP over the array Main array -DONE
2nd: Check if its a Object or empty string -DONE
3rd: If Object then check the tag property then save ?? <-- think about -DONE
3rd: Check children property if its a string then return if its a array then MAP
4th: If Object check if attributes property is available if it is then retrieve href and children
3rd: If Object then acess children property and RETURN string if NOT object then return

RETURN : A Array with Object or string in the end AND EMPTY STRING
MINI example [{}, "", {}, "EMPTY"]
{
  tag: "",
  attributes: ""<--- // REVIEW: ,
  children: "string"

}

--> Send a array of [{}, {}] which will be mapped and mapped again lol. And will check the tag and if it has a attribute
and then display the children with the tag and attribute
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
