/// <reference types="vite/client" />

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare const __WS_DEMO__: boolean
