import { describe, it, expect } from 'vitest'


import { mount } from '@vue/test-utils'
import ShowDescription from '../ShowDescription.vue'

describe('Show Description', () => {
  const selectedItem = { id: 1, name: 'Test', rating: { avrage: 6.5 }, summary: 'tests' }
  it('show description comp renders', () => {
    const wrapper = mount(ShowDescription, {
      props: { show: selectedItem, withSummery: true, withTitle: true }
    })
    expect(wrapper.exists()).toBeTruthy()
  })
})
