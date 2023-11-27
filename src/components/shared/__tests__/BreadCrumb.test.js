import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BreadCrumb from '../BreadCrumb.vue'

describe('BreadCrumb', () => {
  it('show BreadCrumb', () => {
    const items = [
        { label: 'Home', route: '/' },

      ];
    const wrapper = mount(BreadCrumb, { props: { routes: items} })
    expect(wrapper.html()).toContain('/')
  })

})