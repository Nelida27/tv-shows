import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import router from '../../../router'
import { mount } from '@vue/test-utils'
import HeaderView from '../HeaderView.vue'

function mountTheHeader() {
  const wrapper = mount(HeaderView, {
    global: {
      plugins: [router]
    }
  })
  return wrapper
}

describe('Router', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('mounts properly', () => {
    expect(mountTheHeader().text()).toContain('TV Shows')
    expect(mountTheHeader().find('input').exists()).toBe(true)
  })
  //to be tested the search input
})
