<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">
          conduit
        </h1>
        <p>A place to share your knowledge.</p>
        <p v-if="isDemoEnabled">With WebStorm</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <Suspense>
            <ArticlesList
              use-global-feed
              use-my-feed
              use-tag-feed
            />
            <template #fallback>
              Articles are downloading...
            </template>
          </Suspense>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <Suspense>
              <PopularTags />
              <template #fallback>
                Popular tags are downloading...
              </template>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ArticlesList from 'src/components/ArticlesList.vue'
import PopularTags from 'src/components/PopularTags.vue'

const isDemoEnabled = ref(__WS_DEMO__)
</script>
