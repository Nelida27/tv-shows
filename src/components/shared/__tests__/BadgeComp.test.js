import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BadgeComp from '../BadgeComp.vue'

describe('BadgeComp', () => {
  it('show badge items', () => {
    const wrapper = mount(BadgeComp, { props: { items: ['Test']} })
    expect(wrapper.html()).toContain('Test')
  })

})